/// <reference path="../api/sp.list.js" />
/// <reference path="../../../../node_modules/@types/sharepoint/index.d.ts" />
/* global require */
import "../api/api.js";
//import "./sp.list.js";
import template from "./masterpageselector.template.html";
import "../../widget.base.js";

(function (ns, $) {

	var debugging = window.location.href.search(/(local|debugmasterpagesel)/) > 0;
	var trace = ns.modules.logger.get("masterpageSelector", debugging);

	(function loadPublicRefs() {

		if ($.fn.select2) {
			trace.debug("select2 already loaded");
		} else {
			trace.log("loading select2");
			require("../../../../public/vendor/select2/js/select2.full.js");
			require("../../../../public/vendor/select2/css/select2.css");
		}
	})();

	var getMasterPages = function (ctx) {
		var site = ctx.get_site();
		var rootWeb = site.get_rootWeb();

		var lists = rootWeb.get_lists();
		var list = lists.getByTitle("Master Page Gallery");

		var caml = "<View Scope='Recursive'>\
        <ViewFields>\
          <FieldRef Name='Title'></FieldRef>\
          <FieldRef Name='FileRef'></FieldRef>\
        </ViewFields><RowLimit>100</RowLimit>\
    <Query><Where><And><Contains><FieldRef Name='FileLeafRef' /><Value Type='Text'>.master</Value></Contains><Eq>\
      <FieldRef Name='ContentType'/><Value Type='Computed'>Master Page</Value>\
    </Eq></And></Where></Query></View>";

		return ns.modules.listapi.getAll(list, ctx, caml);

	};
	var fieldTemplate = null;
	var fieldLabel = function (masterPage) {
		fieldTemplate = fieldTemplate || $(".itemTemplate:first").html().trim();
		var valu = ns.modules.string.format(fieldTemplate, masterPage.get_item("FileLeafRef"),
			masterPage.get_item("ID"),
			masterPage.get_item("Editor").get_lookupValue(),
			masterPage.get_item("FileRef"));
		return valu;
	};
	var bindSelect = function (sel, items) {

		items.forEach(function (item) {
			var html = `<option value='${item.get_item("FileRef")}'>${item.get_item("FileLeafRef")}</option>`;
			var opt = $(html);

			opt.prop("data-item", item);

			sel.append(opt);
		});

		var initSelect2 = function (sel) {
			sel.select2({
				templateResult: function formatState(state) {

					if (!state.id) { return state.text; }

					var item = $(state.element).prop("data-item");

					var $state = $(fieldLabel(item));

					return $state;
				}, templateSelection: function (data/*, container*/) {
					return $(data.element).prop("data-item").get_item("FileLeafRef");
				}
			});

		};

		initSelect2(sel);
	};

	var xSpMastePageSelector = function (ui, opts) {
		trace.debug("init");
		var $el = $(ui);

		opts = $.extend({
			label: $el.attr("data-label") || "MasterPage",
			showSelector: true, prop: "MasterUrl", showSave: false, web: null
		}, opts);

		var ctx;
		var web = opts.elem;
		if (web) {
			ctx = web.get_context();
		} else {
			trace.debug("creating web reference");
			ctx = ns.modules.spapi.getCtx();
			web = ctx.get_web();
		}

		//var props = {
		//	"MasterUrl": { set: "set_masterUrl", get: "get_masterUrl", name: "MasterUrl" },
		//	"CustomMasterUrl": { set: "set_customMasterUrl", get: "get_customMasterUrl", name: "CustomMasterUrl" }
		//};

		var selectedProp = opts.prop;// props[opts.prop];

		$el.html(template.trim().replace("[label]", opts.label));

		var uiBuilder = function (wrapper, items, updateFunction) {
			var ctrl = $(".xDrp", wrapper).on("change", function () {
				var optSel = ctrl.find(":selected");
				var field = optSel.prop("data-item");
				trace.debug(`master selected: ${optSel.val()}`);
				if (field) {
					trace.log({ field: field });
					var url = ctrl.val();
					web[updateFunction](url);
				}

			});
			bindSelect(ctrl, items, false);

			$("button", wrapper).click(function () {

				web.update();

				ns.modules.spapi.loadSpElem(web, ctx).done(function () {
					SP.UI.Notify.addNotification("Master page updated");
				});
			});

			return ctrl;
		};

		var bindUi = function () {

			var url = web[selectedProp.get]();

			getMasterPages(ctx).done(function (items) {
				trace.debug(items);
				uiBuilder($el, items, selectedProp.set).val(url).trigger("change.select2");
			});
		};

		if (web.isPropertyAvailable(selectedProp.name)) {
			bindUi();
		} else {
			trace.debug(web);
			ns.modules.spapi.loadSpElem(web).done(function () {
				bindUi();
			});
		}

		var me = {};

		return me;

	};

	ns.widgets.addSpWidget("xSpMastePageSelector", xSpMastePageSelector, "0.0.3");

})(spexplorerjs, spexplorerjs.modules.jQuery);