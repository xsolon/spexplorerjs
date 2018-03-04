"use strict";
(function (ns) {
	var loader = { "version": "1.0" };
	loader["load"] = function(src) {
		console.log(src);
	};
	ns["loader"] = loader;
	console.log("start"+ loader.version);
})(window["spexplorerjs"] = window["spexplorerjs"] || {});