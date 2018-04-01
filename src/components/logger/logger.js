// v 0.0.1: 2018-03-28  - debug, get
import $ from "jquery";
import "../string/string.js";

(function (global, factory) {

	

	if (typeof module === "object" && typeof module.exports === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory(global, true) :
			function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

});

(function (ns, $) {

	const logf = function () {
		var msg = ns.string.format.apply(ns.string.format, arguments);
		if (this && this.source) {
			msg = `${this.source}: ${msg}`;
		}
		(console && console.log.apply(console, [msg]));
	};
	const log = function () {
		try {
			if (this && this.source) {
				if (arguments.length === 1 && typeof arguments[0] == "string") {
					logf("{0}: {1}", this.source, arguments[0]);
				} else {
					var obj = {};
					obj[this.source] = arguments;
					if (arguments.length === 1)
						obj[this.source] = arguments[0];
					console.log.apply(console, [obj]);
				}
			}
			//if (this && this.source && arguments.length === 1 && typeof arguments[0] == "string") {
			//	let s = this.source + ": "; for (let i = 0; i < arguments.length; i++) {
			//		s += `{${i}} `;
			//	}
			//	var msg = logf(s, arguments[0]);
			//	console.log.apply(console, [msg]);
			//	var obj = {};
			//	obj[this.source] = arguments;
			//	console.log.apply(console, [obj]);
			//         }
			else
				console.log.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	const error = function () {
		try {
			console.error.apply(console, arguments);
			$("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	const warn = function () {
		try {
			console.warn.apply(console, arguments);
			$("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	const debug = function () {
		try {
			console.log.apply(console, arguments);
			$("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};

	var defineScopedTracing = function (source, debugging, onTrace) {
		var scopedLog = new function () {
			var d = function () {
				ns.logger && ns.logger.log.apply(scopedLog, arguments);
				(onTrace && onTrace({ type: "log", args: arguments }));
			};
			d.source = source;
			return d;
		};
		var scopedError = new function () {
			var d = function () {
				ns.logger && ns.logger.error.apply(scopedError, arguments);
				(onTrace && onTrace({ type: "error", args: arguments }));
			};
			d.source = source;
			return d;
		};
		var scopedDebug = new function () {
			var d = function () {
				if (debugging) {
					ns.logger && ns.logger.log.apply(scopedDebug, arguments);
					(onTrace && onTrace({ type: "debug", args: arguments }));
				}
			};
			d.source = source;
			return d;
		};

		var scopedWarn = new function () {
			var d = function () {
				ns.logger && ns.logger.error.apply(scopedWarn, arguments);
				(onTrace && onTrace({ type: "warn", args: arguments }));
			};
			d.source = source;
			return d;
		};

		return {
			log: scopedLog,
			error: scopedError,
			debug: scopedDebug,
			warn: scopedWarn
		};

	};
	ns["logger"] = { "version": "0.0.1", logf: logf, "log": log, "error": error, "warn": warn, "debug": debug, get: defineScopedTracing };
	log("logger");
	ns.$ = $;
	return ns.logger;

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);
var logger = window["spexplorerjs"];
//export default logger;
//export { logger as default };