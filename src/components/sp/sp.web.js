/// TODO: Document
// v 0.0.1: 208-03-11 - Added loadWeb function
import $ from "jquery";
import "../logger/logger.js";
import "./sp.base.js";

(function (ns, $) {
	var debug = window.location.href.search(/[localhost|webapi]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "webapi";
		return d;
	};
	/// TODO: Document
	var createWeb = function (parentWeb, title, url, template, inheritPermissions) {
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
	var loadWeb = function (url, site, ctx, loadFunc) {
		return $.Deferred(function (dfd) {

			ctx = ctx || SP.ClientContext.get_current();
			site = site || ctx.get_site();
			var web = (url) ? (typeof url == "string") ? site.openWeb(url) : url : ctx.get_web();
			var res = loadFunc && loadFunc(web) || ctx.load(web);

			ctx.executeQueryAsync(
				function (sender, args) {
					dfd.resolve(web, res, sender, args);
				},
				function onError(sender, args) {
					dfd.reject({ sender: sender, args: args });
					//dfd.reject('Request failed ' + args.get_message() + '\n' + args.get_stackTrace());
				});
		}).promise();
	};

	// TODO: Document
	var webTemplates = function (web, ctx) {
		return $.Deferred(function (dfd) {

			ctx = ctx || SP.ClientContext.get_current();
			web = web || ctx.get_web();
			var templates = web.getAvailableWebTemplates(1033, false); ctx.load(templates); ctx.executeQueryAsync(
				function () {
					var templateArray = ns.sp.collectionToArray(templates);
					dfd.resolve(templateArray);
				},
				function onError(sender, args) {
					dfd.reject({ sender: sender, args: args });
				});
		}).promise();

	};

    var WebDal = function (web) {

        var ctx = null;

        (function init() {
            var getCtx = function () {
                var ctx1 = null;
                try {
                    ctx1 = new SP.ClientContext();
                } catch (e) {
                    ctx1 = SP.ClientContext.get_current();
                }
                return ctx1;
            };

            if (web == null) {
                ctx = getCtx();
                web = ctx.get_web();
            } else if (typeof web == "string") {
                throw "TODO: string to web";
            } else if (SP.Web.isInstanceOfType(web)) {
                ctx = web.get_context();
            }

        })();

        var reqFailure = function (req, reqargs, from, dfd) { // log context failure

            var msg = 'Request failed ' + reqargs.get_message() + '\n' +
                reqargs.get_stackTrace();

            error(msg);

            if (dfd)
                dfd.reject(msg);

        };

        var loadSpElem = function (elem, sptx, caller) {

            sptx = sptx || ctx;
            return $.Deferred(function (dfd) {

                if (elem.length) {
                    for (var i = 0; i < elem.length; i++) {
                        sptx.load(elem[i]);
                    }
                } else
                    sptx.load(elem);

                sptx.executeQueryAsync(function () {
                    dfd.resolve(elem);
                },
                    function (r, a) { debugger; reqFailure(r, a, caller || 'loadSpElem', dfd); });

            }).promise();

        };

        var createField = function (fieldSchema, commit) {

            var createFields = fields.addFieldAsXml(fieldSchema, false, SP.AddFieldOptions.addFieldCheckDisplayName);

            if (commit) {
                ctx.load(createFields);
            }
        };

        var ensureFields = function (fields) {
            var spFields = web.get_fields();
            return $.Deferred(function (dfd) {

                loadSpElem(spFields).done(function () {

                    var webFieldsDic = ns.funcs.arrayToDictionary(ns.funcs.collectionToArray(spFields), function (spField) {
                        return spField.get_internalName();
                    });

                    for (var i = 0; i < fields.length; i++) {
                        var field = fields[i];
                        var internalName = field.InternalName;
                        var definition = field.Xml;

                        if (webFieldsDic[internalName]) {
                            log('Field already in web: ' + internalName);
                        } else {
                            createField(definition);
                        }
                    }

                    loadSpElem(spFields).done(function () {
                        log('ensureFields.done');
                        dfd.resolve(spFields, web, ctx);
                    });
                });
            }).promise();
        };

        var createContentType = function () {

        };

        var ensureContentType = function () {

            var contentTypeCollection = web.get_contentTypes();

            loadSpElem(contentTypeCollection).done(function () {

                var webFieldsDic = ns.funcs.arrayToDictionary(ns.funcs.collectionToArray(spFields), function (spField) {
                    return spField.get_internalName();
                });
            });
        };
        var public = {
            ensureFields: ensureFields
        };

        return public;
    };

    ns.webapi = {
        dal = WebDal,
		webTemplates: webTemplates,
		createWeb: createWeb,
		loadWeb: loadWeb,
		version: "0.1"
	};

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $);