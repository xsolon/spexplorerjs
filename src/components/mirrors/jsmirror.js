
// v 0.0.4 - 2018/04/09     -   bug: don't write after iframe document is closed
// v 0.0.3 - 2018/04/09     -   new option: defaultScript, load script from 'state' html element selector: div.jsmirrorstate
//                              
// v 0.0.2 - 2018/04/04     -   setScriptingObject: new signature allows to name resource that will be avaialbel during function execution
// v 0.0.1 - 2018/03/28     -   Alt-Run to run code, Alt-F: format, Ctrl-Q: Collapse/Expand method
//                          -   setScript method
//                          -   use Function constructor for code execution
//                          -   refresh method
import "./jseditor.js";
import template from "./jsmirror.template.html";
import "../widget.base.js";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(localhost|debugjsmirror)/) > 0;
	var trace = ns.logger.get("jsmirror", debugging);

	var xjsmirror = function (ui, opts) {

		trace.debug("xjsmirror.init");

		var $el = $(ui);

		var state = ($("div.jsmirrorstate:first", $el).html() || "").trim();
		opts = $.extend({ defaultScript: state }, opts);

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
			iframe.attr("src",
				`javascript:void((function(){var script = document.createElement('script');script.innerHTML = "(function() {document.open();document.domain='${document.domain}';document.close();})();";document.write("<head>" + script.outerHTML + "</head><body><style type='text/css'>div.CodeMirror{height: 100% !important;}</style><textarea style=width='100%'></textarea></body>");})())`
			);

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

		if (opts.defaultScript) {
			editor.set(opts.defaultScript);
		}

		var resourceHash = {};

		return {
			refresh: function () {
				editor.refresh();
			},
			setScript: function (obj) {
				editor.set(obj);
			},
			setScriptingObject: function (name, obj) {
				resourceHash[name] = obj;
			}
		};

	};

	ns.widgets.addWidget("xjsmirror", xjsmirror, "0.0.3").startup();

})(spexplorerjs, jQuery, template);