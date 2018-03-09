import $ from "jquery";
import "../logger/logger.js";
(function (ns, $) {

	ns.logger.log($.fn.jquery);
	ns.sp = {};
	ns.sp.collectionToArray = function (spCollection) {

		var result = [];

		if (spCollection) {
			var le = spCollection.getEnumerator();
			while (le.moveNext()) {
				var li = le.get_current();
				result.push(li);
			}
		}

		return result;
	};

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);