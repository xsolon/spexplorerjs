import $ from "jquery";
import "../string/string.js";
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

	ns["logger"] = { "version": "0.0.1", logf: logf, "log": log, "error": error, "warn": warn };
	log("logger");
	ns.$ = $;
	return ns.logger;
})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);
var logger = window["spexplorerjs"];
export { logger as default };