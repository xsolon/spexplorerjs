
// v 0.1.2 - 2018/03/28 - Renamed to list.editor (from list.selector)
//                      - Bug: CodeMirror dimensions
// v 0.1.1 - 2018/03/24 - Register through widgets.base
//                      - Sync custom actions control with list selector
/// TODO: Document
import $ from "jquery";
import "../logger/logger.js";
import "./sp.base.js";
import "./sp.web.js";
import "./treelight.js";
import "./field.selector.js";
import "./customaction.editor.js";
import "../mirrors/jsmirror.js";
import "../mirrors/xmlmirror.js";
import template from "./list.editor.template.html";
import "../widget.base.js";

(function (ns, $, template) {

	var debug = window.location.href.search(/[localhost|debuglisteditor]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "list.selector";
		return d;
	};

	var SPListWidget = function (el/*, opts*/) {// constructor
		var $el = $(el), me = {};//, ctx = null;
		//opts = $.extend({}, opts);
		$el.html($(template).html());

		$("#btnAdd", $el).click(function () { });

		var jsWidget = ns.widgets.xjsmirror.startup($el).data("xwidget");
		jsWidget.setScript("console.log(spelem);// spelem: reference to list");
		var xmlWidget = ns.widgets.xxmlmirror.startup($(".listschema", $el)).data("xwidget");
		var fieldSelector = ns.widgets.xSPFieldSelector.startup($el, { showSelector: false });
		var caCtrl = ns.widgets.spCustomActions.startup($el, { showSelector: false }).data("xwidget");

		ns.widgets.xSPTreeLight.startup($(".listSelectorFirst", $el)).on("listchange", function (event, list) {

			$("#title", $el).val(list.get_title());
			jsWidget.setScriptingObject(list);
			fieldSelector.data("xSPFieldSelector").setList(list);
			caCtrl.setList(list);

			var showSchema = function () {
				xmlWidget.setXml(list.get_schemaXml());
			};

			if (list.isPropertyAvailable("SchemaXml")) {
				showSchema();
			} else {
				var ctx = list.get_context();
				ctx.load(list, "SchemaXml");
				ns.sp.loadSpElem(list, ctx).done(showSchema);
			}
		});

		// refresh CodeMirrors that may not be visible to address dimension issues
		$(".nav-tabs a", $el).click(function () {
			setTimeout(function () {
				$("iframe.mirror", $el).each(function () {
					$(this).contents().find("textarea").data("CodeMirror").refresh();
				});
			}, 500);
		});

		return me;
	};

	(function register() {
		var widgetInfo = ns.widgets.addWidget("spListWidget", SPListWidget, "0.1.2");

		if (window["ExecuteOrDelayUntilScriptLoaded"]) {
			ExecuteOrDelayUntilScriptLoaded(function () {
				widgetInfo.startup();
			}, "sp.js");
			SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });
		}
		else widgetInfo.startup();


	})();
})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $, template);