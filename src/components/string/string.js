import $ from "jquery";
// v 0.1.2: 2018-03-10: brought back htmlEncode/htmlDecode and jQuery dependency
(function (global, factory) {

	if (typeof module === "object" && typeof module.exports === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory(global, true) :
			function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

//----
	var string = {
		version: "0.1.1",
		htmlEncode: function(value) {
			// create a in-memory div, set it's inner text(which jQuery
			// automatically encodes)
			// then grab the encoded contents back out. The div never exists on
			// the page.
			return $("<div/>").text(value).html();
		},
		htmlDecode: function htmlDecode(value) {
			return $("<div/>").html(value).text();
		},
		format: function() {
			/// TODO: unit test, breaks in some cases
			var args = arguments;
			var tmpl = args[0];
			for (var i = 0; i < args.length - 1; i++) {
				var s = `\\{${i}\\}`;
				var reg1 = new RegExp(s, "g");
				tmpl = tmpl.replace(reg1, encodeURIComponent(args[i + 1]));
			}
			try {
				tmpl = decodeURIComponent(tmpl);
			} catch (e) {
				(console && console.error(e));
				throw (e);
			}

			return tmpl;
		}, startsWith: function(str1, str2) {
			return str2.length > 0 && str1.substring(0, str2.length) === str2;
		}, endsWith: function(str1, str2) {
			return str2.length > 0 && str1 && str1.substring(str1.length - str2.length, str1.length) === str2;
		}, trimEnd: function(stringToTrim, charToRemove) {
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
			if (lastIndexOf > -1)
				s = s.substring(0, lastIndexOf);
			return s;
		}, trimStart: function(stringToTrim, sToRemove, opts) {
			var exp = `^${sToRemove}+`;
			var reg = RegExp(exp, opts || "gi");

			var res = stringToTrim.replace(reg, "");
			return res;
		}, 
		trim: function(stringToTrim, sToRemove, opts) {
			stringToTrim = this.trimStart(stringToTrim, sToRemove, opts);
			stringToTrim = this.trimEnd(stringToTrim, sToRemove, opts);
			return stringToTrim;
		}
	};
 
	//----

	if (!noGlobal) {
		(window["spexplorerjs"] = window["spexplorerjs"] || {}).string = string;
		//window.jQuery = window.$ = jQuery;
	}

	return string;
});