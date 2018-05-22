/// <reference path="../api/api.js" />
/* globals require */
import "../../widget.base.js";
import "./treelight.js"; // loads jstree, bootstrap
import "../api/api.js";
import template from "./ui.fields.template.html";
import fieldtemplate from "./field.selector.fieldtemplate.html";

(function (ns, $) {
	var name = "uifield";
	var debug = window.location.href.search(/[local|uifield]/) > 0;
	var trace = ns.modules.logger.get(name, debug);

	(function loadPublicRefs() {
		if ($.fn.select2) {
			trace.debug("select2 already loaded");
		} else {
			trace.log("loading select2");
			require("../../../../public/vendor/select2/js/select2.full.js");
			require("../../../../public/vendor/select2/css/select2.css");
		}
	})();

	var fieldLabel = function (field) {
		var tmpl = fieldtemplate.trim();
		var valu = ns.modules.string.format(tmpl, field.get_title(),
			field.get_internalName(),
			field.get_staticName(),
			field.get_id().toString(),
			field.constructor.getName()
		);
		return valu;
	};
	var fieldUi = function (el, opts) {// constructor
		var $el = $(el), me = {};
		opts = $.extend({
			excludereadonly: $el.attr("data-excludereadonly")
		}, opts);
		$el.html(template);
		var fieldContainer = null;
		var selection = [];
		var bindFieldSelect = function (sel, fields, excludereadonly) {

			sel.html("");

			fields.forEach(function (field) {
				var opt = $(`<option value="${field.get_title()}">${field.get_internalName().toString()}|${field.get_title()}</option>`);
				opt.prop("data-field", field);

				if (excludereadonly && field.get_readOnlyField()) {
					trace.debug("readonly");
				}
				else
					sel.append(opt);

			});

			sel.select2({
				templateResult: function formatState(state) {

					if (!state.id) { return state.text; }

					var field = $(state.element).prop("data-field");

					var $state = $(fieldLabel(field));

					return $state;
				}, templateSelection: function template(data/*, container*/) {

					return $(data.element).prop("data-field").get_title();
				}
			});
		};

		var select = $("[name='Fields']", $el).change(function () {
			selection = [];
			$(":selected", select).each(function (i, n) {
				var field = $(n).prop("data-field");
				selection.push(field);
			});
			trace.debug(select.val());
			$el.attr("data-value", selection).trigger("fieldselectionchange", [selection]);
		});

		me.bindToList = function (splist) {
			fieldContainer = splist || fieldContainer;

		  return $.Deferred(function(dfd) {
				ns.modules.listapi.getFields(fieldContainer).done(function (fields) {
					bindFieldSelect(select, fields, opts.excludereadonly);

			  dfd.resolve();
				});

		  }).promise();
		};

		me.set = function (fields) {

			$("option", $el).each(function () {
				var opti = $(this);
			  var internalName = opti.prop("data-field").get_internalName();
			  var has = fields.indexOf(internalName) > -1;
				opti.prop("selected", has);
			});
			select.trigger("change");

		};
		me.get = function () {
			return selection;
		};

		var readonlycheck = $(".ereadonly", $el);
		readonlycheck.click(function () {
			opts.excludereadonly = $(this).prop("checked");
			(fieldContainer && me.bindToList(fieldContainer));
		}).prop("checked", opts.excludereadonly);

		return me;
	};

	ns.widgets.addSpWidget(name, fieldUi, "0.1.2");

})(spexplorerjs, spexplorerjs.modules.jQuery);