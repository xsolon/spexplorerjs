/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./loader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../logger/logger.js":
/*!***************************!*\
  !*** ../logger/logger.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../string/string.js */ "../string/string.js");

(function (ns) {

	var logf = function logf() {
		var msg = ns.string.format.apply(ns.string.format, arguments);
		console && console.log.apply(console, [msg]);
	};
	var log = function log() {
		try {
			if (this.source) {
				var args = arguments;
				if (arguments.length === 1 && typeof arguments[0] == "string") {
					args = args[0];
				}
				var obj = {};
				obj[this.source] = args;
				console.log.apply(console, [obj]);
			}
			//if (this && this.source && arguments.length === 1 && typeof arguments[0] == "string") {
			//	let s = this.source + ": "; for (let i = 0; i < arguments.length; i++) {
			//		s += `{${i}} `;
			//	}
			//	var msg = logf(s, arguments[0]);
			//	console.log.apply(console, [msg]);
			//	var obj = {};
			//	obj[this.source] = arguments;
			//	console.log.apply(console, [obj]);
			//         }
			else console.log.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	var error = function error() {
		try {
			console.error.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};
	var warn = function warn() {
		try {
			console.warn.apply(console, arguments);
			//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
		} catch (e) {
			alert(e);
		}
	};

	ns["logger"] = { "version": "0.0.1", logf: logf, "log": log, "error": error, "warn": warn };
	log("logger");
})(window["spexplorerjs"] = window["spexplorerjs"] || {});

/***/ }),

/***/ "../string/string.js":
/*!***************************!*\
  !*** ../string/string.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (ns) {
	ns.string = {
		version: "0.1",
		format: function format() {
			/// TODO: unit test, breaks in some cases
			var args = arguments;
			var tmpl = args[0];
			for (var i = 0; i < args.length - 1; i++) {
				//var s = ("{" + i + "}").replace(/([*+.?|\\[]{}()])/g, "\\$1");
				var s = "\\{" + i + "\\}";
				var reg1 = new RegExp(s, "g");
				tmpl = tmpl.replace(reg1, encodeURIComponent(args[i + 1]));
			}
			try {
				tmpl = decodeURIComponent(tmpl);
			} catch (e) {
				throw e;
			}

			return tmpl;
		}, startsWith: function startsWith(str1, str2) {
			return str2.length > 0 && str1.substring(0, str2.length) === str2;
		}, endsWith: function endsWith(str1, str2) {
			return str2.length > 0 && str1 && str1.substring(str1.length - str2.length, str1.length) === str2;
		}, trimEnd: function trimEnd(stringToTrim, charToRemove) {
			var s = stringToTrim || ""; // make sure str1 is not null
			var c = charToRemove;
			var lastIndexOf = -1;
			for (var i = s.length - 1; i >= 0; i--) {
				if (s[i] == c) {
					lastIndexOf = i;
				} else {
					break;
				}
			}
			if (lastIndexOf > -1) s = s.substring(0, lastIndexOf);
			return s;
		}, trimStart: function trimStart(stringToTrim, sToRemove, opts) {
			var exp = "^" + sToRemove + "+";
			var reg = RegExp(exp, opts || "gi");

			var res = stringToTrim.replace(reg, "");
			return res;
		}, trim: function trim(stringToTrim, sToRemove, opts) {
			stringToTrim = this.trimStart(stringToTrim, sToRemove, opts);
			stringToTrim = this.trimEnd(stringToTrim, sToRemove, opts);
			return stringToTrim;
		}
	};
})(window["spexplorerjs"] = window["spexplorerjs"] || {});

/***/ }),

/***/ "./loader.js":
/*!*******************!*\
  !*** ./loader.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../logger/logger.js */ "../logger/logger.js");

(function (ns) {
	if (ns["loader"]) {
		ns.logger.warn("loader already defined");
	}
	var loader = { "version": "1.0" };
	loader["load"] = function (src) {
		console.log(src);
	};
	ns["loader"] = loader;
	console.log("loader: " + loader.version);
})(window["spexplorerjs"] = window["spexplorerjs"] || {});

/***/ })

/******/ });