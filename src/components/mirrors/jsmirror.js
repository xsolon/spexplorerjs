
// v 0.0.2 - 2018/04/04     - setScriptingObject: new signature allows to name resource that will be avaialbel during function execution
// v 0.0.1 - 2018/03/28     - Alt-Run to run code, Alt-F: format, Ctrl-Q: Collapse/Expand method
//                          - setScript method
//                          - use Function constructor for code execution
//                          - refresh method
import "./jseditor.js";
import template from "./jsmirror.template.html";
import "../widget.base.js";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(localhost|debugjsmirror)/) > 0;
	var trace = ns.logger.get("jsmirror", debugging);

	var xjsmirror = function (ui/*, opts*/) {

		trace.debug("xjsmirror.init");

		var $el = $(ui);
		//opts = $.extend({}, opts);

		$el.html(template.trim());
		var run = $("button", ui);

		var runScript = function (code) {
			try {
				trace.log({ runScript: code });
				var script = "var log = console.log, clear = console.clear;\r\n\
                    {0}\r\n".replace("{0}", code);

				var args = [];
				var vals = [];

				for (var name in resourceHash) {
					if (resourceHash.hasOwnProperty(name)) {
						args.push(name);
						vals.push(resourceHash[name]);
					}
				}

				var tempFunction = new Function(args, script);
				var res = tempFunction.apply(tempFunction, vals);
				if (res) console.log(res);
			} catch (e) {
				trace.error(e.message);
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

		var resourceHash = {};
		return {
			refresh: function () {
				editor.refresh();
			},
			setScript: function (obj) {
				editor.set(obj);
			},
			setScriptingObject: function (name,obj) {
				resourceHash[name] = obj;
			}
		};
	};

	var widgetInfo = ns.widgets.addWidget("xjsmirror", xjsmirror, "0.0.1");

	widgetInfo.startup();

})(spexplorerjs, jQuery, template);
