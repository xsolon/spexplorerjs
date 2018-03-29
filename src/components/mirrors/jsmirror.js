// v 0.0.1 - 2018/03/28     - Alt-Run to run code, Alt-F: format, Ctrl-Q: Collapse/Expand method
//                          - setScript method
//                          - use Function constructor for code execution
//                          - refresh method
import $ from "jquery";
import "./jseditor.js";
import template from "./jsmirror.template.html";
import "../widget.base.js";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(localhost|debugjsmirror)/) > 0;
	var tracing = ns.logger.get("jsmirror", debugging);
	var log = tracing.log, debug = tracing.debug, error = tracing.error;

	var xjsmirror = function (ui, opts) {

		debug("xjsmirror.init");

		var $el = $(ui);
		opts = $.extend({}, opts);

		$el.html(template.trim());
		var run = $("button", ui);

		var runScript = function (code) {
			try {
				log({ runScript: code });
				ns.spelem = opts.spelem;
				var script = "var log = console.log, clear = console.clear;\r\n\
                    {0}\r\n".replace("{0}", code);

				var tempFunction = new Function("spelem", script);
				var res = tempFunction(opts.spelem);
				if (res) console.log(res);
			} catch (e) {
				error(e.message);
				throw e;
			}

		};

		var editor = null;

		(function iframeImplementation() {

			var iframe = $("iframe", ui);
			iframe[0].contentWindow.document.write("<html><body><textarea></textarea></body></html>");

			var head = iframe.contents().find("head");
			$("style").each(function () {
				// cloneNode doesnt work in IE
				//head.append(this.cloneNode(true));
				var html = $(this).html().trim();
				if (html.search("CodeMirror") > 0)
					$("<style type='text/css'>" + html + "</style>").appendTo(head);
			});

			var editorCtrl = iframe.contents().find("textarea")[0];
			editor = ns.widgets.jseditorinit(editorCtrl);

			$(editorCtrl).on("run", function () {
				runScript(editor.get());
			});

			run.click(function () {
				runScript(editor.get());
				return false;
			});

		})();

		return {
			refresh: function () {
				editor.refresh();
			},
			setScript: function (obj) {
				editor.set(obj);
			},
			setScriptingObject: function (obj) {
				opts.spelem = obj;
			}
		};
	};

	var widgetInfo = ns.widgets.addWidget("xjsmirror", xjsmirror, "0.0.1");

	widgetInfo.startup();

})(window["spexplorerjs"], $, template);
