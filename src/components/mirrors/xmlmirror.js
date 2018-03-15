import $ from "jquery";
import "../string/string.js";
import "../logger/logger.js";
import "./xmleditor.js";
import template from "./xmlmirror.template.html";

(function (ns, $) {

	//var debug = window.location.href.search(/localhost|debugxsptree/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
		};
		d.source = "xmlmirror";
		return d;
	};
	//var error = new function () {
	//	var d = function () {
	//		ns.logger && ns.logger.error.apply(log, arguments);
	//	};
	//	d.source = "xmlmirror";
	//	return d;
	//};

	var xxmlmirror = function (ui, opts) {

		log("xxmlmirror.init");

		var $el = $(ui);

		opts.id = opts.id || $(".full").length;
		$el.html(template.trim());
		var iframe = $("iframe", ui);
		var src = iframe.attr("src");
		iframe.attr("src", src + "?id=" + opts.id);
		//var run = $("button", ui);

		// --
		var editor = null;
		(function iframeImplementation() {
			var iframe = $("iframe", ui);

			
			editor = ns.widgets.xmleditorInitIframe(iframe);

			//run.click(function () {
			//	runScript(editor.get());
			//	return false;
			//});

		})();

		//--
		var me = {};
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

	var widgetInfo = {
		publicName: "xxmlmirror",
		constructor: xxmlmirror,
		version: "0.1.3",
		getSelector: function () {
			var selector = "[data-widget=\"publicName\"]".replace("publicName", widgetInfo.publicName);
			log("selector: " + selector);
			return selector;
		},
		startup: function (context) {
			log(widgetInfo.publicName + ".startup");
			var selector = widgetInfo.getSelector();
			var elems = $(selector, context || document);
			log("Elems: " + elems.length);
			elems[widgetInfo.publicName]({});
			return elems;
		}
	};

	$.fn[widgetInfo.publicName] = function (opts) {
		var args = arguments;
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

	(ns.widgets = (ns.widgets || {}))[widgetInfo.publicName] = widgetInfo;

	widgetInfo.startup();
})(window["spexplorerjs"], $);
