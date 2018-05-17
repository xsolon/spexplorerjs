/// <reference path="collectionviewer.js" />
/// <reference path="../../../typings/sharepoint/index.d.ts" />
import template from "./querybuilder.template.html";

import "../../widget.base.js";
import "../../mirrors/xmlmirror.js";
import "./ui.fields.js";
import "./collectionviewer.js";

(function (ns, $, template) {

	var name = "querybuilder";
	var debugging = window.location.href.search(/(local|querybuilder)/) > 0;
	var trace = ns.modules.logger.get(name, debugging);

	var qBuild = function (el, opts) {// constructor
		trace.log("init");

		var $el = $(el);
		opts = $.extend({
			showListSelector: $el.attr("data-showlist") || true
		}, opts);

		$el.html(template);

		var selectedFields;
		var colviewer = ns.widgets.colviewer.startup($el).data("xwidget");
		var camlWidget = ns.widgets.xxmlmirror.startup($el).data("xwidget");
		var fieldSelector = ns.widgets.uifield.startup($el).on("fieldselectionchange", function (e, s) {
			selectedFields = s;
			updateCaml();
		}).data("xwidget");

		var getQuery = function () {
			var query = ns.modules.listapi.getQuery(camlWidget.getXml(), folderCtrl.val().trim());

			return query;
		};
		var updateCaml = function () {
			var viewFields = "";
			if (selectedFields && selectedFields.length > 0) {
				viewFields = "<ViewFields>";
				selectedFields.forEach(function (n) {
					viewFields += `<FieldRef Name='${n.get_internalName()}'/>`;
				});
				viewFields += "</ViewFields>";
			}

			var rowLimit = `<RowLimit>${itemLimitCtrl.val() || 1000}</RowLimit>`;

			var scope = scopeCtrl.val();
			if (scope == SP.ViewScope.defaultValue) {
				scope = "DefaultValue";
			} else if (scope == SP.ViewScope.recursive) {
				scope = "Recursive";
			} else if (scope == SP.ViewScope.recursiveAll) {
				scope = "RecursiveAll";
			} else if (scope == SP.ViewScope.filesOnly) {
				scope = "FilesOnly";
			}

			var caml = `<View Scope='${scope}'>${viewFields}<Query><Where></Where></Query>${rowLimit}</View>`;

			camlWidget.setXml(caml);

		};
		var itemLimitCtrl = $("#ItemLimit", $el).on("change", updateCaml);
		var scopeCtrl = $("#QueryScope", $el).on("change", updateCaml);
		var folderCtrl = $("#Folder", $el);//.on("change", updateQuery);

		$("#btnQuery", $el).click(function () {
			me.getItems().done(function (items) {
				trace.log(items);

				var spitems = [];
				items.forEach(function (n) {
					spitems.push(n.get_fieldValues());
				});

				var dtopts = {
					destroy: true,
					select: true,
					data: spitems,
					columns: [
						//{ title: "Name", bSearchable: true, mData: 'name' },
						//{ title: "Position", bSearchable: true, mData: 'title' },
						//{ title: "Office", mData: 'office' },
						//{
						//    title: "Extn.",
						//    mData: "age"
						//},
						//{ title: "Salary", mData: 'salary' }
					]
				};

				
				selectedFields.forEach(function (n) {
					var title = n.get_title();
					var internalName = n.get_internalName();

					var colInfo = { title: title, bSearchable: true, mData: internalName };

					if (SP.FieldUser.isInstanceOfType(n) || SP.FieldLookup.isInstanceOfType(n)) {
						colInfo.render = function (data, type, full) {
							if (data) {
								return (data.get_lookupValue && data.get_lookupValue()) || data;
							} else {
								return "";
							}
						};
					}
					else if (SP.FieldDateTime.isInstanceOfType(n)) {
						colInfo.sType = "date";
						colInfo.render = function (data, type, full) {
							if (data) {
								var dtStart = data; // new Date(data);
								var dtStartWrapper = ns.modules.moment(dtStart);
								return dtStartWrapper.format("MM/DD/YYYY");
							} else {
								return "";
							}
						};

					}

					dtopts.columns.push(colInfo);
				});
				colviewer.render(dtopts);
			});
		});

		if (!opts.showListSelector) {
			$(".listSelector", $el).hide();
		}

		ns.widgets.xSPTreeLight.startup($(".listSelector",$el)).on("listchange", function (e, list) {
			me.setList(list);
		});

		var me = {};
		var list = null;
		me.getItems = function () {
			return ns.modules.listapi.runAllQuery(getQuery(), list);
		};
		me.get = function () {
			return getQuery();
		};
		me.setList = function (splist) {
			list = splist;
			fieldSelector.bindToList(list).done(function() {
        var view = splist.get_defaultView();
			  var fields = view.get_viewFields();
			  spexplorerjs.modules.spapi.loadSpElem([view,fields], view.get_context()).done(function() {
          fields = spexplorerjs.modules.spapi.collectionToArray(fields);
			    debugger;
			    fieldSelector.set(fields);
			  });       
			});
		};

		return me;
	};

	ns.widgets.addSpWidget(name, qBuild, "0.0.2");

})(spexplorerjs, spexplorerjs.modules.jQuery, template);