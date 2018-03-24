
import $ from "jquery";
import "../../../public/vendor/select2/js/select2.full.js";
import "../../../public/vendor/select2/css/select2.css";
import "../widget.base.js";
import template from "./ui.perms.template.html";

(function (ns, $) {
	var debug = window.location.href.search(/[localhost|debugcustomactions]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "permissions";
		return d;
	};

	var PermissionUI = function (el/*, opts*/) {// constructor
		var $el = $(el), me = {};
		//opts = $.extend({
		//}, opts);
		$el.html($(template).html());
		$el.data(widgetInfo.publicName, me);

		var perms = null;
		var select = $("[name=\"Permissions\"]").change(function () {
			var vals = $(this).val();
			log(vals);
			perms = new SP.BasePermissions();
			for (var i = 0; i < vals.length; i++) {
				perms.set(parseInt(vals[i]));
			}
			$el.attr("data-value", vals).trigger("change");

		}).select2({});

		me.setSpPerms = function (spperms) {

			$("option", $el).each(function () {
				var opti = $(this);
				var perm = parseInt(opti.val());
				var has = !isNaN(perm) && spperms.has(perm);
				/// TODO: implement debug
				//log("{opti.text()}: {has}");
				opti.prop("selected", has);
			});
			select.trigger("change");

		};
		me.getSpPerms = function () {
			return perms;
		};
		me.getSpPermArray = function () {
			return $el.attr("data-value");
		};

		return me;
	};

	var widgetInfo = ns.widgets.addWidget("spPermsSelector", PermissionUI, "0.1.0");

	if (window["ExecuteOrDelayUntilScriptLoaded"]) {
		ExecuteOrDelayUntilScriptLoaded(function () {
			widgetInfo.startup();
		}, "sp.js");
		SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });
	}
	else widgetInfo.startup();

})(spexplorerjs, $);