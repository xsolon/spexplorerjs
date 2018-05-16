/// <reference path="../../logger/logger.js" />
/* global require */
// v 0.0.2 : 2018-04-28 - update to newer infra
// v 0.0.1 : 2018-03-11 - loadSpElem

require("../../logger/logger.js");

(function (ns, $) {

	var debug = window.location.href.search(/[localhost|debugsp]/) > 0;
	var trace = ns.modules.logger.get("sp", debug);

	trace.debug("v.0.0.2");

	var utils = {
		collectionToArray: function (spCollection) {

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
		loadSpElem: function (elem, sptx, caller) {

			sptx = sptx || (elem.get_context && elem.get_context()) || utils.getCtx();
			return $.Deferred(function (dfd) {

				if (elem.length) {
					for (var i = 0; i < elem.length; i++) {
						sptx.load(elem[i]);
					}
				} else sptx.load(elem);

				sptx.executeQueryAsync(function () {
					dfd.resolve(elem, sptx);
				},
				function (r, a) {
					utils.reqFailure(r, a, caller || "loadSpElem", dfd);
				});
			}).promise();
		},
		uploadAjax: function (buffer, webUrl, listTitle, fileName) {
			return $.ajax({
				url: `${webUrl}../_api/web/lists/getByTitle('${listTitle}')/RootFolder/Files/add(url='${fileName
				}',overwrite='true')`,
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
		reqFailure: function (req, reqargs, from, dfd) {
			// log context failure

			var msg = from + " Request failed " + reqargs.get_message() + "\n" + reqargs.get_stackTrace();

			if (dfd) dfd.reject(msg);
			else {
				// if there is no promise log at this level
				trace.error(msg);
			}
		},
		wsCall: function (body, action, url) {
			return $.Deferred(function (dfd) {
				$.ajax({
					type: "POST",
					beforeSend: function (request) {
						request.setRequestHeader("SOAPAction", action);
					},
					contentType: "text/xml; charset=utf-8",
					url: url,
					data: body,
					statusCode: {
						500: function (/*jqXHR, textStatus, errorThrown*/) {
							dfd.reject($(arguments[0].responseXML).find("errorstring").html());
						}
					}
				}).done(function (xml /*, status, jqXHR*/) {
					var res = $($(xml).find("Body,soap\\:Body")[0]
						.firstChild); // alernative selector for different browsers
					res.xml = res[0].xml;
					if (!res[0].xml && window.XMLSerializer) {
						var ss = new XMLSerializer();
						res.xml = ss.serializeToString(res[0]);
					}
					dfd.resolve(res);
				}).fail(function (jqXHR, textStatus, errorThrown) {
					if (jqXHR.status != 500)
						dfd.reject(errorThrown);
				});

			});
		},
		getCtx: function (url) {
			var ctx;
			ctx = new SP.ClientContext(url);
			//try {
			//  ctx = SP.ClientContext.get_current();
			//} catch (e) {
			//}
			return ctx;
		},
		setformJsLink: function (url, ctx, bizJs) {
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

					ctx.load(wp); ctx.load(wpp); ctx.load(props);
					ctx.executeQueryAsync(function () {
						props.set_item("JSLink", bizJs);
						wp.saveWebPartChanges();
						ctx.executeQueryAsync(function () {
							jslinkdfd.resolve();
						});
					}, function (/*r, a*/) { });

				}, function (/*r, a*/) { });

			}).promise();
		}

	};

	ns.modules.spapi = utils;

})(spexplorerjs, spexplorerjs.modules.jQuery);