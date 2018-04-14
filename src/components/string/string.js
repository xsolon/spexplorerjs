/* global require */
// v 0.1.4: 2018-04-02: - check if already defined, make jQuery global if needed
//                          The inline check won't work for more complex modules, but it is an easy way to address multiple endpoints that load this.
// v 0.1.2: 2018-03-10: brought back htmlEncode/htmlDecode and jQuery dependency

(function (ns, $) {

	return ns.string = ns.string || {
		version: "0.1.4",
		htmlEncode: function htmlEncode(value) {
			// create a in-memory div, set it's inner text(which jQuery
			// automatically encodes)
			// then grab the encoded contents back out. The div never exists on
			// the page.
			return $("<div/>").text(value).html();
		},
		htmlDecode: function htmlDecode(value) {
			return $("<div/>").html(value).text();
		},
		format: function format() {
			/// TODO: unit test, breaks in some cases
			var args = arguments;
			var tmpl = args[0];
			for (var i = 0; i < args.length - 1; i++) {
				var s = "\\{" + i + "\\}";
				var reg1 = new RegExp(s, "g");
				tmpl = tmpl.replace(reg1, encodeURIComponent(args[i + 1]));
			}
			try {
				tmpl = decodeURIComponent(tmpl);
			} catch (e) {
				console && console.error(e);
				throw e;
			}

			return tmpl;
		},
		startsWith: function startsWith(str1, str2) {
			return str2.length > 0 && str1.substring(0, str2.length) === str2;
		},
		endsWith: function endsWith(str1, str2) {
			return str2.length > 0 && str1 && str1.substring(str1.length - str2.length, str1.length) === str2;
		},
		trimEnd: function trimEnd(stringToTrim, charToRemove) {
			var s = stringToTrim || ""; // make sure str1 is not null
			var c = charToRemove;
			var lastIndexOf = -1;
			for (var i = s.length - 1; i >= 0; i--) {
				if (s[i] === c) {
					lastIndexOf = i;
				} else {
					break;
				}
			}
			if (lastIndexOf > -1) s = s.substring(0, lastIndexOf);
			return s;
		},
		trimStart: function trimStart(stringToTrim, sToRemove, opts) {
			var exp = "^" + sToRemove + "+";
			var reg = RegExp(exp, opts || "gi");

			var res = stringToTrim.replace(reg, "");
			return res;
		},
		trim: function trim(stringToTrim, sToRemove, opts) {
			stringToTrim = this.trimStart(stringToTrim, sToRemove, opts);
			stringToTrim = this.trimEnd(stringToTrim, sToRemove, opts);
			return stringToTrim;
		}
	};
})(window.spexplorerjs = window["spexplorerjs"] || {}, window.jQuery = window["jQuery"] || require("jquery"));


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

	ns.funcs = {
		getParameterByName: getParameterByName,
		groupBySize: groupBySize,
		processAsQueue: processAsQueue,
		enumeration: enumer
	};

})(spexplorerjs, jQuery);
