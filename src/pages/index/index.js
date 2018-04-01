import $ from "jquery";
import "../../components/logger/logger.js";

(function (ns, $) {

	if (!ns.logger) {
		var string = require("../../components/string/string.js");
		string.format("d");
		require("./app1.css");
	}

	//var debugging = window.location.href.search(/(localhost|debugcustomactions)/) > 0;
	//var tracing = ns.logger.get("customactionEditor", debugging);
	//var log = tracing.log;//, debug = tracing.debug;

	//log("start 0.1.0");
	//log($.fn.jquery);
	//logf("{0}:{1}", "jquery", $.fn.jquery);
})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);