/// <reference path="../../typings/sharepoint/index.d.ts" />
/// <reference path="../widget.base.js" />
/// <reference path="sp.list.js" />
import moment from "../../../node_modules/moment/moment.js";
import "./sp.base.js";
import "./sp.web.js";
import "./treelight.js";
import "../mirrors/xmlmirror.js";
import "../widget.base.js";
import "./sp.list.js";

import template from "./spFileReport.html";

(function (ns, $, moment) {

	var trace = ns.logger.get("FileReport", true);

	/**
     * 
     * @param {HtmlElement} ui 
     * @param {any} opts
     */
	const oldReport = function (ui, opts) {
		var selectedObject = null;
		var cancel = false;
		var me = {};

		var archiveDal = new ns.listapi.Dal({
			ListTitle: "OldItems",
			ListTemplate: 100, //SP.ListTemplateType.genericList,
			Fields: [
				{
					markup: "<Field Type=\"Choice\" DisplayName=\"Action\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" Format=\"Dropdown\" FillInChoice=\"FALSE\"><Default>Not Set</Default><CHOICES><CHOICE>Not Set</CHOICE><CHOICE>Keep</CHOICE><CHOICE>Delete</CHOICE><CHOICE>Archive</CHOICE></CHOICES></Field>"
				},
				{
					markup:
            "<Field Type=\"DateTime\" DisplayName=\"LastModified\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Disabled\" />"
				},
				{ markup: "<Field Type=\"UserMulti\" DisplayName=\"POCs\" List=\"UserInfo\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" ShowField=\"ImnName\" UserSelectionMode=\"PeopleOnly\" UserSelectionScope=\"0\" Mult=\"TRUE\" Sortable=\"FALSE\" />" },
				{
					markup:
            "<Field Type=\"URL\" DisplayName=\"Url\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" Format=\"Hyperlink\"/>"
				}
			],
			ContentTypes: [{ Name: "Document Set", FieldLinks: ["LastModified", "POCs","Url"] }
			]
		});

		var archiveList;
		var docSetCtype;
		
		archiveDal.getlist().done(function (alist) {
			archiveDal.ensureCtype("Document Set").done(function (ctype) {
				docSetCtype = ctype;
			});
			archiveList = alist;
		});

		var run = function (root, caml, bigCaml, recursive) {

			return $.Deferred(function (rundfd) {

				var arr = [root];
				var ctx = null;
				var allItems = [];

				var getWebs = function (web) {
					return $.Deferred(function (websdfd) {

						var subs = web.getSubwebsForCurrentUser();

						ns.sp.loadSpElem(subs).done(function () {
							websdfd.resolve(ns.sp.collectionToArray(subs));
						});
					}).promise();

				};
				var getWebLists = function (web) {
					return $.Deferred(function (dfd) {
						var lists = web.get_lists();
						ctx.load(lists);

						ctx.executeQueryAsync(function () {
							lists = ns.sp.collectionToArray(lists);

							// only doc libraries
							lists = jQuery.grep(lists,
								function (n) {
									return n.get_baseTemplate() === 101;
								});

							lists.forEach(function (list) {
								var msg = String.format("---{0} {1} {2}",
									list.get_title(),
									list.get_itemCount());

								trace.debug(msg);
							});
							dfd.resolve(lists);

						});

					}).promise();
				};

				var parseItem = function (item) {
					var n = item.get_fieldValues();
					return {
						author: n.Author,
						editor: n.Editor,
						title: n.Title || n.FileLeafRef,
						modified: n.Modified,
						created: n.Created,
						modifiedby: n.Modified_x0020_By,
						createdby: n.Created_x0020_By,
						url: n.FileRef
					};
				};

				var doList = function (list) {

					var itemCount = list.get_itemCount();
					var msg = `--Processing list: ${list.get_title()} :# ${itemCount}`;
					SP.UI.Notify.addNotification(msg);

					trace.debug(msg);

					var dal = new ns.listapi.Dal(list);

					return $.Deferred(function (listDfd) {
						var onDone = function (items) {
							var temp = [];
							items.forEach(function (item) {
								temp.push(parseItem(item));
							});
							trace.log(`---Added #${items.length} from ${list.get_title()}`);
							listDfd.resolve(temp);

						};
						if (itemCount > 5000) {

							var dateLimit = moment(new Date()).add(-6, "years");
							dal.loadAllFilesFromAllFolders(bigCaml).done(function (items) {
								var filtered = [];
								items.forEach(function (n) {
									var date = moment(n.get_fieldValues().Modified);
									if (date.isBefore(dateLimit)) {
										filtered.push(n);
									}
								});
								onDone(filtered);
							});
						} else {
							dal.getItems(caml).done(onDone);
						}

					}).promise();
				};

				var saveItems = function (list, items) {

					if (items.length === 0) return;

					var site = ctx.get_site();

					ctx.load(site);
					ctx.load(list);
					var rootFolder = list.get_rootFolder();
					ctx.load(rootFolder, ["ServerRelativeUrl"]);

					ctx.executeQueryAsync(function () {

						var listUrl = rootFolder.get_serverRelativeUrl();
						var localListUrl = listUrl.replace(site.get_serverRelativeUrl(), "");

						var archiveRelative = archiveList.get_rootFolder().get_serverRelativeUrl() + localListUrl;

						archiveDal.ensureFolder(archiveRelative).done(function (folder) {

							var folderItem = folder.get_listItemAllFields();

							folderItem.set_item("ContentTypeId", docSetCtype.get_stringId());
							var listModified = list.get_lastItemModifiedDate();
							if (listModified < list.get_lastItemDeletedDate()) listModified = list.get_lastItemDeletedDate();

							folderItem.set_item("LastModified", listModified);
							var folderUrl = folder.get_serverRelativeUrl();
							folderItem.set_item("Url", listUrl);
							folderItem.update();

							archiveDal.loadSpElem(folderItem);

							var archiveItems = [];
							var groups = ns.funcs.groupBySize(items, 100);

							ns.funcs.processAsQueue(groups,
								function (gItems) {

									gItems.forEach(function (n) {

										archiveItems.push({
											LastModified: n.modified,
											POCs: [n.author, n.editor],
											Url: n.url
										});
									});

									return archiveDal.addItems(archiveItems, null, null, folderUrl).done(function () {

									});
								});

						});
					});

				};

				ns.funcs.processAsQueue(arr, function (obj) {
					ctx = ctx || obj.get_context();

					return $.Deferred(function (dfd) {
						if (cancel) {
							arr.length = 0;
							dfd.resolve();
						} else if (SP.List.isInstanceOfType(obj)) { // list
							doList(obj).done(function (items) {
								saveItems(obj, items);
								dfd.resolve();
							});
						} else if (SP.Web.isInstanceOfType(obj)) { // list
							const msg = `Processing web: ${obj.get_title()}`;
							SP.UI.Notify.addNotification(msg);
							trace.log(msg);

							$.when(getWebs(obj), getWebLists(obj)).done(function (webs, lists) {

								if (recursive)
									webs.forEach(function (w) { arr.push(w); });

								lists.forEach(function (n) { arr.push(n); });

								trace.debug(`Web done: ${obj.get_title()}`);
								dfd.resolve();
							});

						} else {
							throw "Type not supported select a web or a list";
						}

					}).promise();
				}).done(function () {
					trace.log("done");
					rundfd.resolve(allItems);
				});

			}).promise();
		};

		(function () {
			var $el = $(ui);

			opts = $.extend({
				recursive: function () {
					return $(".chkRecursive:checked", $el).length === 1;
				}
			}, opts);


			$el.html(template.trim().replace("[label]", ""));

			var btn = $(".btnRunReport", $el);
			var btnCancel = $(".btnCancel", $el).click(function () {
				cancel = true;
			});

			ns.widgets.xSPTreeLight.startup($(".listSelectorFirst", $el)).on("listchange", function (event, list) {
				selectedObject = list;
				btn.prop("disabled", false);
			});

			var xmlSmallWidget = ns.widgets.xxmlmirror.startup($(".smallQuery", $el)).data("xwidget");
			var xmlBigWidget = ns.widgets.xxmlmirror.startup($(".bigQuery", $el)).data("xwidget");

			btn.click(function () {
				cancel = false;

				btn.prop("disabled", true);
				btnCancel.show();
				var smallcaml = xmlSmallWidget.getXml();
				var bigcaml = xmlBigWidget.getXml();

				run(selectedObject, smallcaml, bigcaml, opts.recursive()).done(function (items) {
					btn.prop("disabled", false);
					btnCancel.hide();
					trace.log(items.length);
					//ns.sp.uploadAjax()
				});

				return false;
			});

		})();

		return me;
	};

	ns.widgets.addSpWidget("spFileReport", oldReport, "0.0.1");

})(spexplorerjs, jQuery, moment);