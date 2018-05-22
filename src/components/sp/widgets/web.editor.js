/// <reference path="../api/sp.list.js" />
/// <reference path="../../../../node_modules/@types/sharepoint/index.d.ts" />
import "../api/api.js";
import "./customaction.editor.js";
import template from "./web.editor.html";
import "./masterpageselector.js"; // loads jstree, bootstrap
import "../../widget.base.js";

(function (ns, $) {

	var debugging = window.location.href.search(/(local|debugwebeditor)/) > 0;
	var trace = ns.modules.logger.get("webeditor", debugging);

	var props = {
		MasterUrl: { set: "set_masterUrl", get: "get_masterUrl", name: "MasterUrl", widget: "xSpMastePageSelector" },
		CustomMasterUrl: { set: "set_customMasterUrl", get: "get_customMasterUrl", name: "CustomMasterUrl", widget: "xSpMastePageSelector" },
		UserCustomActions: { type: "collection", name: "UserCustomActions", widget: "spCustomActions", get: "get_userCustomActions" }

	};

	var xSpWebEditor = function (ui/*, opts*/) {
		trace.debug("init");

		var $el = $(ui);

		$el.html(template.trim());

		var ctx = ns.modules.spapi.getCtx();
		var web = ctx.get_web();

		$("button.recreate", $el).click(function () {

			var config = web.get_configuration();
			var template = web.get_webTemplate();
			template = template + "#" + config;
			var title = web.get_title();
			var bits = web.get_url().split("/");
			var webName = bits[bits.length - 1];

			var parentWebInfo = web.get_parentWeb();

			web.deleteObject();

			ns.modules.spapi.loadSpElem(parentWebInfo).done(function () {
				var site = ctx.get_site();
				var pWeb = site.openWebById(parentWebInfo.get_id());
				ns.modules.webapi.createWeb(pWeb, title, webName, template).done(function () {
					trace.log("done");
				});

			});

		});

		$("button:last", $el).click(function () {
			web.update();
			SP.UI.Notify.addNotification("Saving changes to web...");
			ns.modules.spapi.loadSpElem(web).done(function () {
				trace.debug(web);
				SP.UI.Notify.addNotification("Done!");
			}).fail(function () {
				SP.UI.Notify.addNotification("Error");
			});
		});

		ns.widgets.xSPTreeLight.startup($(".webSelector", $el)).on("listchange", function (event, list) {

			web = list;
			ctx = web.get_context();

			ns.modules.spapi.loadSpElem(web).done(function () {
				trace.debug(web);
				$("[data-prop]", $el).each(function () {
					var ui = $(this);
					var prop = props[ui.attr("data-prop")];
					var widget = ns.widgets[prop.widget];
					widget.startup(ui, { prop: prop, elem: web, showSelector: false });
				});
			});

		});

		var me = {};

		return me;

	};

	ns.widgets.addSpWidget("xSpWebEditor", xSpWebEditor, "0.0.2");

})(spexplorerjs, spexplorerjs.modules.jQuery);