
import "./logger/logger.js";
import $ from "jquery";

(function (ns, $) {

	var debug = window.location.href.search(/[localhost|debugcustomactions]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "widgets";
		return d;
	};

	ns.widgets = ns.widgets || {};

	var defineWidget = function (name, constructor, version) {

		return {
			publicName: name,
			constructor: constructor,
			version: version,
			startup: function (context) {

				log(name + ".startup");
				var selector = "[data-widget=\"publicName\"]".replace("publicName", name);
				log("selector: " + selector);
				var elems = $(selector, context || document);
				log("Elems: " + elems.length);
				elems[name]({});
				return elems;
			}
		};
	};
	var registerWidget = function (widgetInfo) {

		$.fn[widgetInfo.publicName] = function (opts) {
			var args = arguments;
			var result = this.each(function () {

				var $el = $(this);

				var me = $el.data(widgetInfo.publicName);

				if (me) { // object has been initialized before

					if (opts == null) { // request for instance
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

		ns.widgets[widgetInfo.publicName] = widgetInfo;
		log(widgetInfo.publicName + ".registered");

	};
	var addWidget = function (name, constructor, version) {

		var widgetInfo = defineWidget(name, constructor, version);
		registerWidget(widgetInfo);
		return widgetInfo;
	};

	ns.widgets.addWidget = addWidget;

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);