import "../logger/logger.js";
(function (ns) {
	if (ns["loader"]) {
		ns.logger.warn("loader already defined");
	}
	var loader = { "version": "1.0" };
	loader["load"] = function (src) {
		console.log(src);
	};
	ns["loader"] = loader;
	console.log(`loader: ${loader.version}`);
})(window["spexplorerjs"] = window["spexplorerjs"] || {});