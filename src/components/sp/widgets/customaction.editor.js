// v 0.1.3 - 2018/03/28 - Widget declaration
// v 0.1.2 - 2018/03/24 - Option to preload local list: use attribute data-ListTitle
//                      - Working update of basic custom action fields: Title, Src, Sequence, Rights, Xml
// TODO: Implement all fields
import template from "./customaction.editor.template.html";

import "../../widget.base.js";
import "../api/sp.list.js";
import "./treelight.js";
import "./customaction.selector.js";
import "./ui.perms.js";
import "../../mirrors/xmlmirror.js";

(function (ns, $, template) {

	var debugging = window.location.href.search(/(local|debugcustomactions)/) > 0;
	var trace = ns.modules.logger.get("customactionEditor", debugging);
	trace.debug("customactionEditor.load");

	var CustomActions = function (el, opts) {// constructor
		trace.log("customactionEditor.init");

		var $el = $(el), me = {};
		opts = $.extend({
			showSelector: true,
			listTitle: ($el.attr("data-listTitle") || "").trim()
		}, opts);
		$el.html($(template).html());
		$el.data("spCustomActions", me);

		//var actionSelector = $(".actionSelector", $el);
		var actionSelector = ns.widgets.xSPCustomActionSelector.startup($el, { listtitle: opts.listTitle, container: opts.container || opts.elem });// $(ns.widgets.xSPCustomActionSelector.getSelector(), $el);

		var selectionWidget = actionSelector.data("xwidget");
		var xmlCtrl = ns.widgets.xxmlmirror.startup($el).data(ns.widgets.xxmlmirror.publicName);
		var permissionsCtrl = ns.widgets.spPermsSelector.startup($el).data("xwidget");

		actionSelector.on("ca.selectionchange", function (event, ca) {
			if (ca) {
				$("[data-get").each(function () {
					$(this).val(ca[$(this).attr("data-get")]());
				});
				xmlCtrl.setXml(ca.get_commandUIExtension());
				var rights = ca.get_rights();
				permissionsCtrl.setSpPerms(rights);
			}
		});

		if (!opts.showSelector) $(".listSelector", actionSelector).hide(); // hide treelight section

		$("#btnRemove", $el).click(function () {
			var caSelCtrl = actionSelector.data(ns.widgets.xSPCustomActionSelector.publicName);

			var selectedAction = caSelCtrl.value();

			if (selectedAction != null) {
				SP.UI.Notify.addNotification("Removing custom action");
				selectedAction.deleteObject();
				var ctx = selectedAction.get_context();
				ctx.executeQueryAsync();
			}

		});
		$("#btnAdd", $el).click(function () {
			var caSelCtrl = actionSelector.data(ns.widgets.xSPCustomActionSelector.publicName);

			var xml = xmlCtrl.getXml();

			var listOrWeb = caSelCtrl.container();
			var selectedAction = caSelCtrl.value();
			var location = $("#Location", $el).val();
			var sequence = $("#Sequence", $el).val();
			var title = $("#Title", $el).val();
			var desc = $("#Description", $el).val();
			var permissions = permissionsCtrl.getSpPerms();
			var src = $("#Src", $el).val();

			trace.log({
				caValues: {
					location: location, xml: xml, sequence: sequence, permissions: permissions, title: title
				}
			});

			var saveHandler = function () {
				trace.log("Action udpated");
				SP.UI.Notify.addNotification("Action udpated");
				selectionWidget.container(selectionWidget.container());
			};

			SP.UI.Notify.addNotification("Saving custom action");

			if (selectedAction == null) {
				ns.modules.customactions.addCustomAction(listOrWeb, location, xml, sequence, permissions, title, src).done(saveHandler);
			}
			else {
				selectedAction.set_title(title);
				selectedAction.set_location(location);
				selectedAction.set_sequence(sequence || 0);
				selectedAction.set_rights(permissions);
				selectedAction.set_scriptSrc(src || "");
				selectedAction.set_description(desc);
				(xml && selectedAction.set_commandUIExtension(xml));
				selectedAction.update();

				ns.modules.spapi.loadSpElem(selectedAction).done(saveHandler);
			}

		});

		me.setList = function (list) {
			selectionWidget.container(list);
		};

		return me;
	};

	ns.widgets.addSpWidget("spCustomActions", CustomActions, "0.1.5");
})(spexplorerjs, spexplorerjs.modules.jQuery, template);