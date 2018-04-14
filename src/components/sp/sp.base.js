/* global require */

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("../logger/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// v 0.0.1 : 2018-03-11 - loadSpElem
(function (ns, $) {

	var debug = window.location.href.search(/[localhost|debugsp]/) > 0;
	var log = new function () {
		var d = function d() {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug) SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "sp";
		return d;
	}();
	var error = new function () {
		var d = function d() {
			ns.logger && ns.logger.error.apply(log, arguments);
			if (debug) SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "sp";
		return d;
	}();

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
			} else sptx.load(elem);

			sptx.executeQueryAsync(function () {
				dfd.resolve(elem);
			}, function (r, a) {
				ns.sp.reqFailure(r, a, caller || "loadSpElem", dfd);
			});
		}).promise();
	};
	ns.sp.uploadAjax = function (buffer, webUrl, listTitle, fileName) {
		return $.ajax({
			url: `${webUrl}../_api/web/lists/getByTitle('${listTitle}')/RootFolder/Files/add(url='${fileName}',overwrite='true')`,
			type: "POST",
			data: buffer,
			async: true,
			processData: false,
			contentType: false,
			headers: {
				"accept": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val(),
				"content-length": buffer.byteLength
			}
		});
	};
	ns.sp.reqFailure = function (req, reqargs, from, dfd) {
		// log context failure

		var msg = from + " Request failed " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();

		if (dfd) dfd.reject(msg); else {
			// if there is no promise log at this level
			error(msg);
		}
	};

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, _jquery2.default);