"use strict";
(function (ns) {

	var log = function () {
		try {
			if (this && this.source && arguments.length === 1) {
				console.log.apply(console, [String.format("{0}: {1}", this.source, arguments[0])]);
			} else
				console.log.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	var error = function () {
		try {
			console.error.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	var warn = function () {
		try {
			console.warn.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};

	ns["logger"] = { version: "1.0.0", "log": log, "error": error, "warn": warn };
	log("logger");
})(window["spexplorerjs"] = window["spexplorerjs"] || {});