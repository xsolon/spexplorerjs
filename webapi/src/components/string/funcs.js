/// <reference path="string.js" />

import "./string.js";

(function (ns, $) {

	/// Iterate over an expanding array
	//  Example:
	//  var arr = [1, 2];
	//  spexplorerjs.funcs.processAsQueue(arr, function (item) {
	//    if (item == 1) {
	//        arr.push(3);
	//    }
	//    console.log(item); return jQuery.Deferred(function (dfd) { dfd.resolve(); }).promise();
	//});
	/// arr: array to process
	/// action: promise (argument: item removed from array)
	var processAsQueue = function (arr, action) {
		return $.Deferred(function (dfd) {
			var doNext = function () {
				if (arr == null || arr.length === 0) {
					dfd.resolve();
				} else {
					var item = arr.shift();
					action(item).done(function () {
						doNext();
					});
				}
			};

			if (typeof arr == "function") {
				arr().done(function (items) {
					arr = items;
					doNext();
				});
			} else {
				doNext();
			}
		}).promise();

	};
	var arrayToDictionary = function (array, getKey, forceUnique) {
		var dic = {};
		for (var i = 0; i < array.length; i++) {
			var element = array[i];
			var key = getKey(element);
			if (forceUnique && dic[key]) {
				throw key + " already in dictionary";
			} else
				dic[key] = element;
		}
		return dic;
	};

	var enumer = function (values) {
		var me = {};
		for (var i = 0; i < values.length; i++) {
			me[values[i]] = 1;
		}
		if (Object.freeze) { me = Object.freeze(me); }

		return me;
	};

	/**
     * Divide array into an array of arrays of size groupSize
     * @param {Array} arr
     * @param {integer} groupSize
     */
	var groupBySize = function (arr, groupSize) {
		var groups = [];
		groupSize = groupSize || 100;
		arr.forEach(function (n, i) {
			var index = Math.trunc(i / groupSize);
			if (groups.length === index) {
				groups.push([]);
			}
			groups[index].push(n);
		});
		return groups;
	};

	var getParameterByName = function (name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	};

	var convertImagesToBase64 = function(contentDocument) {
		var regularImages = contentDocument.querySelectorAll("img");
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		[].forEach.call(regularImages,
			function(imgElement) {
				// preparing canvas for drawing
				canvas.width = imgElement.width;
				canvas.height = imgElement.height;

				ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);
				// by default toDataURL() produces png image, but you can also export to jpeg
				// checkout function's documentation for more details
				var dataURL = canvas.toDataURL("image/png");
				imgElement.setAttribute("src", dataURL);
				ctx.clearRect(0, 0, canvas.width, canvas.height);

			});

		if (canvas.remove)
			canvas.remove();

	};

	var funcs = {
		convertImagesToBase64: convertImagesToBase64,
		arrayToDictionary: arrayToDictionary,
		getParameterByName: getParameterByName,
		groupBySize: groupBySize,
		processAsQueue: processAsQueue,
		enumeration: enumer
	};

	ns.modules.funcs = funcs;

})(spexplorerjs, spexplorerjs.modules.jQuery);