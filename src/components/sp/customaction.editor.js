import template from "./customaction.editor.template.html";

import "../logger/logger.js";
import $ from "jquery";
import "./sp.list.js";
import "./treelight.js";
import "./customaction.selector.js";
import "../mirrors/xmlmirror.js";
import "../widget.base.js";

(function (ns, $, template) {

	var debug = window.location.href.search(/[localhost|debugcustomactions]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "list.selector";
		return d;
	};
	//var error = new function () {
	//	var d = function () {
	//		ns.logger && ns.logger.error.apply(log, arguments);
	//		if (debug)
	//			SP.UI.Notify.addNotification(arguments[0]);
	//	};
	//	d.source = "list.selector";
	//	return d;
	//};

	var CustomActions = function (el, opts) {// constructor
		var $el = $(el), me = {}, ctx = null;
		opts = $.extend({}, opts);
		$el.html($(template).html());
		$el.data("spCustomActions", me);

		//var actionSelector = $(".actionSelector", $el);
		var actionSelector = ns.widgets.xSPCustomActionSelector.startup($el);// $(ns.widgets.xSPCustomActionSelector.getSelector(), $el);
		var selectionWidget = actionSelector.data(ns.widgets.xSPCustomActionSelector.publicName);
		var xmlCtrl = ns.widgets.xxmlmirror.startup($el).data(ns.widgets.xxmlmirror.publicName);
		actionSelector.on("selectionchange", function (event, ca) {
			if (ca) {
				$("[data-get").each(function () {
					$(this).val(ca[$(this).attr("data-get")]());
				});
				xmlCtrl.setXml(ca.get_commandUIExtension());
			}
		});

		$("#btnAdd", $el).click(function () {
			var caSelCtrl = actionSelector.data(ns.widgets.xSPCustomActionSelector.publicName);

			xmlCtrl.getXml().done(function (xml) {
				var listOrWeb = caSelCtrl.container();
				var selectedAction = caSelCtrl.value();
				var spdal = new ns.customactions.dal();
				var location = $("#location", $el).val();
				var sequence = $("#sequence", $el).val();
				var title = $("#title", $el).val();
				var permissions = new SP.BasePermissions();
				permissions.set(SP.PermissionKind.editListItems);
				var src = $("#Src", $el).val();
				if (selectedAction == null) {
					spdal.addCustomAction(listOrWeb, location, xml, sequence, permissions, title, src);
				}
			});
		});
		//ns.widgets.xSPCustomActionSelector.startup($el);
		me.setList = function (list) {
			selectionWidget.container(list);
		};
		return me;
	};

	var widgetInfo = ns.widgets.addWidget("spCustomActions", CustomActions, "0.1.0");

	if (window["ExecuteOrDelayUntilScriptLoaded"]) {
		ExecuteOrDelayUntilScriptLoaded(function () {
			widgetInfo.startup();
		}, "sp.js");
		SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });
	}
	else widgetInfo.startup();

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $, template);