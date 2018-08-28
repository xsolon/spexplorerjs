
import "../../widget.base.js";
import template from "./ui.perms.template.html";

(function (ns, $) {
	var debug = window.location.href.search(/[local|debugcustomactions]/) > 0;
	var trace = ns.modules.logger.get("perms", debug);

	var PermissionUI = function (el/*, opts*/) {// constructor
		var $el = $(el), me = {};
		//opts = $.extend({
		//}, opts);
		$el.html($(template).html());

		var perms = null;
		var select = $("[name=\"Permissions\"]").change(function () {
			var vals = $(this).val();
			trace.log(vals);
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

	ns.widgets.addSpWidget("spPermsSelector", PermissionUI, "0.1.1");

})(spexplorerjs, spexplorerjs.modules.jQuery);