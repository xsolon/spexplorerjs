import $ from "jquery";
import "../../components/logger/logger.js";

(function (ns, $) {
	var logf = new function () {
		var d = function () {
			ns.logger && ns.logger.logf.apply(logf, arguments);
		};
		d.source = "index";
		return d;
	};
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
		};
		d.source = "index";
		return d;
	};

	log("start 0.1.0");
	logf("{0}:{1}", "jquery", $.fn.jquery);
})(window["spexplorerjs"], $);