
// v 0.0.3 - 2018/05/23 - Load additional nodes
// v 0.0.2 - 2018/04/09 - Added caml editor
// v 0.0.1 - 2018/03/24 - v 1

/// TODO: Document
import "./widgets/treelight.js";
import "./api/api.js";
import "../mirrors/xmlmirror.js";
import "../mirrors/jsmirror.js";
import template from "./sp.explorer.template.html";
import "../widget.base.js";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(localhost|spexplorer)/) > 0;
	var trace = ns.modules.logger.get("spexplorer", debugging);

	var SpExplorer = function (el/*, opts*/) {// constructor
		var $el = $(el), me = {};
		$el.html(template);

		trace.debug("instance");

		var jsWidget = ns.widgets.xjsmirror.startup($el).data("xwidget");
		var camlWidget = ns.widgets.xxmlmirror.startup($el).data("xwidget");

		//jsWidget.setScript("console.log(spelem);// spelem: reference to selected node\r\nconsole.log(caml());//caml: function that returns xml in 'caml' editor");

		jsWidget.setScriptingObject("caml", function () { return camlWidget.getXml(); });

		$("[data-widget='xSPTreeLight']", $el).xSPTreeLight().on("selectionchange", function (e, spElem) {
			jsWidget.setScriptingObject("spelem", spElem);
		});

		return me;
	};

	ns.widgets.addSpWidget("xSpExplorer", SpExplorer, "0.0.3");

})(spexplorerjs, spexplorerjs.modules.jQuery, template);
