/// <reference path="../../components/logger/logger.js" />
/// <reference path="../mirrors/xmlmirror.js" />

// v 0.1.3 - 2018/04/03 - Updated to use trace, AddSpWidget
// v 0.1.2 - 2018/03/28 - Renamed to list.editor (from list.selector)
//                      - Bug: CodeMirror dimensions
// v 0.1.1 - 2018/03/24 - Register through widgets.base
//                      - Sync custom actions control with list selector

/// TODO: Document
import "./sp.base.js";
import "./sp.folderapi.js";
import "./sp.web.js";
import "./treelight.js";
import "./field.selector.js";
import "./customaction.editor.js";
import "../mirrors/jsmirror.js";
import "../mirrors/xmlmirror.js";
import "../widget.base.js";
import template from "./list.editor.template.html";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(localhost|debuglisteditor)/) > 0;
	var trace = ns.logger.get("list.selector", debugging);

	var SPListWidget = function (el/*, opts*/) {// constructor
		trace.log("new instance");
		var $el = $(el), me = {};//, ctx = null;
		//opts = $.extend({}, opts);
		$el.html(template);

		$("#btnAdd", $el).click(function () { });

		var jsWidget = ns.widgets.xjsmirror.startup($el).data("xwidget");
		var xmlWidget = ns.widgets.xxmlmirror.startup($(".listschema", $el)).data("xwidget");
		var camlWidget = ns.widgets.xxmlmirror.startup($(".scriptCaml", $el)).data("xwidget");
		var fieldSelector = ns.widgets.xSPFieldSelector.startup($el, { showSelector: false });
		var caCtrl = ns.widgets.spCustomActions.startup($el, { showSelector: false }).data("xwidget");

		jsWidget.setScript("console.log(list);// list: reference to list\r\nconsole.log(caml());//caml: function that returns xml in 'caml' editor");
		jsWidget.setScriptingObject("caml", function () { return camlWidget.getXml(); });

		ns.widgets.xSPTreeLight.startup($(".listSelectorFirst", $el)).on("listchange", function (event, list) {

			$("#title", $el).val(list.get_title());
			jsWidget.setScriptingObject("list", list);
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


		$(".nav-tabs a", $el).click(function () {
			/// TODO: manual tab switch, bug in sp dialogs
			var link = $(this);
			$("li.active", link.parents("ul:first")).removeClass("active");
			link.parents("li:first").addClass("active");
			var cnt = $(".tab-content", $el);
			$(".active", cnt).removeClass("active").removeClass("in");
			$(link.attr("href")).addClass("in").addClass("active");

			// refresh CodeMirrors that may not be visible to address dimension issues
			setTimeout(function () {
				$("iframe.mirror", $el).each(function () {
					$(this).contents().find("textarea").data("CodeMirror").refresh();
				});
			}, 500);
			return false;
		});

		return me;
	};

	ns.widgets.addSpWidget("spListWidget", SPListWidget, "0.1.4");

})(spexplorerjs, jQuery, template);