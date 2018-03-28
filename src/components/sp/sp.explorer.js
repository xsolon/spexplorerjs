// v 0.0.1 - 2018/03/24 - v 1

/// TODO: Document
import $ from "jquery";
import "./treelight.js";
import "./sp.web.js";
import "../mirrors/jsmirror.js";
import template from "./sp.explorer.template.html";
import "../widget.base.js";

(function (ns, $, template) {

	var debug = window.location.href.search(/[localhost|spexplorer]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "spexplorer";
		return d;
	};

	var SpExplorer = function (el/*, opts*/) {// constructor
		var $el = $(el), me = {};
		$el.html(template);

		var jsWidget = ns.widgets.xjsmirror.startup($el).data("xwidget");

		$("[data-widget='xSPTreeLight']", $el).xSPTreeLight().on("selectionchange", function (e, spElem) {
			jsWidget.setScriptingObject(spElem);
		});

		return me;
	};

	var widgetInfo = ns.widgets.addWidget("xSpExplorer", SpExplorer, "0.0.1");

	ExecuteOrDelayUntilScriptLoaded(widgetInfo.startup, "sp.js");

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $, template);
