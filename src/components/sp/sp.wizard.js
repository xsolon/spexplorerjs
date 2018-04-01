import $ from "jquery";
import "../widget.base.js";
import "./sp.base.js";
import "./sp.web.js";
import template from "./sp.wizard.template.html";
import modaltemplate from "./sp.wizard.modaltemplate.html";

(function (ns, $) {

	var debugging = window.location.href.search(/(localhost|debugspWizard)/) > 0;
	var tracing = ns.logger.get("spWizard", debugging);
	var log = tracing.log, debug = tracing.debug;
	//var error = tracing.error;

	log("0.0.1");

	ns.widgetClick = function (el) {

		var $el = $(el);
		var url = $el.attr("data-widgetUrl");
		debug("loading" + url);

		var widgetType = $el.attr("data-widget");
		var parent = $el.parents(".spexp");
		parent.html("<div data-widget=\"" + widgetType + "\"/>");

		$.getScript(url, function () {
			debug("done");
		});
	};

	var SpWizard = function (el) {

		$(el).html(template);
	};

	var bootDialog = function () {
		$("body").append(modaltemplate);
		$(".modal-body").html(template);
		$("#spExplorerJsWizard").click();
	};

	var spDialog = function () {

		var options = SP.UI.$create_DialogOptions();

		options.title = "SpExplorerJs";
		options.autoSize = true;
		options.allowMaximize = true;

		var tmp = template;

		var dialog = $(tmp).clone();

		options.html = dialog[0];
		options.showMaximized = false;
		options.resizable = true;

		SP.UI.ModalDialog.showModalDialog(options);

	};

	(function register() {
		var widgetInfo = ns.widgets.addWidget("spWizard", SpWizard, "0.0.1");

		if (window["ExecuteOrDelayUntilScriptLoaded"]) {
			ExecuteOrDelayUntilScriptLoaded(function () {
				widgetInfo.startup();
			}, "sp.js");
			SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });
		}
		else widgetInfo.startup();

	})();

	if (false)
		(function init() {

			ExecuteOrDelayUntilScriptLoaded(function () {
				debug("ExecuteOrDelayUntilScriptLoaded");
				bootDialog();
			}, "sp.js");
			//SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () {
			//	debug("executeFunc");
			//});

		})();

})(window.spexplorerjs, $);