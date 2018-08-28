import "../widget.base.js";
import "./sp.base.js";
import "./sp.web.js";
import template from "./sp.wizard.template.html";
import modaltemplate from "./sp.wizard.modaltemplate.html";

(function (ns, $) {

	var debugging = window.location.href.search(/(localhost|debugspWizard)/) > 0;
	var trace = ns.modules.logger.get("spWizard", debugging);

	trace.log("0.0.2");

	ns.widgetClick = function (el) {

		var $el = $(el);
		var url = $el.attr("data-widgetUrl");
		trace.debug("loading" + url);

		var widgetType = $el.attr("data-widget");
		var parent = $el.parents(".spexp");
		parent.html("<div data-widget='" + widgetType + "'/>");

		$.getScript(url, function () {
			trace.debug("done");
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

		var dialog = $(tmp);

		options.html = dialog[0];
		options.showMaximized = true;
		options.resizable = true;

		SP.UI.ModalDialog.showModalDialog(options);

		// some third party set an !important z-index!
		setTimeout(function () {
			// this is the ootb value + !important
			$(".ms-dlgContent").each(function () { this.style.setProperty("z-index", "1505", "important"); });
		}, 500);
	};


	ns.widgets.addSpWidget("spWizard", SpWizard, "0.0.2");

	//if (false)
	(function init() {

		ExecuteOrDelayUntilScriptLoaded(function () {
			trace.debug("ExecuteOrDelayUntilScriptLoaded");
			//bootDialog();
			spDialog();
		}, "sp.js");
		//SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () {
		//	debug("executeFunc");
		//});

	})();

})(spexplorerjs, jQuery);