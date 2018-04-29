/// TODO: Document
// v 0.0.4: 2018-04-04 - to modules, api
// v 0.0.3: 2018-04-04 - remove direct dependency on jquery
// v 0.0.2: 2018-03-28 - WebDal
// v 0.0.1: 2018-03-11 - Added loadWeb function
import "./sp.base.js";

(function (ns, $) {

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

	ns.modules.webapi = {
		webTemplates: webTemplates,
		createWeb: createWeb,
		loadWeb: loadWeb,
		version: "0.0.4"
	};

})(spexplorerjs, spexplorerjs.modules.jQuery);