/// <reference path="../../../../node_modules/@types/microsoft-ajax/index.d.ts" />
/// <reference path="../../../../node_modules/@types/sharepoint/index.d.ts" />
/// <reference path="../../logger/logger.js" />

import "./sp.base.js";

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
	var folderExists = function (serverRelativeUrl, ctx, web) {

		if (ctx) { /*defined */ } else {
			if (web) {
				ctx = web.get_context();
			}
			else {
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
				trace.debug(`folder exists:${url}`);
				dfd.resolve(folder);

			} catch (e) {
				trace.debug("Folder does not exist.");
				dfd.resolve(false);
			}
		},
		function (s, args) {
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

	var pathSteps = function (path) {
		var bits = path.split("/");
		var qu = [];
		for (var i = bits.length; i > 0; i--) {
			var current = bits.slice(0, i).join("/");
			if (current === "") current = "/";
			qu.push(current);
		}
		return qu;
	};

	var createFolderInList = function (name, parentFolderPath, list, ctx) {
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
	var ensureFolderInList = function (serverRelativeUrl, list, ctx) {
		var dfd = $.Deferred();

		folderExists(serverRelativeUrl, ctx, list.get_parentWeb()).done(function (folder) {
			if (folder === false) {

				var parentFolders = pathSteps(serverRelativeUrl);
				var parentFolderPath = parentFolders[1];
				var bits = serverRelativeUrl.split("/");
				var name = bits[bits.length - 1];
				ensureFolderInList(parentFolderPath, list, ctx).done(function () /*parentSpFolder*/ {
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

})(spexplorerjs, spexplorerjs.modules.jQuery);