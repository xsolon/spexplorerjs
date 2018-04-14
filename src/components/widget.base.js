// 0.1.2: 2018/03/23    -   addSpWidget for SharePoint components
//                          add version number to elements with class widgetinfo
// 0.1.1: 2018/03/28    -   selector property
//                          log from tracing
// 0.1.0: 2018/03/23    -   pass options to widget constructor
import "./logger/logger.js";

(function (ns, $) {

	var debugging = window.location.href.search(/(localhost|debugwidget)/) > 0;
	var tracing = ns.logger.get("widgets", debugging);
	var log = tracing.log, debug = tracing.debug;

	log("widgets.register");
	ns.widgets = ns.widgets || {};

	var defineWidget = function (name, constructor, version) {

		return {
			publicName: name,
			constructor: constructor,
			version: version,
			selector: "[data-widget=\"publicName\"]".replace("publicName", name),
			startup: function (context, opts) {

				debug(name + ".startup");
				var selector = "[data-widget=\"publicName\"]".replace("publicName", name);
				debug("selector: " + selector);
				var elems = $(selector, context || document);
				debug("Elems: " + elems.length);
				elems[name](opts);
				/// TODO: set only info for current widget (not sub widgets)
				$(".widgetinfo" + name, elems).html(version);

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
					$(".xversion:last", this).html(widgetInfo.version);
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
	ns.widgets.addSpWidget = function (name, constructor, version) {

		var widgetInfo = addWidget(name, constructor, version);

		ExecuteOrDelayUntilScriptLoaded(widgetInfo.startup, "sp.js");

		return widgetInfo;
	};


})(spexplorerjs, jQuery);