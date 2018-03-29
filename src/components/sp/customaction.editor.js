// v 0.1.3 - 2018/03/28 - Widget declaration
// v 0.1.2 - 2018/03/24 - Option to preload local list: use attribute data-ListTitle
//                      - Working update of basic custom action fields: Title, Src, Sequence, Rights, Xml
// TODO: Implement all fields
import template from "./customaction.editor.template.html";

import $ from "jquery";
import "../widget.base.js";
import "./sp.list.js";
import "./treelight.js";
import "./customaction.selector.js";
import "./ui.perms.js";
import "../mirrors/xmlmirror.js";
import "../widget.base.js";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(localhost|debugcustomactions)/) > 0;
	var tracing = ns.logger.get("customactionEditor", debugging);
	var log = tracing.log, debug = tracing.debug;
	//var error = tracing.error;

	debug("customactionEditor.load");

	var CustomActions = function (el, opts) {// constructor
		log("customactionEditor.init");

		var $el = $(el), me = {};
		opts = $.extend({
			showSelector: true,
			listTitle: ($el.attr("data-listTitle") || "").trim()
		}, opts);
		$el.html($(template).html());
		$el.data("spCustomActions", me);

		//var actionSelector = $(".actionSelector", $el);
		var actionSelector = ns.widgets.xSPCustomActionSelector.startup($el, { listtitle: opts.listTitle });// $(ns.widgets.xSPCustomActionSelector.getSelector(), $el);

		var selectionWidget = actionSelector.data("xwidget");
		var xmlCtrl = ns.widgets.xxmlmirror.startup($el).data(ns.widgets.xxmlmirror.publicName);
		var permissionsCtrl = ns.widgets.spPermsSelector.startup($el).data("xwidget");

		actionSelector.on("ca.selectionchange", function (event, ca) {
			if (ca) {
				$("[data-get").each(function () {
					$(this).val(ca[$(this).attr("data-get")]());
				});
				xmlCtrl.setXml(ca.get_commandUIExtension());
				var rights = ca.get_rights();
				permissionsCtrl.setSpPerms(rights);
			}
		});

		if (!opts.showSelector) $(".listSelector", actionSelector).hide(); // hide treelight section

		$("#btnAdd", $el).click(function () {
			var caSelCtrl = actionSelector.data(ns.widgets.xSPCustomActionSelector.publicName);

			xmlCtrl.getXml().done(function (xml) {
				var listOrWeb = caSelCtrl.container();
				var selectedAction = caSelCtrl.value();
				var spdal = new ns.customactions.dal();
				var location = $("#Location", $el).val();
				var sequence = $("#Sequence", $el).val();
				var title = $("#Title", $el).val();
				var permissions = permissionsCtrl.getSpPerms();
				var src = $("#Src", $el).val();

				log({
					caValues: {
						location: location, xml: xml, sequence: sequence, permissions: permissions, title: title
					}
				});
				if (selectedAction == null) {
					spdal.addCustomAction(listOrWeb, location, xml, sequence, permissions, title, src).done(function () {

						selectionWidget.container(selectionWidget.container());
					});
				}
				else {
					selectedAction.set_title(title);
					selectedAction.set_location(location);
					selectedAction.set_sequence(sequence);
					selectedAction.set_rights(permissions);
					selectedAction.set_scriptSrc(src);
					selectedAction.set_commandUIExtension(xml);
					selectedAction.update();

					ns.sp.loadSpElem(selectedAction).done(function () {
						log("Action udpated");
					});
				}
			});
		});
		me.setList = function (list) {
			selectionWidget.container(list);
		};
		return me;
	};

	(function register() {
		var widgetInfo = ns.widgets.addWidget("spCustomActions", CustomActions, "0.1.3");

		if (window["ExecuteOrDelayUntilScriptLoaded"]) {
			ExecuteOrDelayUntilScriptLoaded(function () {
				widgetInfo.startup();
			}, "sp.js");
			SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });
		}
		else widgetInfo.startup();

	})();

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $, template);