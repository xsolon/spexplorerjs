import $ from "jquery";
import "../string/string.js";
import "./jseditor.js";
import template from "./jsmirror.template.html";
//import { debounce } from "rxjs/operator/debounce";

(function (ns, $, template) {

	var error = new function () {
		var d = function () {
			ns.logger && ns.logger.error.apply(log, arguments);
		};
		d.source = "jsmirror";
		return d;
	};
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
		};
		d.source = "jsmirror";
		return d;
	};
	var xjsmirror = function (ui, opts) {

		log("xjsmirror.init");

		var $el = $(ui);
		opts.id = opts.id || $(".full").length;
		$el.html(template.trim());
		var run = $("button", ui);

		var runScript = function (code) {
			try {
				ns.spelem = opts.spelem;
				var script = ns.string.format("(function(ns){\
                                            var log = console.log;\
                                            var clear = console.clear;\
                                            var spelem = ns.spelem;\
                                            {0}\r\n})(ns);", code);
				var res = eval(script);
				if (res) console.log(res);
			} catch (e) {
				error(e.message);
				throw e;
			}

		};
		(function iframeImplementation() {
			var iframe = $("iframe", ui);
			iframe[0].contentWindow.document.write("<html><body><textarea></textarea></body></html>");


			$("style").each(function () {
				iframe.contents().find("body").append(this.cloneNode(true));
			});

			var editor = ns.widgets.jseditorinit(iframe.contents().find("textarea")[0]);
			run.click(function () {

				runScript(editor.get());

				return false;
			});

			var src = iframe.attr("src");
			iframe.attr("src", src + "?id=" + opts.id);

			run.click(function (event) {
				event.preventDefault();

				iframe[0].contentWindow.postMessage({ action: "get" }, "*");
				return false;
			});
			iframe[0].addEventListener("load", function () {
				iframe[0].contentWindow.postMessage({ action: "set", data: "log(spelem);" }, "*");
			});
			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
			var eventer = window[eventMethod];
			var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

			// Listen to message from child IFrame window
			eventer(messageEvent, function (e) {
				var data = JSON.parse(e.data);

				if (data.id == opts.id) {
					runScript(data.code);
				}
			});

		})();

		//if (false)
		//(function inlineImplementation() {
		//	var editor = ns.widgets.jseditorinit($("textarea", ui)[0]);

		//	run.click(function () {

		//		runScript(editor.get());
		//	});
		//})();

		return {
			setScriptingObject: function (obj) {
				opts.spelem = obj;
			}
		};
	};

	var widgetInfo = {
		publicName: "xjsmirror",
		constructor: xjsmirror,
		version: "0.1.3",
		startup: function xjsmirrorStartup(context) {
			log(widgetInfo.publicName + ".startup");
			var selector = "[data-widget=\"publicName\"]".replace("publicName", widgetInfo.publicName);
			log("selector: " + selector);
			var elems = $(selector, context || document);
			log("Elems: " + elems.length);
			elems[widgetInfo.publicName]({});
			return elems;
		}
	};

	$.fn[widgetInfo.publicName] = function (opts) {
		var args = arguments;
		//var lastInstance = null;
		var result = this.each(function () {

			var $el = $(this);

			var me = $el.data(widgetInfo.publicName);

			if (me) { // object has been initialized before

				if (opts == null) { // request for instance
					//lastInstance = me;
				} else
				if (me[opts]) {
					if (typeof me[opts] == "function")
						me[opts].apply(me, Array.prototype.slice.call(args, 1));
					else
						me[opts] = args[1];
				}

			} else {

				var obj = new widgetInfo.constructor(this, opts);
				$el.data(widgetInfo.publicName, obj).data("xwidget", obj);

			}
		});

		return result;
	};

	widgetInfo.startup();

	(ns.widget = (ns.widgets || {}))[widgetInfo.publicName] = widgetInfo;
	log(widgetInfo.publicName + ".registered");

})(window["spexplorerjs"], $, template);
