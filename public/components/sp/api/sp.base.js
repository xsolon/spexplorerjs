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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sp.base.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../logger/logger.js":
/*!************************************************************************!*\
  !*** D:/sc/spexplorer/js/spexplorerjs/src/components/logger/logger.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// v 1.0.7: 2018-08-19  - remove dependency on funcs.js
// v 1.0.6: 2018-05-17  - assert, addOnTraceHandler allows additional event hanlders for trace
// v 1.0.4: 2018-04-28  - move definition to modules
// v 1.0.2: 2018-04-28  - match spexplorerjs.trace
// v 0.0.3: 2018-04-28  - removed jQuery dependency
// v 0.0.2: 2018-04-02  - remove try/catch by probing from window.console, let it fail otherwise
// v 0.0.1: 2018-03-28  - debug, get

//require("../string/funcs.js");
(function (ns) {

	var format = function format() {
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
	};

	var logf = function logf() {
		var msg = format.apply(format, arguments);
		if (this && this.source) {
			msg = this.source + ": " + msg;
		}
		window.console && console.log.apply(console, [msg]);
	};
	var log = function log() {
		if (this && this.source) {
			if (arguments.length === 1 && typeof arguments[0] == "string") {
				logf("{0}: {1}", this.source, arguments[0]);
			} else {
				var obj = {};
				obj[this.source] = arguments;
				if (arguments.length === 1) obj[this.source] = arguments[0];
				window.console && console.log.apply(console, [obj]);
			}
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
		else window.console && console.log.apply(console, arguments);
		//jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
	};
	var error = function error() {
		window.console && console.error.apply(console, arguments);
	};
	var warn = function warn() {
		window.console && console.warn.apply(console, arguments);
	};
	var assert = function assert() {
		window.console && console.assert.apply(console, arguments);
	};
	var debug = function debug() {
		window.console && console.log.apply(console, arguments);
	};

	var logger = {
		"version": "1.0.6",
		logf: logf, "log": log, "error": error, "warn": warn, "debug": debug, "assert": assert
	};

	var defineScopedTracing = function defineScopedTracing(source, debugging, onTraceH) {
		var onTraceArray = [];
		onTraceH && onTraceArray.push(onTraceH);
		var onTrace = function onTrace() {
			var args = arguments;
			onTraceArray.forEach(function (n) {
				n(args);
			});
		};
		var scopedAssert = new function () {
			var d = function d() {
				logger.assert.apply(scopedAssert, arguments);
				onTrace && onTrace({ type: "assert", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedLog = new function () {
			var d = function d() {
				logger.log.apply(scopedLog, arguments);
				onTrace && onTrace({ type: "log", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedError = new function () {
			var d = function d() {
				logger.error.apply(scopedError, arguments);
				onTrace && onTrace({ type: "error", args: arguments });
			};
			d.source = source;
			return d;
		}();
		var scopedDebug = new function () {
			var d = function d() {
				if (debugging) {
					logger.log.apply(scopedDebug, arguments);
					onTrace && onTrace({ type: "debug", args: arguments });
				}
			};
			d.source = source;
			return d;
		}();
		var scopedWarn = new function () {
			var d = function d() {
				logger.error.apply(scopedWarn, arguments);
				onTrace && onTrace({ type: "warn", args: arguments });
			};
			d.source = source;
			return d;
		}();

		return {
			addOnTraceHandler: function addOnTraceHandler(handler) {
				handler && onTraceArray.push(handler);
			},
			log: scopedLog,
			error: scopedError,
			debug: scopedDebug,
			warn: scopedWarn,
			assert: scopedAssert
		};
	};

	logger.get = defineScopedTracing;
	/// TODO: this should be private
	logger.trace = defineScopedTracing("logger", window.location.href.search(/local/i) > 0);
	ns.modules.logger = logger;
	ns.modules.logger.trace.debug(logger.version);

	return ns.logger;

	// both of these dependencies are resolved in string.js
})(spexplorerjs);

/***/ }),

/***/ "./sp.base.js":
/*!********************!*\
  !*** ./sp.base.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/// <reference path="../../logger/logger.js" />
/* global require,ExecuteOrDelayUntilScriptLoaded */
// v 0.0.5 : 2018-06-14 - use get_current in getCtx
// v 0.0.5 : 2018-06-01 - bug in ctx.prototyp.loadSpElem
// v 0.0.4 : 2018-05-22 - add loadSpElem to Sp.ClientContext
// v 0.0.3 : 2018-05-17 - getFieldMap
// v 0.0.2 : 2018-04-28 - update to newer infra
// v 0.0.1 : 2018-03-11 - loadSpElem

__webpack_require__(/*! ../../logger/logger.js */ "../../logger/logger.js");

(function (ns, $) {

	var debug = window.location.href.search(/(local|debugsp)/) > 0;
	var trace = ns.modules.logger.get("sp", debug);

	var utils = {
		version: "v0.0.6",
		collectionToArray: function collectionToArray(spCollection) {

			var result = [];

			if (spCollection) {
				var le = spCollection.getEnumerator();
				while (le.moveNext()) {
					var li = le.get_current();
					result.push(li);
				}
			}

			return result;
		},
		loadSpElem: function loadSpElem(elem, sptx, caller) {

			sptx = sptx || elem.get_context && elem.get_context() || utils.getCtx();
			return $.Deferred(function (dfd) {

				if (elem.length) {
					for (var i = 0; i < elem.length; i++) {
						sptx.load(elem[i]);
					}
				} else sptx.load(elem);

				sptx.executeQueryAsync(function () {
					dfd.resolve(elem, sptx);
				}, function (r, a) {
					utils.reqFailure(r, a, caller || "loadSpElem", dfd);
				});
			}).promise();
		},
		uploadAjax: function uploadAjax(buffer, webUrl, listTitle, fileName) {
			return $.ajax({
				url: webUrl + "../_api/web/lists/getByTitle('" + listTitle + "')/RootFolder/Files/add(url='" + fileName + "',overwrite='true')",
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
		},
		reqFailure: function reqFailure(req, reqargs, from, dfd) {
			// log context failure

			var msg = from + " Request failed " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();

			if (dfd) dfd.reject(msg);else {
				// if there is no promise log at this level
				trace.error(msg);
			}
		},
		wsCall: function wsCall(body, action, url) {
			return $.Deferred(function (dfd) {
				$.ajax({
					type: "POST",
					beforeSend: function beforeSend(request) {
						request.setRequestHeader("SOAPAction", action);
					},
					contentType: "text/xml; charset=utf-8",
					url: url,
					data: body,
					statusCode: {
						500: function _() /*jqXHR, textStatus, errorThrown*/{
							dfd.reject($(arguments[0].responseXML).find("errorstring").html());
						}
					}
				}).done(function (xml /*, status, jqXHR*/) {
					var res = $($(xml).find("Body,soap\\:Body")[0].firstChild); // alernative selector for different browsers
					res.xml = res[0].xml;
					if (!res[0].xml && window.XMLSerializer) {
						var ss = new XMLSerializer();
						res.xml = ss.serializeToString(res[0]);
					}
					dfd.resolve(res);
				}).fail(function (jqXHR, textStatus, errorThrown) {
					if (jqXHR.status != 500) dfd.reject(errorThrown);
				});
			});
		},
		getCtx: function getCtx(url) {
			var ctx;
			if (url) ctx = new SP.ClientContext(url);else ctx = SP.ClientContext.get_current();
			//try {
			//  ctx = SP.ClientContext.get_current();
			//} catch (e) {
			//}
			return ctx;
		},
		setformJsLink: function setformJsLink(url, ctx, bizJs) {
			return $.Deferred(function (jslinkdfd) {

				var web = ctx.get_web();
				var oFile = web.getFileByServerRelativeUrl(url);

				var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);

				var wps = lpm.get_webParts();
				ctx.load(wps, "Include(WebPart.Title)");

				ctx.executeQueryAsync(function () {
					var wp = wps.get_item(0);
					var wpp = wp.get_webPart();
					var props = wpp.get_properties();

					ctx.load(wp);ctx.load(wpp);ctx.load(props);
					ctx.executeQueryAsync(function () {
						props.set_item("JSLink", bizJs);
						wp.saveWebPartChanges();
						ctx.executeQueryAsync(function () {
							jslinkdfd.resolve();
						});
					}, function () /*r, a*/{});
				}, function () /*r, a*/{});
			}).promise();
		},
		getFieldMap: function getFieldMap() {
			var res = {};
			$("td.ms-formbody").each(function () {
				var html = $(this).html().replace(/\n/g, "");
				if (html.indexOf("FieldInternalName=\"") < 0) return;
				var start = html.indexOf("FieldInternalName=\"") + "FieldInternalName=\"".length;
				html = html.substring(start);
				var stopp = html.indexOf("\"");
				var nm = html.substring(0, stopp);
				res[nm] = this.parentNode;
			});
			return res;
		}

	};

	ns.modules.spapi = utils;

	trace.debug(utils.version);

	var updateClientContext = function updateClientContext() {
		if (window.SP && SP.ClientContext) {
			SP.ClientContext.prototype.loadSpElem = function () {
				var args = Array.prototype.slice.call(arguments);
				args.splice(1, 0, this);
				return utils.loadSpElem.apply(utils.loadSpElem, args);
			};
		}
	};

	updateClientContext();

	SP.SOD.executeOrDelayUntilScriptLoaded(function () {
		trace.debug("sp.loaded");
		updateClientContext();
	}, "sp.js");
	SP.SOD.executeFunc("sp.js", null, null);
})(spexplorerjs, spexplorerjs.modules.jQuery);

/***/ })

/******/ });