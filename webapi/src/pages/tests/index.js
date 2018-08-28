/// <reference path="../../components/logger/logger.js" />
/* global require */
import "../../components/logger/logger.js";

(function (ns, $) {

	var trace = ns.modules.logger.get("index", true);

	trace.log("0.0.1");

	if (!ns.logger) {
		trace.error("logger should have been registered");
		var string = require("../../components/string/string.js");
		string.format("d");
	}

	var loadBootstrap = function () {

		if ($.fn.carousel) {
			trace.debug("bootstrap already loaded");
		} else {
			trace.log("loading bootstrap");
			require("../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js");
			require("../../../public/vendor/bootstrap/3.3.7/css/spexp.css");
		}
	};

	require("./app1.css");

	trace.log("jQuery: " + $.fn.jquery);

	loadBootstrap();
	loadBootstrap();

})(window.spexplorerjs, window.jQuery);