/// <reference path="../../typings/sharepoint.d.ts" />
/// <reference path="../widget.base.js" />
import "../widget.base.js";
import template from "./spwizard.template.html";
import "../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js";
import "../../../public/vendor/bootstrap/3.3.7/css/spexp.min.css";

(function (ns) {
	var $ = spexplorerjs.modules.jQuery;

	var placeholder = $(template);

	ns.widgetClick = function (el) {
		var $el = $(el);
		var url = $el.attr("data-script");
		var widgetName = $el.attr("data-widget");
		el = $el.parents(".xbootSection:first");
		placeholder.html("<div data-widget='{0}'></div>".replace("{0}", widgetName));

		var script = document.createElement("script");
		script.src = url;
		$("body").append(script);
	};

	ExecuteOrDelayUntilScriptLoaded(() => {

		var options = SP.UI.$create_DialogOptions();

		options.title = "SpExplorerJs";
		options.autoSize = true;
		options.allowMaximize = true;
		options.html = placeholder[0];
		options.dialogReturnValueCallback = function (/*resp, retVal*/) { };

		options.showMaximized = true;
		options.resizable = true;
		//options.args = { data: availableitems, category: $(":selected", cmb).text() };
		SP.UI.ModalDialog.showModalDialog(options);

	}, "sp.js");
})(window.xSolon = window.xSolon || {});