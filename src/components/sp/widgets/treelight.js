/// <reference path="../../logger/logger.js" />
/// <reference path="../../../typings/sharepoint/index.d.ts" />
/// <reference path="../../widget.base.js" />
/* global require */

// v 0.1.6: 2018-05-01  -   Use jquery from modules, upgrade to use modules
//                          close drop down on item selection
// v 0.1.5: 2018-04-02  -   Use addSpWidget, use 'trace'
//                          Probe before loading jstree,bootstrap
// v 0.1.4: 2018-03-28  - Used widget registration, use local images for list/web collection nodes
//                      - Selectable option
//                      - loadTree uses processAsQueue

//import "../../../public/vendor/bootstrap/js/bootstrap.js";
//import "../../../public/vendor/bootstrap/css/spexpjs.css";
//import "../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js";
//import "../../../public/vendor/bootstrap/3.3.7/css/spexp.css";
import "../../widget.base.js";
import "../api/sp.base.js";
import template from "./treelight.template.html";

(function (ns, $, template) {
	var debugging = window.location.href.search(/(local|debugtreelight)/) > 0;
	var trace = ns.modules.logger.get("treelight", debugging);

	(function loadPublicRefs() {
		if ($.fn.carousel) {
			trace.debug("bootstrap already loaded");
		} else {
			trace.log("loading bootstrap");
			require("../../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js");
			require("../../../../public/vendor/bootstrap/3.3.7/css/spexp.min.css");
		}

		if ($.fn.jstree) {
			trace.debug("jstree already loaded");
		} else {
			trace.log("loading jstree");
			require("../../../../node_modules/jstree/dist/jstree.js");
			require("../../../../node_modules/jstree/dist/themes/default/style.min.css");
		}
	})();

	var xSpTreeLight = function (ui, opts) {

		var $el = $(ui).html(template.trim());
		var selectedSpElement = null;
		var ctx = SP.ClientContext.get_current();

		opts = $.extend({
			selectable: $el.attr("data-selectable") || "SP.List|SP.Web",
			load: $el.attr("data-load") || "All"
		}, opts);

		opts.selectable = ns.modules.funcs.enumeration(opts.selectable.split("|"));

		var selectionChanged = function (spElem) {
			selectedSpElement = spElem;

			var selectionName = (spElem.get_title) ? spElem.get_title() : spElem.constructor.getName();

			$(".sptreelabel", $el).html(selectionName);

			var eventName = spElem.constructor.getName() + ".change";
			trace.log(eventName);
			$el.trigger("selectionchange", [spElem]);

			// backwards support
			$el.trigger("listchange", [spElem]);

			$(".dropdown.open .dropdown-toggle", $el).dropdown("toggle");
			$(".dropdown-menu:first").hide(); // manually hide drop down :(
		};

		var tree = (function (treeElem) {
			var loadGroups = function (node, cb) {
				var web = tree.get_node(node.parent).data;
				var gs = web.get_siteGroups();
				ctx.load(gs);
				var groups = [];
				ctx.executeQueryAsync(function () {
					var enumer = gs.getEnumerator();
					while (enumer.moveNext()) {
						var g = enumer.get_current();
						groups.push({ text: g.get_title(), id: g.get_id() + "_Group", data: g, icon: "http://icons.iconarchive.com/icons/apathae/wren/16/Group-icon.png" });
					}
					cb(groups);
				});

			};
			var loadSiteUsers = function (node, cb) {
				var web = tree.get_node(node.parent).data;

				var groups = [];
				if (web.get_siteUsers) {

					var gs = web.get_siteUsers();
					ctx.load(gs);
					ctx.executeQueryAsync(function () {
						var enumer = gs.getEnumerator();
						while (enumer.moveNext()) {
							var g = enumer.get_current();
							groups.push({ text: g.get_title(), id: g.get_id() + "_User", data: g, icon: "/_layouts/images/ribbon_userprofile_16.png" });
						}
						cb(groups);
					});
				}
				else {
					ctx.executeQueryAsync();
					var l = web.get_siteUserInfoList();
					var lis = l.getItems(SP.CamlQuery.createAllItemsQuery());
					ctx.load(lis);
					ctx.executeQueryAsync(function () {

						var enumer = lis.getEnumerator();
						//var count = 0;
						var doNext = function () {

							if (!enumer.moveNext()) {
								cb(groups);
								return;
							}
							var li = enumer.get_current();
							var name = li.get_item("Name");
							if (name.search(" ") > 0) {
								doNext();
							}
							else {
								var id = li.get_item("ID");
								var user = web.ensureUser(name);
								ctx.load(user);
								groups.push({ text: name, id: id + "_User", data: user, icon: "/_layouts/images/ribbon_userprofile_16.png" });
								//count++;
								//if (count % 50 == 0)
								ctx.executeQueryAsync(function () {
									doNext();
								}, function () {
									doNext();
								});

							}
						};

						doNext();
					});
				}

			};
			var loadFieldLinks = function (node, cb) {
				var fields = node.data;
				ctx.load(fields);
				ctx.executeQueryAsync(function () {
					var enumer = fields.getEnumerator();
					var spFields = [];
					while (enumer.moveNext()) {
						var g = enumer.get_current();
						spFields.push({ text: g.get_name() + " - " + g.get_id(), id: "FieldLink|" + g.get_id().toString(), data: g, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-text-field-icon.png" });
					}
					spFields.sort(function (a, b) {
						if (a.text < b.text) return -1;
						if (a.text > b.text) return 1;
						return 0;
					});

					cb(spFields);
				});
			};
			var loadFields = function (node, cb) {
				var fields = node.data;
				ctx.load(fields);
				ctx.executeQueryAsync(function () {
					var enumer = fields.getEnumerator();
					var spFields = [];
					while (enumer.moveNext()) {
						var g = enumer.get_current();
						spFields.push({ text: g.get_title() + " - " + g.get_staticName(), id: g.get_id().toString(), data: g, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-text-field-icon.png" });
					}
					spFields.sort(function (a, b) {
						if (a.text < b.text) return -1;
						if (a.text > b.text) return 1;
						return 0;
					});
					trace.log({ fields: spFields });
					cb(spFields);
				});
			};
			var loadCTypes = function (node, cb) {
				var cTypes = node.data;
				ctx.load(cTypes);
				ctx.executeQueryAsync(function () {
					var enumer = cTypes.getEnumerator();
					var spCTypes = [];
					while (enumer.moveNext()) {
						var g = enumer.get_current();
						spCTypes.push({ text: g.get_name(), children: true, id: g.get_id().toString(), data: g, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/application-block-icon.png" });
					}
					cb(spCTypes);
				});

			};
			var loadCType = function (node, cb) {
				var list = node.data;
				var items = [];
				items.push({ text: "Field Links", id: list.get_id() + "_FieldLinks", data: list.get_fieldLinks(), children: true, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/application-icon-large-icon.png" });
				items.push({ text: "Fields", id: list.get_id() + "_Fields", data: list.get_fields(), children: true, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-menu-icon.png" });

				cb(items);
			};
			var loadList = function (node, cb) {
				var list = node.data;
				trace.log({ list: list });
				var items = [];
				if (list.get_hasUniqueRoleAssignments()) {
					items.push({ text: "Security", id: list.get_id() + "_Security", data: list.get_roleAssignments(), icon: "http://icons.iconarchive.com/icons/kyo-tux/phuzion/16/Misc-Security-icon.png" });
				}

				if (list.get_itemCount() > 0) {
					items.push({ text: "Items", id: list.get_id() + "_Items", data: list.get_defaultViewUrl() });
				}

				//items.push( { text: 'Meta', id: list.get_id() + "_Meta", icon: 'http://icons.iconarchive.com/icons/fatcow/farm-fresh/16/database-table-icon.png' });
				items.push({ text: "Content Types", id: list.get_id() + "_ContentTypes", data: list.get_contentTypes(), children: true, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/application-icon-large-icon.png" });
				items.push({ text: "Fields", id: list.get_id() + "_Fields", data: list.get_fields(), children: true, icon: "http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/ui-menu-icon.png" });

				cb(items);
			};
			var loadLists = function (node, cb) {
				trace.debug("loading lists");
				var parent = node.parent;
				var web = tree.get_node(parent).data;

				var lists = web.get_lists();
				ctx.load(lists, "Include(Id,Title,HasUniqueRoleAssignments,ImageUrl,ItemCount,DefaultViewUrl)");
				ctx.executeQueryAsync(function () {
					trace.log("lists loaded");
					var lenum = lists.getEnumerator();
					var spLists = [];

					while (lenum.moveNext()) {
						var list = lenum.get_current();

						var nodeText = `${list.get_title()} (${list.get_itemCount()})`;
						var node = {
							children: false, text: nodeText,
							id: list.get_id().toString(), data: list, icon: list.get_imageUrl()
						};
						spLists.push(node);

					}
					ns.lists = spLists;
					trace.log({ lists: spLists });
					cb(spLists);
				});
			};

			var jTree = treeElem.jstree({
				"core": {
					"worker": false,
					"check_callback": function (/*operation, node, node_parent, node_position, more*/) {
						return true;
					}, "data": function (node, cb) {
						ns.node = node;
						trace.log({ tree_data_node: node });
						if (node.id === "#")
							cb([]);
						else if (node.text === "Site Groups") {
							loadGroups(node, cb);
						}
						else if (node.text === "Lists") {
							loadLists(node, cb);
						}
						else if (node.text === "Site Users") {
							loadSiteUsers(node, cb);
						}
						else if (SP.List.isInstanceOfType(node.data)) {
							loadList(node, cb);
						}
						else if (SP.ContentType.isInstanceOfType(node.data)) {
							loadCType(node, cb);
						}
						else if (SP.FieldLinkCollection.isInstanceOfType(node.data)) {
							loadFieldLinks(node, cb);
						}
						else if (SP.FieldCollection.isInstanceOfType(node.data)) {
							loadFields(node, cb);
						}
						else if (SP.ContentTypeCollection.isInstanceOfType(node.data)) {
							loadCTypes(node, cb);
						}
						else if (ns.string.endsWith(node.text, "_Group")) {
							//var web = tree.get_node(node.id.split("_")[0]).data.spWeb;
						}
					}
				}
				, "plugins": ["contextmenu"], contextmenu: {
					items: function (/*o, cb*/) {
						return {
							"expand": {
								"label": "Expand tree",
								"action": function (data) {
									var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
									inst.open_all(obj);
								}
							}
							, "collapse": {
								"label": "Collapse tree",
								"action": function (data) {
									var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
									inst.close_all(obj);
								}
							}
						};
					}
				}
			})
				.on("changed.jstree", function (e, data) {
					e.preventDefault();
					e.stopPropagation();
					trace.log({ jstreechanged: data.node.id });
					var spElem = data.node.data;
					if (spElem) {
						var type = spElem.constructor.getName();
						if (opts.selectable[type]) {
							// && SP.List.isInstanceOfType(spElem)) {
							selectionChanged(spElem);
						}
					}
				}).on("open_node.jstree", function (e/*, data*/) {
					e.preventDefault();
					e.stopPropagation();
				}).on("close_node.jstree", function (e/*, data*/) {
					e.preventDefault();
					e.stopPropagation();
				});
			return jTree.data("jstree");
		})($el.find(".tree"));

		var websToProcess = [{ web: ctx.get_web(), parentNode: null }];

		var addWebNode = function (curWeb, parentNode, subs) {
			return $.Deferred(function (dfd) {
				var id = curWeb.get_id().toString();
				trace.debug("creating web node: " + id);

				tree.create_node(parentNode, {
					text: curWeb.get_title(), id: id, data: curWeb, icon: "/_layouts/images/sts_web16.gif"
				}, "last", function () {

					trace.debug("web node created");
					tree.create_node(id, { text: "Lists", children: true, id: id + "_Lists", icon: "/_layouts/15/images/itgen.png?rev=23" });
					tree.create_node(id, { text: "Webs", id: id + "_Webs", icon: "/_layouts/15/images/siteicon_16x16.png" });

					//if (opts.load["SP.ContentType"]) {

					//}

					var nWeb = tree.get_node(id);
					trace.debug(nWeb);

					(function doWebs() {
						var lenum = subs.getEnumerator();
						var parent = tree.get_node(nWeb.id + "_Webs");
						while (lenum.moveNext()) {
							var list = lenum.get_current();
							websToProcess.push({ web: list, parentNode: parent });
						}
						dfd.resolve();
					})();
				});
			}).promise();
		};

		ns.modules.funcs.processAsQueue(websToProcess, function (iterNode) {
			return $.Deferred(function (dfd) {
				var web = iterNode.web;

				ctx.load(web, "Id", "Title", "HasUniqueRoleAssignments", "ServerRelativeUrl");
				var subs = web.getSubwebsForCurrentUser();

				ns.modules.spapi.loadSpElem(subs).done(function () {
					iterNode.subs = subs;
					addWebNode(web, iterNode.parentNode, iterNode.subs).done(function () {
						dfd.resolve();
					});
				});

			}).promise();
		}).done(function () { trace.log("tree loaded"); });

		$(".cc", $el).click(function (event) { // prevent propagation so drop down doesn't close
			trace.debug(".cc.click");
			event.preventDefault();
			event.stopPropagation();
		});

		$("#dropdownMenu1", $el).click(function (/*event*/) { // prevent propagation so drop down doesn't close
			trace.debug("dropdownMenu1.click");

			/// TODO: bug in modal window ???, works fine outside modal
			if ($(".dropdown-menu:visible", $el).length == 0)
				$(".dropdown-menu", $el).show();
			else {
				$(".dropdown-menu", $el).hide();
			}
		});

		return (function () {
			var me = {
				value: function (v) {
					if (arguments.length > 0) {
						selectionChanged(v);
					} else {
						return selectedSpElement;
					}
				}
			};

			$el.data("xSPTreeLight", me);

			return me;

		})();
	};

	ns.widgets.addSpWidget("xSPTreeLight", xSpTreeLight, "0.1.6");

})(spexplorerjs, spexplorerjs.modules.jQuery, template);