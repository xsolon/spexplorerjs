import $ from "jquery";
// v 0.1.2: 2018-03-10: brought back htmlEncode/htmlDecode and jQuery dependency
(function(ns, $) {
	ns.string = {
		version: "0.1",
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
		}, trim: function(stringToTrim, sToRemove, opts) {
			stringToTrim = this.trimStart(stringToTrim, sToRemove, opts);
			stringToTrim = this.trimEnd(stringToTrim, sToRemove, opts);
			return stringToTrim;
		}
	};
})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);