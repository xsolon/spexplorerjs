/// <reference path="api.js" />
/// <reference path="sp.folderapi.js" />
/// <reference path="../../../typings/sharepoint/index.d.ts" />
/// <reference path="../../widget.base.js" />
/* global _spPageContextInfo */
import "./api.js";
import "../../widget.base.js";
import template from "./tester.template.html";


(function (ns, $) {

	var debugging = window.location.href.search(/(local|tester)/) > 0;
	var trace = ns.modules.logger.get("api.tester", debugging);

	trace.debug("tester 0.0.1");

	var xApiTester = function (ui/*, opts*/) {
		var $el = $(ui);

		trace.debug("new");

		$el.html(template.trim());
		var txtCtrl = $("#txtPath", $el);

		var spapi = ns.modules.spapi;
		var ctx = spapi.getCtx();

		var web = ctx.get_web();
		var file = web.getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath);
		var li = file.get_listItemAllFields();
		var list = li.get_parentList();
		var rootFolder = list.get_rootFolder();

		spapi.loadSpElem(rootFolder, ctx).done(function () {
			var url = rootFolder.get_serverRelativeUrl();
			trace.debug(url);
			txtCtrl.val(url);
		});

		$("button", $el).click(function () {

			var path = txtCtrl.val();

			SP.UI.Notify.addNotification("Ensure path:" + path);
			ns.modules.folderapi.ensureFolderInList(path, list, ctx).done(function () {
				SP.UI.Notify.addNotification("Ensure path done:" + path);
			});

		});

	};

	ns.widgets.addSpWidget("xApiTester", xApiTester, "0.1.6");

})(spexplorerjs, spexplorerjs.modules.jQuery);

