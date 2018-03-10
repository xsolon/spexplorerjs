import $ from "jquery";
import "../string/string.js";

(function (ns) {

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
		$el.html($("#xmlmirrortmpl:first").html().trim());
		var iframe = $("iframe", ui);
		var src = iframe.attr("src");
		iframe.attr("src", src + "?id=" + opts.id);
		var run = $("button", ui);

		var currentPromises = [];
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

			if (data.id == opts.id)
				try {
					var promise = currentPromises[0];//todo: handle many
					promise.resolve(data.code);
					var index = currentPromises.indexOf(promise);
					if (index > -1) {
						currentPromises.splice(index, 1);
					}
				} catch (e) {
					console.log(e.message);
					throw e;
				}
		});

		var me = {};
		me.getXml = function () {
			return $.Deferred(function (dfd) {
				currentPromises.push(dfd);
				iframe[0].contentWindow.postMessage({ action: "get" }, "*");
			}).promise();
		};
		me.setXml = function (xml) {
			iframe[0].contentWindow.postMessage({ action: "set", data: xml }, "*");
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
				$el.data(widgetInfo.publicName, obj);
			}
		});

		//if (lastInstance && result.length == 1) return lastInstance;
		return result;
	};

	(ns.widgets = (ns.widgets || {}))[widgetInfo.publicName] = widgetInfo;

	//if (xSolon.loader.isBusy) {
	//    xSolon.loader.bits.push(widgetInfo.startup);
	//}
	//else {
	widgetInfo.startup();
	//}
})(window["spexplorerjs"]);
