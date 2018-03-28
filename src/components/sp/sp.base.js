// v 0.0.1 : 2018-03-11 - loadSpElem
import $ from "jquery";
import "../logger/logger.js";

(function (ns, $) {

	var debug = window.location.href.search(/[localhost|debugsp]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "sp";
		return d;
	};
	var error = new function () {
		var d = function () {
			ns.logger && ns.logger.error.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "sp";
		return d;
	};

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
	ns.sp.loadSpElem = function (elem, sptx, caller) {

		sptx = sptx || SP.ClientContext.get_current();
		return $.Deferred(function (dfd) {

			if (elem.length) {
				for (var i = 0; i < elem.length; i++) {
					sptx.load(elem[i]);
				}
			} else
				sptx.load(elem);

			sptx.executeQueryAsync(function () {
				dfd.resolve(elem);
			},
			function (r, a) { ns.sp.reqFailure(r, a, caller || "loadSpElem", dfd); });

		}).promise();

	};

	ns.sp.reqFailure = function (req, reqargs, from, dfd) { // log context failure

		var msg = from + " Request failed " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();

		if (dfd)
			dfd.reject(msg);
		else {
			// if there is no promise log at this level
			error(msg);
		}

	};

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);