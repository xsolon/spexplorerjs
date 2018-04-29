/* global require */
// v 1.0.4: 2018-04-28  - move definition to modules
// v 1.0.2: 2018-04-28  - match spexplorerjs.trace
// v 0.0.3: 2018-04-28  - removed jQuery dependency
// v 0.0.2: 2018-04-02  - remove try/catch by probing from window.console, let it fail otherwise
// v 0.0.1: 2018-03-28  - debug, get

require("../string/funcs.js");

(function (ns) {

	var logf = function () {
		var msg = ns.modules.string.format.apply(ns.modules.string.format, arguments);
		if (this && this.source) {
			msg = this.source + ": " + msg;
		}
		window.console && console.log.apply(console, [msg]);
	};
	var log = function () {
		if (this && this.source) {
			if (arguments.length === 1 && typeof arguments[0] == "string") {
				logf("{0}: {1}", this.source, arguments[0]);
			} else {
				var obj = {};
				obj[this.source] = arguments;
				if (arguments.length === 1) obj[this.source] = arguments[0];
				window.console && console.log.apply(console, [obj]);
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
		else window.console && console.log.apply(console, arguments);
		//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
	};
	var error = function () {
		window.console && console.error.apply(console, arguments);
	};
	var warn = function () {
		window.console && console.warn.apply(console, arguments);
	};
	var debug = function () {
		window.console && console.log.apply(console, arguments);
	};

	var logger = {
		"version": "1.0.4",
		logf: logf, "log": log, "error": error, "warn": warn, "debug": debug
	};

	var defineScopedTracing = function defineScopedTracing(source, debugging, onTrace) {
		var scopedLog = new function () {
			var d = function d() {
				logger.log.apply(scopedLog, arguments);
				onTrace && onTrace({ type: "log", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedError = new function () {
			var d = function d() {
				logger.error.apply(scopedError, arguments);
				onTrace && onTrace({ type: "error", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedDebug = new function () {
			var d = function d() {
				if (debugging) {
					logger.log.apply(scopedDebug, arguments);
					onTrace && onTrace({ type: "debug", args: arguments });
				}
			};
			d.source = source;
			return d;
		}();
		var scopedWarn = new function () {
			var d = function d() {
				logger.error.apply(scopedWarn, arguments);
				onTrace && onTrace({ type: "warn", args: arguments });
			};
			d.source = source;
			return d;
		}();

		return {
			log: scopedLog,
			error: scopedError,
			debug: scopedDebug,
			warn: scopedWarn
		};
	};

	logger.get = defineScopedTracing;
	/// TODO: this should be private
	logger.trace = defineScopedTracing("logger", window.location.href.search(/local/i) > 0);
	ns.modules.logger = logger;
	ns.modules.logger.trace.debug(logger.version);

	return ns.logger;

	// both of these dependencies are resolved in string.js
})(spexplorerjs);