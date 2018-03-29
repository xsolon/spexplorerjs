// v 0.1.5 - 2018-03-28:    - use widget declaration
//                          - refresh method
import $ from "jquery";
import "../widget.base.js";
import "./xmleditor.js";
import template from "./xmlmirror.template.html";

(function (ns, $) {

	var debugging = window.location.href.search(/(localhost|debugxmlmirror)/) > 0;
	var tracing = ns.logger.get("xmlmirror", debugging);
	var log = tracing.log;
	var debug = tracing.debug;
	debug("xxmlmirror.loading");
	//   var error = tracing.error;

	var xxmlmirror = function (ui/*, opts*/) {

		log("xxmlmirror.init");

		var $el = $(ui);

		//opts = $.extend({}, opts);
		$el.html(template.trim());

		var editor = null;
		(function iframeImplementation() {
			var iframe = $("iframe", ui);

			editor = ns.widgets.xmleditorInitIframe(iframe);

		})();

		var me = {};
		me.refresh = function () { editor.refresh(); };
		me.getXml = function () {
			return $.Deferred(function (dfd) {

				var code = editor.get();
				dfd.resolve(code);
			}).promise();
		};
		me.setXml = function (xml) {
			editor.set(xml);
		};

		return me;
	};

	var widgetInfo = ns.widgets.addWidget("xxmlmirror", xxmlmirror, "0.1.5");

	widgetInfo.startup();

})(window["spexplorerjs"], $);
