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
/******/ 	return __webpack_require__(__webpack_require__.s = "./api.js");
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

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global require */
__webpack_require__(/*! ./sp.list.js */ "./sp.list.js");
__webpack_require__(/*! ./sp.web.js */ "./sp.web.js");

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

/***/ }),

/***/ "./sp.folderapi.js":
/*!*************************!*\
  !*** ./sp.folderapi.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sp.base.js */ "./sp.base.js");

// v 0.0.3.1: 2018-04-28  - to modules, bug when calling folderExists
// v 0.0.2: 2018-04-10  - argument can be a list
// v 0.0.1: 2018-04-04  - fallback to trace logging if necessary
//                      - new args.list parameter

(function (ns, $) {

	var debugging = window.location.href.search(/(local|sp.folder)/) > 0;
	var trace = ns.modules.logger.get("sp.folder", debugging);

	/**
   * 
   * @param {string} serverRelativeUrl
   * @param {SP.ClientContext} ctx
   * @param {SP.Web} web
   */
	var folderExists = function folderExists(serverRelativeUrl, ctx, web) {

		if (ctx) {/*defined */} else {
			if (web) {
				ctx = web.get_context();
			} else {
				ctx = new SP.ClientContext();
			}
		}
		if (web) {
			//defined
		} else {
			web = ctx.get_web();
		}
		var dfd = $.Deferred();
		var folder = web.getFolderByServerRelativeUrl(serverRelativeUrl);

		trace.debug("probing for folder " + serverRelativeUrl);
		ctx.load(folder, "Name", "ServerRelativeUrl");

		ctx.executeQueryAsync(function () {
			//if (folder.get_exists()) { // Not available in 2013
			//    // Folder exists and isn't hidden from us. Print its name.
			//    //console.log(folder.get_name());
			//    dfd.resolve(folder);
			//}
			//else {
			//    dfd.resolve(folder);
			//    //console.log("Folder exists but is hidden (security-trimmed) for us.");
			//}
			try {
				var url = folder.get_serverRelativeUrl();
				trace.debug("folder exists:" + url);
				dfd.resolve(folder);
			} catch (e) {
				trace.debug("Folder does not exist.");
				dfd.resolve(false);
			}
		}, function (s, args) {
			if (args.get_errorTypeName() === "System.IO.FileNotFoundException") {
				// Folder doesn't exist at all.
				trace.debug("Folder does not exist.");
				dfd.resolve(false);
			} else {
				// An unexpected error occurred.
				trace.debug("Error: " + args.get_message());
				dfd.resolve(false);
			}
		});

		return dfd.promise();
	};

	var pathSteps = function pathSteps(path) {
		var bits = path.split("/");
		var qu = [];
		for (var i = bits.length; i > 0; i--) {
			var current = bits.slice(0, i).join("/");
			if (current === "") current = "/";
			qu.push(current);
		}
		return qu;
	};

	var createFolderInList = function createFolderInList(name, parentFolderPath, list, ctx) {
		ctx = ctx || list.get_context();
		list.set_enableFolderCreation(true);
		list.update();

		var itemCreateInfo = new SP.ListItemCreationInformation();
		itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
		itemCreateInfo.set_leafName(name);
		if (parentFolderPath) {
			itemCreateInfo.set_folderUrl(parentFolderPath);
		}

		var li = list.addItem(itemCreateInfo);
		li.set_item("Title", name);
		li.update();

		var dfd = $.Deferred();
		ctx.load(li);
		var folder = li.get_folder();
		ctx.load(folder);
		ctx.executeQueryAsync(function () {
			dfd.resolve(folder);
		}, function (r, a) {
			dfd.reject([r, a]);
		});

		return dfd.promise();
	};

	/**
       * returns folder (creating it and its path if necessary)
       * @param {string} serverRelativeUrl
       */
	var ensureFolderInList = function ensureFolderInList(serverRelativeUrl, list, ctx) {
		var dfd = $.Deferred();

		folderExists(serverRelativeUrl, ctx, list.get_parentWeb()).done(function (folder) {
			if (folder === false) {

				var parentFolders = pathSteps(serverRelativeUrl);
				var parentFolderPath = parentFolders[1];
				var bits = serverRelativeUrl.split("/");
				var name = bits[bits.length - 1];
				ensureFolderInList(parentFolderPath, list, ctx).done(function () /*parentSpFolder*/{
					createFolderInList(name, parentFolderPath, list, ctx).done(function (folder) {
						dfd.resolve(folder);
					});
				});
			} else {
				dfd.resolve(folder);
			}
		});
		return dfd.promise();
	};

	//var ensurePathNoLi = function (path) {
	//	// not safe for lists
	//	var paths = toQueue(path);
	//	var eventTemplatesDal = new ns.SpDal(ns.schema.eventTemplates, trace.log);
	//	return eventTemplatesDal.processAsQueue(paths,
	//		function (path1) {

	//			var pCreate = $.ajax({
	//				"url": _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/Folders/add('Lists/Events/" + path1 + "')",
	//				"type": "POST",
	//				"headers": {
	//					"accept": "application/json; odata=verbose",
	//					"content-type": "application/json; odata=verbose",
	//					"X-RequestDigest": $("#__REQUESTDIGEST").val()
	//				}
	//			});

	//			jQuery.when(pCreate).always(function (data) {
	//				trace.log(data);
	//			});

	//			return pCreate;
	//		});
	//};

	ns.modules.folderapi = {
		ensureFolderInList: ensureFolderInList,
		createFolderInList: createFolderInList,
		folderExists: folderExists,
		version: "0.0.3.1"
	};
})(spexplorerjs, spexplorerjs.modules.jQuery); /// <reference path="../../../../node_modules/@types/microsoft-ajax/index.d.ts" />
/// <reference path="../../../../node_modules/@types/sharepoint/index.d.ts" />
/// <reference path="../../logger/logger.js" />

/***/ }),

/***/ "./sp.list.js":
/*!********************!*\
  !*** ./sp.list.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sp.folderapi.js */ "./sp.folderapi.js");

// v 0.0.8: 2018-06-01  - getitems default force to true
// v 0.0.8: 2018-06-04  - bugfixes
// v 0.0.7: 2018-05-24  - add getAll to List prototype
// v 0.0.6: 2018-05-17  - getByTitle
// v 0.0.5: 2018-05-16  - When adding new items, skip columns not found in the list
// v 0.0.4: 2018-04-28  - move to modules
// v 0.0.2: 2018-04-10  - argument can be a list
// v 0.0.1: 2018-04-04  - fallback to trace logging if necessary
//                      - new args.list parameter

(function (ns, $) {

	var debugging = window.location.href.search(/(local|debugsplist)/) > 0;
	var trace = ns.modules.logger.get("splist", debugging);
	var spapi = ns.modules.spapi;

	var getQuery = function getQuery(caml /* string */
	, folder /* string */) {

		var query = new SP.CamlQuery();

		var queryXml = caml || "<View Scope='Recursive'>\
        <ViewFields>\
          <FieldRef Name='ID'></FieldRef>\
        </ViewFields><RowLimit>1000</RowLimit>\
      </View>";

		if (folder) {
			query.set_folderServerRelativeUrl(folder);
		}

		query.set_viewXml(queryXml);
		return query;
	};
	var runAllQuery = function runAllQuery(query, splist, spctx, limit) {
		spctx = spctx || splist.get_context();

		var items = [],
		    spItems;

		var parseRows = function parseRows(currrentItems) {
			var itemsCount = currrentItems.get_count();
			for (var i = 0; i < itemsCount; i++) {
				var item = currrentItems.itemAt(i);
				if (item) {
					items.push(item);
				}
			}
		};

		var loadNext = function loadNext(pageInfo) {

			trace.debug("page: " + pageInfo);
			pageInfo = pageInfo || "";

			var pos = new SP.ListItemCollectionPosition();
			pos.set_pagingInfo(pageInfo);
			query.set_listItemCollectionPosition(pos);
			spItems = splist.getItems(query);
			spctx.load(spItems);

			var onSuccess = function onSuccess() /*sender, args*/{
				parseRows(spItems);
				var position = spItems.get_listItemCollectionPosition();
				if (position !== null && (limit === 0 || items.length < limit)) {
					var info = position.get_pagingInfo();
					loadNext(info);
				} else {
					dfd.resolve(items, splist, spctx);
				}
			};

			spctx.executeQueryAsync(onSuccess, function (sender, error) {

				trace.error({ query: query, error: error, sender: sender });
				dfd.reject(sender, error);
			});
		};

		loadNext();

		var dfd = $.Deferred();
		return dfd.promise();
	};
	var getAll = function getAll(splist /* SP.List */, spctx /*SP.ClientContext */, caml /* string */, folder /* string */, limit /* int */) {

		var query = getQuery(caml, folder);

		return runAllQuery(query, splist, spctx, limit);
	};

	var getFields = function getFields(splist) {

		return $.Deferred(function (dfd) {

			var ctx = splist.get_context();
			var fields = splist.get_fields();
			ns.modules.spapi.loadSpElem(fields, ctx).done(function () {
				var spfields = ns.modules.spapi.collectionToArray(fields);
				spfields.sort(function (x, y) {
					return x.get_title().localeCompare(y.get_title());
				});
				dfd.resolve(spfields);
			});
		}).promise();
	};

	var getByTitle = function getByTitle(listTitle, ctx) {
		ctx = ctx || ns.modules.spapi.getCtx();
		return ctx.get_web().get_lists().getByTitle(listTitle);
	};
	var spDal = function spDal(args, log, error) {
		var ctx = null;
		var web = null;
		var lists = null;
		var list = null;
		var items = null;
		var listFields = null;

		(function () {
			//init

			if (SP.List.isInstanceOfType(args)) {
				list = args;
			} else if (SP.List.isInstanceOfType(args.list)) {
				list = args.list;
			}

			if (list != null) {
				ctx = list.get_context();
			} else {
				try {
					ctx = new SP.ClientContext();
				} catch (e) {
					ctx = SP.ClientContext.get_current();
				}
			}

			web = ctx.get_web();
			lists = web.get_lists();

			ctx.load(web, ["Id", "ServerRelativeUrl"]);
			ctx.load(lists, "Include(Title, Fields.Include(Title))");
			ctx.load(lists, "Include(Fields.Include(Title))");
		})();

		//var trace = ns.modules.logger.get("spdal");
		log = log || trace.log;
		error = error || trace.error;

		var listExists = function listExists(lists, listTitle) {

			return $.Deferred(function (dfd) {
				var onloaded = function onloaded() {
					var result = { exists: false, list: null };

					var le = lists.getEnumerator();
					while (le.moveNext()) {
						var list = le.get_current();
						if (list.get_title() === listTitle) {
							result.exists = true;
							result.list = list;
							break;
						}
					}
					log({ listExists: listTitle, result: result });
					dfd.resolve(result);
				};
				if (lists.get_data().length === 0) {
					// not initialized

					var ctx = lists.get_context();

					ctx.executeQueryAsync(function () {
						onloaded();
					}, function (r, a) {
						reqFailure(r, a, "listExists", dfd);
					});
				} else {
					onloaded();
				}
			}).promise();
		};
		var pathSteps = function pathSteps(path) {
			var bits = path.split("/");
			var qu = [];
			for (var i = bits.length; i > 0; i--) {
				var current = bits.slice(0, i).join("/");
				if (current === "") current = "/";
				qu.push(current);
			}
			return qu;
		};

		var ensureCtype = function ensureCtype(name, fieldLinks) {
			return $.Deferred(function (dfd) {
				var cTypes = list.get_contentTypes();
				loadSpElem(cTypes).done(function () {

					var matches = $.grep(spapi.collectionToArray(cTypes), function (n) {
						return n.get_name() === name;
					});
					if (matches.length === 0) {
						trace.debug("Adding ctype" + name);
						addContentType(name, fieldLinks).done(function (ctype) {
							dfd.resolve(ctype);
						});
					} else {
						dfd.resolve(matches[0]);
					}
				});
			}).promise();
		};

		var addContentType = function addContentType(name, fieldLinks) {
			return $.Deferred(function (dfd) {
				var webCTypes = web.get_contentTypes();

				list.set_contentTypesEnabled(true);
				list.update();

				var listFields = list.get_fields();
				loadSpElem([webCTypes, listFields]).done(function () {
					var matches = $.grep(spapi.collectionToArray(webCTypes), function (n) {
						return n.get_name() === name;
					});

					if (matches.length === 0) {
						trace.error(name + " not found");
					} else {
						var webcType = matches[0];
						var listCTypes = list.get_contentTypes();
						listCTypes.addExistingContentType(webcType);

						loadSpElem(listCTypes).done(function () {
							var ctype = $.grep(spapi.collectionToArray(listCTypes), function (n) {
								return n.get_name() === name;
							})[0];

							if (fieldLinks) {
								listFields = spapi.collectionToArray(listFields);

								fieldLinks.forEach(function (fieldName) {

									trace.debug("---Addfield " + fieldName + " field link");

									var localField = $.grep(listFields, function (n) {
										return n.get_internalName() === fieldName;
									})[0];

									var fieldLink = new SP.FieldLinkCreationInformation();
									fieldLink.set_field(localField);
									ctype.get_fieldLinks().add(fieldLink);
								});
								ctype.update();
								list.update();
								loadSpElem(ctype).done(function () {
									dfd.resolve(ctype);
								});
							} else {
								dfd.resolve(ctype);
							}
						});
					}
				});
			}).promise();
		};

		var addItems = function addItems(items, splist, spfields, folderUrl) {
			var dfd = $.Deferred();

			getlist().done(function () {
				splist = list;
				spfields = spfields || listFields;

				if (items && items.length > 0) {
					var spItems = [];
					for (var i = 0; i < items.length; i++) {

						var data = items[i];
						var itemCreateInfo = new SP.ListItemCreationInformation();
						if (folderUrl) {
							itemCreateInfo.set_folderUrl(folderUrl);
						}

						var newspitem = splist.addItem(itemCreateInfo);
						for (var f in data) {
							if (!spfields[f]) continue;
							var fieldType = spfields[f].get_typeAsString();
							var val = null;
							if (fieldType === "URL") {
								val = new SP.FieldUrlValue();
								val.set_url(data[f]);
							} else if (fieldType.search("Lookup") === 0) {

								var itemVal = data[f];
								if (itemVal) {
									if (itemVal.length) {
										val = [];
										for (var j = 0; j < itemVal.length; j++) {
											var iVal = new SP.FieldLookupValue();
											iVal.set_lookupId(itemVal[j]);
											val.push(iVal);
										}
									} else {
										val = new SP.FieldLookupValue();
										val.set_lookupId(itemVal);
									}
								}
							} else {
								val = data[f];
							}

							newspitem.set_item(f, val);
						}
						newspitem.update();
						ctx.load(newspitem);
						spItems.push(newspitem);
					}
					ctx.executeQueryAsync(function () {
						log("addItems done");
						dfd.resolve(spItems);
					}, function (r, a) {
						reqFailure(r, a, "addItems" + args.listTitle, dfd);
					});
				} else {
					dfd.resolve();
				}
			});

			return dfd.promise();
		};
		var handleOnReady = function handleOnReady(splist, dfd) {
			log("OnListReady");
			if (args.OnListReady) {
				args.OnListReady(me, splist, ctx).done(function () {
					dfd.resolve(splist);
				});
			} else dfd.resolve(splist);
		};
		var handleOnCreated = function handleOnCreated(splist, dfd) {
			log("OnListCreated");
			if (args.OnListCreated) {
				args.OnListCreated(me, splist, ctx).done(function () {
					dfd.resolve(splist);
				});
			} else dfd.resolve(splist);
		};

		var clearActions = function clearActions() {
			var dfd = $.Deferred();
			var actions = web.get_userCustomActions();
			actions.clear();
			ctx.load(actions);

			ctx.executeQueryAsync(function () {
				dfd.resolve(actions);
			}, function (r, a) {
				reqFailure(r, a, "clearActions", dfd);
			});

			return dfd.promise();
		};

		/**
         * returns folder (creating it and its path if necessary)
         * @param {string} serverRelativeUrl
         */
		var ensureFolder = function ensureFolder(serverRelativeUrl /*string*/) {
			var dfd = $.Deferred();

			folderExists(serverRelativeUrl).done(function (folder) {
				if (folder == false) {

					var parentFolders = pathSteps(serverRelativeUrl);
					var parentFolderPath = parentFolders[1];
					var bits = serverRelativeUrl.split("/");
					var name = bits[bits.length - 1];
					ensureFolder(parentFolderPath).done(function () /*parentSpFolder*/{
						createFolder(name, parentFolderPath).done(function (folder) {
							dfd.resolve(folder);
						});
					});
				} else {
					dfd.resolve(folder);
				}
			});
			return dfd.promise();
		};
		/**
         * @param {string} serverRelativeUrl
         */
		var folderExists = function folderExists(serverRelativeUrl) {
			var dfd = $.Deferred();
			var folder = web.getFolderByServerRelativeUrl(serverRelativeUrl);

			ctx.load(folder, "Name", "ServerRelativeUrl");

			ctx.executeQueryAsync(function () {
				//if (folder.get_exists()) { // Not available in 2013
				//    // Folder exists and isn't hidden from us. Print its name.
				//    //console.log(folder.get_name());
				//    dfd.resolve(folder);
				//}
				//else {
				//    dfd.resolve(folder);
				//    //console.log("Folder exists but is hidden (security-trimmed) for us.");
				//}
				try {
					//var url = folder.get_serverRelativeUrl();
					dfd.resolve(folder);
				} catch (e) {
					dfd.resolve(false);
				}
			}, function (s, args) {
				if (args.get_errorTypeName() === "System.IO.FileNotFoundException") {
					// Folder doesn't exist at all.
					//console.log("Folder does not exist.");
					dfd.resolve(false);
				} else {
					// An unexpected error occurred.
					//console.log("Error: " + args.get_message());
					dfd.resolve(false);
				}
			});

			return dfd.promise();
		};
		var createFolder = function createFolder(name, parentFolderPath) {
			if (list) {
				list.set_enableFolderCreation(true);
				list.update();
			}
			var itemCreateInfo = new SP.ListItemCreationInformation();
			itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
			itemCreateInfo.set_leafName(name);
			if (parentFolderPath) {
				itemCreateInfo.set_folderUrl(parentFolderPath);
			}
			var li = list.addItem(itemCreateInfo);
			li.set_item("Title", name);
			li.update();

			var dfd = $.Deferred();
			ctx.load(li);
			var folder = li.get_folder();
			ctx.load(folder);
			ctx.executeQueryAsync(function () {
				dfd.resolve(folder);
			}, function (r, a) {
				reqFailure(r, a, "createFolder", dfd);
			});

			return dfd.promise();
		};
		var addCustomAction = function addCustomAction(location, ext, perms) {

			var actions = list.get_userCustomActions();

			var action = actions.add();

			action.set_location(location);
			action.set_commandUIExtension(ext);
			action.set_sequence(0);
			if (perms) action.set_rights(perms);
			action.update();
			ctx.load(action);
			var dfd = $.Deferred();

			ctx.loadSpElem(action).done(function () {
				log("addCustomAction.done");
				dfd.resolve(action);
			});

			return dfd.promise();
		};
		var addScriptLink = function addScriptLink(name, url, sequence) {
			var dfd = $.Deferred();

			var actions = ctx.get_site().get_userCustomActions();

			var action = actions.add();
			action.set_location("ScriptLink");
			action.set_title(name);
			action.set_scriptSrc(url);
			action.set_sequence(sequence);
			action.update();

			ctx.load(action);

			ctx.executeQueryAsync(function () {
				dfd.resolve(action);
			}, function (r, a) {
				reqFailure(r, a, "addScriptLink", dfd);
			});

			return dfd.promise();
		};
		var breakRoleInheritance = function breakRoleInheritance(copyRoleAssignments, clearSubscopes) {
			list.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
			list.update();

			return loadSpElem(list, ctx);
		};

		var breakItemRoleInheritance = function breakItemRoleInheritance(copyRoleAssignments, clearSubscopes, item) {
			item = item || list;
			item.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
			item.update();

			return loadSpElem(item, ctx);
		};
		//var breakRoleInheritanceRest = function (copyRoleAssignments, clearSubscopes, webUrl, listName) {
		//	webUrl = webUrl || web.get_serverRelativeUrl();
		//	listName = listName || args.ListTitle;
		//	log("breakingRole Inheritance: " + listName);
		//	var req = window.location.href.substring(0, window.location.href.indexOf(window.location.pathname)) +
		//              "{0}/_api/web/lists/getByTitle('{1}')/breakroleinheritance(copyRoleAssignments={2},clearSubscopes={3})";
		//	req = req.replace("{0}", webUrl).replace("{1}", listName).replace("{2}", copyRoleAssignments)
		//		.replace("{3}", clearSubscopes);

		//	return $.ajax({
		//		url: req,
		//		type: "POST",
		//		headers: { "accept": "application/json;odata=verbose" },
		//	});
		//};

		var addPermission = function addPermission(principalIn, permissions, securable, parentWeb) {
			return $.Deferred(function (dfd) {
				parentWeb = parentWeb || web;
				securable = securable || list;
				var safePrincipal = principalIn;
				var safeAddPermission = function safeAddPermission(principal) {

					var collContribute = SP.RoleDefinitionBindingCollection.newObject(ctx);

					for (var i = 0; i < permissions.length; i++) {
						var perm = permissions[i];
						log("adding Permissions " + perm);

						var rdContribute = parentWeb.get_roleDefinitions().getByName(perm);
						// Create a new RoleDefinitionBindingCollection.
						// Add the role to the collection.
						collContribute.add(rdContribute);
					}

					// Get the RoleAssignmentCollection for the target web.
					//var assignments = securable.get_roleAssignments();
					// assign the group to the new RoleDefinitionBindingCollection.
					//var roleAssignmentContribute = assignments.add(principal, collContribute);

					ctx.load(principal);

					ctx.executeQueryAsync(function () /*sender*/ /*, args*/{
						dfd.resolve(principal);
					}, function (r, a) {
						reqFailure(r, a, "addPermission", dfd);
					});
				};

				if (SP.Group.isInstanceOfType(principalIn)) {
					safeAddPermission(safePrincipal);
				} else {
					ensureGroup(principalIn).done(function (res) {
						safePrincipal = res;
						safeAddPermission(safePrincipal);
					});
				}
			}).promise();
		};

		var spGroups = null;
		var getGroups = function getGroups(force) {
			if (force) {
				spGroups = null;
			}
			return $.Deferred(function (dfd) {

				if (spGroups == null) {
					var groupCollection = web.get_siteGroups();
					ctx.load(groupCollection);

					ctx.executeQueryAsync(function () /*sender, args*/{
						spGroups = {};
						var le = groupCollection.getEnumerator();
						while (le.moveNext()) {
							var group = le.get_current();
							var groupName = group.get_title();
							spGroups[groupName] = group;
						}
						log("Loaded Groups: " + groupCollection.get_count());
						dfd.resolve(spGroups);
					}, function (r, a) {
						reqFailure(r, a, "getGroups", dfd);
					});
				} else {
					dfd.resolve(spGroups);
				}
			}).promise();
		};
		var ensureGroup = function ensureGroup(name, desc) {
			return $.Deferred(function (dfd) {

				getGroups().done(function (spGroups) {
					if (spGroups[name]) {
						dfd.resolve(spGroups[name]);
					} else {
						createGroup(name, desc).done(function (group) {
							dfd.resolve(group);
						});
					}
				});
			}).promise();
		};
		var ensureGroups = function ensureGroups(groups) {
			return $.Deferred(function (dfdG) {
				getGroups().done(function () /*spGroups*/{
					ns.modules.funcs.processAsQueue(groups, function (group) {
						return $.Deferred(function (dfd) {
							ensureGroup(group.name, group.desc).done(function (spGroup) {
								log("Adding permissions for " + group.name);
								addPermission(spGroup, group.permissions, web).done(function () {
									log("adding pemission is done");
									dfd.resolve();
								});
							});
						}).promise();
					}).done(function () {
						dfdG.resolve();
					});
				}); //;
			}).promise();
		};
		var createGroup = function createGroup(name, desc, parentWeb) {
			return $.Deferred(function (dfd) {
				parentWeb = parentWeb || web;
				var ctx = parentWeb.get_context();
				var groupCollection = parentWeb.get_siteGroups();

				log("creating group: " + name);
				var spGroup = groupCollection.add(function () {
					var membersGRP = new SP.GroupCreationInformation();
					membersGRP.set_title(name);
					membersGRP.set_description(desc);
					return membersGRP;
				}());

				spGroup.set_onlyAllowMembersViewMembership(false);
				spGroup.update();
				ctx.load(spGroup);
				ctx.executeQueryAsync(function () {
					dfd.resolve(spGroup);
				}, function (r, a) {
					reqFailure(r, a, "createGroups", dfd);
				});
			}).promise();
		};
		var ensureCTypes = function ensureCTypes(ctypes) {
			return ns.modules.funcs.processAsQueue(ctypes || [], function (ctype) {
				return ensureCtype(ctype.Name, ctype.FieldLinks);
			});
		};
		var createList = function createList(listTitle, templateType) {
			log("Creating list " + listTitle);
			return $.Deferred(function (dfd) {

				var listCreationInfo = new SP.ListCreationInformation();
				listCreationInfo.set_title(listTitle);
				listCreationInfo.set_templateType(templateType);

				var oList = web.get_lists().add(listCreationInfo);

				ctx.load(oList);

				ctx.executeQueryAsync(function () {
					log(args.ListTitle + " creation done");
					list = oList;
					handleOnCreated(list, dfd);
				}, function (r, a) {
					reqFailure(r, a, "createList", dfd);
				});
			}).promise();
		};
		var reqFailure = function reqFailure(req, reqargs, from, dfd) {
			// log context failure

			var msg = from + "(list:" + args.ListTitle + ") : Request failed " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();
			error(msg);

			if (dfd) dfd.reject(msg);
		};
		var ensureList = function ensureList(web, args) {
			return $.Deferred(function (dfd) {

				if (list != null) {
					var rootFolder = list.get_rootFolder();
					ctx.load(rootFolder, ["ServerRelativeUrl"]);
					ctx.loadSpElem(list).done(function () {
						ensureFields(list).done(function () {
							dfd.resolve(list);
						});
					});
				} else {

					lists = web.get_lists();

					var done = function done() {
						log("lists loaded");
						listExists(lists, args.ListTitle).done(function (res) {
							if (res.exists) {
								log("list already exists");
								list = res.list;

								var rootFolder = list.get_rootFolder();
								ctx.load(rootFolder, ["ServerRelativeUrl"]);
								ctx.executeQueryAsync(function () {
									ensureFields(list).done(function () {
										dfd.resolve(list);
									});
								});
							} else {
								createList(args.ListTitle, args.ListTemplate).done(function (splist) {

									var rootFolder = splist.get_rootFolder();
									ctx.load(rootFolder, ["ServerRelativeUrl"]);
									ctx.executeQueryAsync();

									var defaultItems = function defaultItems(spfields) {
										if (typeof args.DefaultItems == "function") {
											args.DefaultItems(spfields, me).done(function (items) {
												addItems(items, splist, spfields);
											});
										} else {
											addItems(args.DefaultItems, splist, spfields);
										}
									};
									log(args.ListTitle + ": creating fields");

									ensureFields(splist, args.Fields || []).done(function (spfields) {
										ensureCTypes(args.ContentTypes).done(function () {
											defaultItems(spfields);
											if (args.Permissions) {
												breakRoleInheritance(false, true).done(function () {
													log("done with inheritance");
													ns.modules.funcs.processAsQueue(args.Permissions, function (entry) {
														var groupName = entry.name;
														var perms = entry.permissions;
														log("adding perm: " + groupName + " to " + args.ListTitle);
														return addPermission(groupName, perms, splist);
													}).done(function () {
														log("done adding permissions");
														handleOnReady(splist, dfd);
													});
												});
											} else {
												handleOnReady(splist, dfd);
											}
										});
									}).fail(function (err) {
										log(err);
									});
								}).fail(function (err) {

									log(err);
								});
							}
						});
					};

					log("loading lists...");
					ctx.load(lists);

					ctx.executeQueryAsync(done, function (r, a) {
						reqFailure(r, a, "ensureList", dfd);
					});
				}
			}).promise();
		};
		var ensureFields = function ensureFields(list, fields) {
			fields = fields || [];
			var spfields = list.get_fields();
			var getMarkup = function getMarkup(field) {
				return $.Deferred(function (dfd) {

					var xml = field.markup;
					if (typeof field.markup == "function") {
						field.markup(ctx, list, spfields, lists, web).done(function (xml) {
							dfd.resolve(xml);
						});
					} else {
						dfd.resolve(xml);
					}
				}).promise();
			};
			return $.Deferred(function (dfd) {
				var done = function done() {
					spfields = list.get_fields();

					ctx.load(spfields, "Include(Title,FieldTypeKind,TypeAsString,InternalName)");
					ctx.executeQueryAsync(function () {
						log("existing fields loaded");
						var le = spfields.getEnumerator();
						var parsed = {};
						while (le.moveNext()) {
							var field = le.get_current();
							parsed[field.get_internalName()] = field;
						}
						listFields = parsed;
						dfd.resolve(parsed);
					}, function onError(sender, args) {
						dfd.reject("Request failed " + args.get_message() + "\n" + args.get_stackTrace());
					});
				};
				ns.modules.funcs.processAsQueue(fields, function (field) {
					return $.Deferred(function (fieldDfd) {
						getMarkup(field).done(function (xml) {

							log("adding: " + xml);
							var spField = spfields.addFieldAsXml(xml, true, SP.AddFieldOptions.defaultValue);

							if (field.post) {
								field.post(spField);
							}
							ctx.load(spField);
							fieldDfd.resolve();
						});
					}).promise();
				}).done(done);
			}).promise();
		};

		var deleteList = function deleteList(lists, listTitle) {
			log("deleting list " + listTitle);
			return $.Deferred(function (dfd) {

				listExists(lists, listTitle).done(function (listexists) {

					if (listexists.exists) {
						listexists.list.deleteObject();
						ctx.executeQueryAsync(function () {
							dfd.resolve("list deleted");
						}, function (r, a) {
							reqFailure(r, a, "deleteList", dfd);
						});
					} else {
						dfd.resolve("list not found");
					}
				});
			}).promise();
		};
		var delTheList = function delTheList() {
			return deleteList(lists, args.ListTitle);
		};

		var loadSpElem = function loadSpElem(elem, sptx, caller) {

			sptx = sptx || ctx;
			return $.Deferred(function (dfd) {

				if (elem.length) {
					for (var i = 0; i < elem.length; i++) {
						sptx.load(elem[i]);
					}
				} else sptx.load(elem);

				sptx.executeQueryAsync(function () {
					dfd.resolve(elem);
				}, function (r, a) {
					reqFailure(r, a, caller || "loadSpElem", dfd);
				});
			}).promise();
		};
		var getlist = function getlist() {
			return $.Deferred(function (dfd) {
				ensureList(web, args).done(function (list) {
					dfd.resolve(list, ctx, web);
				});
			}).promise();
		};
		var _getitems = function _getitems(caml, folder, limit) {
			return $.Deferred(function (dfd) {
				//var rootFolder = list.get_rootFolder();
				var ctx = list.get_context();
				//var scripts = [];
				var queryXml = caml || args.DefaultQuery || "<View Scope='Recursive'>\
<ViewFields>\
<FieldRef Name='ID'></FieldRef>\
<FieldRef Name='Title'></FieldRef>\
</ViewFields><RowLimit>1000</RowLimit>\
</View>";
				//loadSpElem(rootFolder, ctx),
				$.when(getAllItemsPaged(queryXml, folder, limit)).done(function (items) {
					log(items);
					if (args.itemParser) {
						dfd.resolve(args.itemParser(items), list, ctx);
					} else {
						dfd.resolve(items, list, ctx);
					}
				}).fail(function () {
					error("getitems error");
				});
			}).promise();
		};
		var getItem = function getItem(id) {
			return $.Deferred(function (dfd) {
				getlist().done(function (list) {
					var oListItem = list.getItemById(id);

					loadSpElem(oListItem, ctx).done(function (el) {
						dfd.resolve(el, list, web, ctx);
					}).fail(function (err) {
						dfd.reject(err);
					});
				});
			}).promise();
		};
		var saveItem = function saveItem(id, title, desc, script) {
			ctx = ctx || SP.ClientContext.get_current();

			var dfd = $.Deferred();

			var web = ctx.get_web();
			var list = web.get_lists();
			var targetList = list.getByTitle(args.ListTitle);
			var oListItem = null;

			if (id && id > 0) {
				oListItem = targetList.getItemById(id);
			} else {
				var itemCreateInfo = new SP.ListItemCreationInformation();
				oListItem = targetList.addItem(itemCreateInfo);
			}

			oListItem.set_item(args.FieldNames.title, title);
			oListItem.set_item(args.FieldNames.desc, desc);
			oListItem.set_item(args.FieldNames.script, script);

			oListItem.update();

			loadSpElem(oListItem, ctx).done(function (el) {
				dfd.resolve(el);
			}).fail(function (err) {
				dfd.reject(err);
			});

			return dfd.promise();
		};
		var getAllItemsPaged = function getAllItemsPaged(caml, folder, limit) {

			limit = limit || 0;

			var dfd = $.Deferred();
			getlist().done(function (splist) {

				getAll(splist, ctx, caml, folder, limit).done(function (allItems) {
					dfd.resolve(allItems);
				});
			}).fail(function () {
				trace.error("error getAllPages");
			});

			return dfd.promise();
		};

		/**
         * For large lists, get items on individual folders, ** very slow **
         * @param {SP.ListItem} tFolder
         */
		var loadAllFilesFromAllFolders = function loadAllFilesFromAllFolders(caml) {

			var folderQueue = [list.get_rootFolder()];
			var allitems = [];

			return $.Deferred(function (alldfd) {
				ns.modules.funcs.processAsQueue(folderQueue, function (folder) {

					return $.Deferred(function (dfd) {

						ctx.load(folder, ["ServerRelativeUrl"]);
						loadSpElem(folder.get_folders()).done(function (folders) {
							spapi.collectionToArray(folders).forEach(function (n) {
								folderQueue.push(n);
							});

							var folderUrl = folder.get_serverRelativeUrl();
							caml = caml || "<View><RowLimit>1000</RowLimit></View>";

							getAllItemsPaged(caml, folderUrl).done(function (items) {

								for (var i = 0; i < items.length; i++) {

									var li = items[i];
									var vls = li.get_fieldValues();

									if (vls.FSObjType == "1") //folder
										{
											folderQueue.push(li);
										} else {
										allitems.push(li);
									}
								}

								dfd.resolve();
							});
						});
					}).promise();
				}).done(function () {
					alldfd.resolve(allitems);
				});
			}).promise();
		};

		var addWebPart = function addWebPart(serverRelativeFormUrl, wpXml, zone, position) {

			return $.Deferred(function (dfd) {
				var oFile = web.getFileByServerRelativeUrl(serverRelativeFormUrl);

				var lpm = oFile.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);

				var oWebPartDefinition = lpm.importWebPart(wpXml);
				var oWebPart = oWebPartDefinition.get_webPart();

				var wp = lpm.addWebPart(oWebPart, zone || "LeftColumn", position || 0);
				var wps = lpm.get_webParts();
				ctx.load(wps, "Include(WebPart.Title)");

				loadSpElem([oWebPart, wp], ctx, "Add web part").done(function () {
					wp = wps.getById(wp.get_id());
					var wpp = wp.get_webPart();
					var props = wpp.get_properties();

					loadSpElem([wp, wpp, props]).done(function () /*res*/{
						dfd.resolve(wp);
					});
				});
			});
		};

		var me = {
			loadAllFilesFromAllFolders: loadAllFilesFromAllFolders,
			addCustomAction: addCustomAction,
			args: args,
			deleteList: delTheList,
			addWebPart: addWebPart,
			getitems: function getitems(caml /*string*/, force /*bool*/, limit, folder) {
				if (arguments.length == 1) {
					force = true;
				}
				if (force) {
					items = null;
				}
				return $.Deferred(function (dfd) {

					if (items) {
						dfd.resolve(items);
					} else {
						getlist().done(function () /*list*/{
							_getitems(caml, folder, limit).done(function (res) {
								items = res;
								dfd.resolve(items, list, ctx);
							});
						});
					}
				}).promise();
			},
			getitem: function getitem(id) {
				return $.Deferred(function (dfd) {

					getItem(id).done(function (el) {
						dfd.resolve(el, list, web);
					});
				}).promise();
			},
			getlist: getlist,
			createGroup: createGroup,
			getGroups: getGroups,
			ensureGroups: ensureGroups,
			ensureGroup: ensureGroup,
			save: saveItem,
			addScriptLink: addScriptLink,
			clearActions: clearActions,
			createFolder: createFolder,
			loadSpElem: loadSpElem,
			processAsQueue: ns.modules.funcs.processAsQueue,
			ensureFolder: ensureFolder,
			getItems: getAllItemsPaged,
			addItems: addItems,
			ctx: ctx,
			list: list,
			spErrorHandler: reqFailure,
			breakItemRoleInheritance: breakItemRoleInheritance,
			breakRoleInheritance: breakRoleInheritance,
			addContentType: addContentType,
			ensureCtype: ensureCtype
		};
		return me;
	};

	ns.modules.listapi = {
		getByTitle: getByTitle,
		runAllQuery: runAllQuery,
		getQuery: getQuery,
		getAll: getAll,
		getFields: getFields,
		Dal: spDal,
		version: "0.0.8"
	};

	var updateApi = function updateApi() {
		if (window.SP && SP.List) {
			SP.List.prototype.getAll = function () {
				var args = Array.prototype.slice.call(arguments);
				args.unshift(this.get_context());
				args.unshift(this);
				return getAll.apply(getAll, args);
			};
		}
	};

	updateApi();

	SP.SOD.executeOrDelayUntilScriptLoaded(function () {
		trace.debug("splist.loaded");
		updateApi();
	}, "sp.js");
	SP.SOD.executeFunc("sp.js", null, null);
})(spexplorerjs, spexplorerjs.modules.jQuery); /// <reference path="../../../../node_modules/@types/microsoft-ajax/index.d.ts" />
/// <reference path="../../../../node_modules/@types/sharepoint/index.d.ts" />
/// <reference path="../../logger/logger.js" />
/// <reference path="sp.folderapi.js" />
/// <reference path="sp.base.js" />

/***/ }),

/***/ "./sp.web.js":
/*!*******************!*\
  !*** ./sp.web.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sp.base.js */ "./sp.base.js");

(function (ns, $) {

	/// TODO: Document
	var createWeb = function createWeb(parentWeb, title, url, template, inheritPermissions) {
		return $.Deferred(function (dfd) {
			var ctx = SP.ClientContext.get_current();
			parentWeb = parentWeb || ctx.get_web();
			var wci = new SP.WebCreationInformation();
			wci.set_webTemplate(template);
			wci.set_title(title);
			wci.set_url(url);
			wci.set_language(1033);
			wci.set_useSamePermissionsAsParentSite(inheritPermissions);
			parentWeb.get_webs().add(wci);
			parentWeb.update();
			ctx.load(parentWeb);
			ctx.executeQueryAsync(function () {
				dfd.resolve((parentWeb.get_serverRelativeUrl() + "/" + url).replace(/\/\/*/g, "/"));
			}, function onError(sender, args) {
				dfd.reject("Request failed " + args.get_message() + "\n" + args.get_stackTrace());
			});
		}).promise();
	};

	/**
     * Load an existing site
     * fails if site doesn't exist
     * @param {string} url - site relative url of web
     * @param {spsite} site- site reference, if null will load from current context
     * @param {ClientContext} ctx - SharePoint client context, if null the current context will be used
     * @param {function} loadFunc - function run before the web is loaded (web will be passed as argument)
     */
	var loadWeb = function loadWeb(url, site, ctx, loadFunc) {
		return $.Deferred(function (dfd) {

			ctx = ctx || SP.ClientContext.get_current();
			site = site || ctx.get_site();
			var web = url ? typeof url == "string" ? site.openWeb(url) : url : ctx.get_web();
			var res = loadFunc && loadFunc(web) || ctx.load(web);

			ctx.executeQueryAsync(function (sender, args) {
				dfd.resolve(web, res, sender, args);
			}, function onError(sender, args) {
				dfd.reject({ sender: sender, args: args });
				//dfd.reject('Request failed ' + args.get_message() + '\n' + args.get_stackTrace());
			});
		}).promise();
	};

	// TODO: Document
	var webTemplates = function webTemplates(web, ctx) {
		return $.Deferred(function (dfd) {

			ctx = ctx || SP.ClientContext.get_current();
			web = web || ctx.get_web();
			var templates = web.getAvailableWebTemplates(1033, false);ctx.load(templates);ctx.executeQueryAsync(function () {
				var templateArray = ns.sp.collectionToArray(templates);
				dfd.resolve(templateArray);
			}, function onError(sender, args) {
				dfd.reject({ sender: sender, args: args });
			});
		}).promise();
	};

	ns.modules.webapi = {
		webTemplates: webTemplates,
		createWeb: createWeb,
		loadWeb: loadWeb,
		version: "0.0.4"
	};
})(spexplorerjs, spexplorerjs.modules.jQuery); /// TODO: Document
// v 0.0.4: 2018-04-04 - to modules, api
// v 0.0.3: 2018-04-04 - remove direct dependency on jquery
// v 0.0.2: 2018-03-28 - WebDal
// v 0.0.1: 2018-03-11 - Added loadWeb function

/***/ })

/******/ });