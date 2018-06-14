/* global require */
// v 0.1.5: 2018-04-28: - definition to modules, move funcs to new file
// v 0.1.4: 2018-04-02: - check if already defined, make jQuery global if needed
//                          The inline check won't work for more complex modules, but it is an easy way to address multiple endpoints that load this.
// v 0.1.2: 2018-03-10: brought back htmlEncode/htmlDecode and jQuery dependency

(function (ns) {

	//var $ = window.jQuery = window["jQuery"] || require("jquery");
	if (ns.modules.string) {
		// already loaded
	} else {
		//var $ = ns.modules.jQuery = require("../../../node_modules/jquery/dist/jquery.js");
		var $ = ns.modules.jQuery = require("../../vendor/jquery/2.2.4/jquery.js");

		// avoid collisions with other jQuery versions
		//jQuery.noConflict();

		var stringModule = {
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

		ns.modules.string = stringModule;

	}

})(window.spexplorerjs = window["spexplorerjs"] || {modules:{}});