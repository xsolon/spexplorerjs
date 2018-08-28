// v 0.1.6 - 2018-04-04:    - getXml is not longer a promise
// v 0.1.5 - 2018-03-28:    - use widget declaration
//                          - refresh method
import "../widget.base.js";
import "./xmleditor.js";
import template from "./xmlmirror.template.html";

(function (ns, $) {

	var debugging = window.location.href.search(/(localhost|debugxmlmirror)/) > 0;
	var tracing = ns.modules.logger.get("xmlmirror", debugging);
	var log = tracing.log;
	var debug = tracing.debug;
	debug("xxmlmirror.loading");
	//   var error = tracing.error;

	var xxmlmirror = function (ui, opts) {
    
		log("xxmlmirror.init");

		var $el = $(ui);
		var state = ($("div.xmlmirrorstate:first", $el).html() || "").trim();
		opts = $.extend({ defaultScript: state }, opts);

		$el.html(template.trim());

		var editor = null;
		(function iframeImplementation() {
			var iframe = $("iframe", ui);

			editor = ns.widgets.xmleditorInitIframe(iframe);

		})();

		if (opts.defaultScript) {
			editor.set(ns.modules.string.htmlDecode(opts.defaultScript));
		}

		var me = {};
		me.refresh = function () { editor.refresh(); };
		me.getXml = function () {
			var code = editor.get();
			return code;
		};
		me.setXml = function (xml) {
			editor.set(xml);
		};

		return me;
	};

	var widgetInfo = ns.widgets.addWidget("xxmlmirror", xxmlmirror, "0.1.6");

	widgetInfo.startup();

})(window["spexplorerjs"], spexplorerjs.modules.jQuery);
