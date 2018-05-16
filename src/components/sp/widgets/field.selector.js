/// <reference path="../../logger/logger.js" />
/// <reference path="../../widget.base.js" />
/* global require */

// v 0.1.7: 2018-05-01 - Update to modules
// v 0.1.5: 2018-04-02 - Probe before loading select2
// v 0.1.4: 2018-03-15 - Added option to hide list selector

//import "../../../public/vendor/select2/js/select2.full.js";
//import "../../../public/vendor/select2/css/select2.css";
//import "../../../public/vendor/bootstrap/js/bootstrap.js";
//import "../../../public/vendor/bootstrap/css/spexpjs.css";
//import "../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js";
//import "../../../public/vendor/bootstrap/3.3.7/css/spexp.css";
import "../../logger/logger.js";
import "../api/sp.base.js";
import "../../mirrors/xmlmirror.js";
import template from "./field.selector.template.html";
import fieldtemplate from "./field.selector.fieldtemplate.html";
import "./treelight.js"; // loads jstree, bootstrap
import "../../widget.base.js";
import "../../mirrors/jsmirror.js";

(function (ns, $) {

	var debugging = window.location.href.search(/(local|debugfieldsel)/) > 0;
	var trace = ns.modules.logger.get("fieldEditor", debugging);

	(function loadPublicRefs() {

		if ($.fn.select2) {
			trace.debug("select2 already loaded");
		} else {
			trace.log("loading select2");
			require("../../../../public/vendor/select2/js/select2.full.js");
			require("../../../../public/vendor/select2/css/select2.css");
		}
	})();

	var fieldLabel = function (field) {
		var tmpl = fieldtemplate.trim();
		var valu = ns.modules.string.format(tmpl, field.get_title(),
			field.get_internalName(),
			field.get_staticName(),
			field.get_id().toString());
		return valu;
	};

	var SPDAL = function (siteUrl) {
		var ctx = (siteUrl) ? new SP.ClientContext(siteUrl) : SP.ClientContext.get_current();
		var web = ctx.get_web();
		var lists = web.get_lists();

		var getFields = function (listName) {

			return $.Deferred(function (dfd) {

				var list = null;
				var iCtx = ctx;
				if (typeof listName == "string") {
					list = lists.getByTitle(listName);
				}
				else {
					list = listName;
					iCtx = list.get_context();
				}
				var fields = list.get_fields();
				iCtx.load(fields);
				iCtx.executeQueryAsync(function () {
					trace.log(list);
					var enumer = fields.getEnumerator();
					var spfields = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						spfields.push(cur);
					}
					spfields.sort(function (x, y) { return x.get_title().localeCompare(y.get_title()); });
					dfd.resolve(spfields);
				}, function onError(sender, args) {
					trace.error(`Request failed ${args.get_message()}\n${args.get_stackTrace()}`);
					dfd.reject(args);
				});

			}).promise();
		};
		var getList = function (listTitle) {
			return $.Deferred(function (dfd) {

				var list = lists.getByTitle(listTitle);
				ns.sp.loadSpElem(list, ctx).done(function (list) {
					dfd.resolve(list);
				});

			}).promise();
		};

		var getLists = function () {
			return $.Deferred(function (dfd) {

				ctx.load(lists, "Include(Title)");
				ctx.executeQueryAsync(function () {
					trace.log(lists);
					var enumer = lists.getEnumerator();
					var splists = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						splists.push(cur.get_title());
					}
					dfd.resolve(splists);
				}, function onError(sender, args) {
					trace.error(`Request failed ${args.get_message()}\n${args.get_stackTrace()}`);
				});

			}).promise();
		};

		return { getFields: getFields, getLists: getLists, getList: getList };
	};
	var bindFieldSelect = function (sel, fields, excludereadonly) {

		for (var i = 0; i < fields.length; i++) {
			var field = fields[i];
			var opt = $(`<option value=\"${field.get_title()}\">${field.get_internalName().toString()}|${field.get_title()}</option>`);
			opt.prop("data-field", field);

			if (excludereadonly && field.get_readOnlyField()) {
				trace.debug("readonly");
			}
			else
				sel.append(opt);
		}

		var initSelect2 = function (sel) {
			sel.select2({
				templateResult: function formatState(state) {

					if (!state.id) { return state.text; }

					var field = $(state.element).prop("data-field");

					var $state = $(fieldLabel(field));

					return $state;
				}, templateSelection: function template(data/*, container*/) {

					return $(data.element).prop("data-field").get_title();
				}
			});

		};
		initSelect2(sel);
	};
	var xSPFieldSelector = function (ui, opts) {
		var $el = $(ui); var fieldContainer = null;// var selectedField = null;

		opts = $.extend({
			label: $el.attr("data-label"),
			weburl: $el.attr("data-siteurl"),
			listtitle: $el.attr("data-list"),
			excludereadonly: $el.attr("data-excludereadonly"),
      showSelector: true,
      fieldLabel: $el.attr('data-fieldlabel') || "Field",
      multipleSelection: false
		}, opts);

		try {
			var state = $(".xwidgetstate:first", $el);
			if (state.length > 0) {
				opts = $.extend(opts, JSON.parse(state.html().trim()));
			}
		} catch (e) {
			trace.error(e);
		}

		$el.html(template.trim().replace("[label]", opts.label));

	  $("[name='FieldLabel']", $el).html(opts.fieldLabel);

		var jsMirror = ns.widgets.xjsmirror.startup($el).data("xwidget");
		var xmlMirror = ns.widgets.xxmlmirror.startup($el).data("xwidget");

		jsMirror.setScript("console.log(field);// field: reference to field");

    var spdal = new SPDAL(opts.weburl);

		var fieldSel = $(".fieldsDrp", ui).on("change", function () {
			var field = fieldSel.find(":selected").prop("data-field");
			if (field) {

				var xml = field.get_schemaXml();
				xmlMirror.setXml(xml);
				jsMirror.setScriptingObject("field", field);
				trace.log({ field: field });
			}
		});

		var onListChange = function (list) {

			return $.Deferred(function (dfd) {

				fieldContainer = list;
				opts.listtitle = list.get_title();
				(function loadWebUrl() {
					var done = function () {
						opts.weburl = list.get_parentWebUrl();
					};
					if (list.isPropertyAvailable("ParentWebUrl")) {
						done();
					} else {
						ns.modules.spapi.loadSpElem(list, list.get_context()).done(done);
					}
				})();

				spdal.getFields(list).done(function (fields) {
					fieldSel.html("");
					bindFieldSelect(fieldSel, fields, opts.excludereadonly);
					fieldSel.val(null).trigger("change.select2");
				}).fail(function (err) {
					trace.error(err);
				}).always(function () { dfd.resolve(); });

			}).promise();

		};

		var readonlycheck = $(".ereadonly", $el);
		readonlycheck.click(function () {
			opts.excludereadonly = $(this).prop("checked");
			onListChange(fieldContainer);
		}).prop("checked", opts.excludereadonly);

		var listCtrl = $("[data-widget=\"xSPTreeLight\"]", $el).xSPTreeLight().on("listchange", function (e, list) {
			onListChange(list);
		});

		if (!opts.showSelector) $(".listSelector", $el).hide(); // hide treelight section

		var loadList = function (listTitle) {
			return $.Deferred(function (dfd) {

				trace.debug(`loading list ${listTitle}`);

				spdal.getList(listTitle).done(function (list) {
					onListChange(list);
					listCtrl.data("xSPTreeLight").value(list);
				}).always(function () {
					dfd.resolve();
				});

			}).promise();

    };

		if (opts.listtitle) {
			loadList(opts.listtitle).done(function () {
				$el.trigger("xwidget.init");
			});
		} else {
			$el.trigger("xwidget.init");
		}

		return (function register() {
			var me = {
				setList: function (list) {
					listCtrl.data("xSPTreeLight").value(list);
				},
				value: function () {
					var field = fieldSel.find(":selected").prop("data-field");
					return field;
				}, getFields() {

					var fields = [];
					fieldSel.find("option").each(function () {
						fields.push($(this).prop("data-field"));
					});

					return fields;

				}, state: function (instate) {
					if (arguments.length > 0) {
						trace.log({ setstate: instate });
						opts.listtitle = instate.listtitle;
						if (opts.weburl != instate.weburl) {

							spdal = new SPDAL(opts.weburl);
						}
						opts.excludereadonly = instate.excludereadonly;
						readonlycheck.prop("checked", opts.excludereadonly);
						opts = $.extend(opts, instate);
						$("legend:first", $el).html(opts.label);
						loadList(opts.listtitle);

					} else {
						var state = {
							label: $("legend:first", $el).html(),
							list: fieldContainer,
							listtitle: (fieldContainer) ? fieldContainer.get_title() : "",
							weburl: opts.weburl
							, excludereadonly: opts.excludereadonly
						};

						return state;

					}
				}
				, fieldcontainer: function () {
					return fieldContainer;
				}, savestate: function () {
					var state = me.state();
					delete state.list; // complex object

					var statectrl = $(".xwidgetstate:first", $el);
					if (statectrl.length === 0) {
						statectrl = $("<div class=\"xwidgetstate\" style=\"display:none\"/>");
					}
					statectrl.html(JSON.stringify(state));
				}
			};

			$el.data("xSPFieldSelector", me).data("xwidget", me);

			return me;

		})();
	};

	ns.widgets.addSpWidget("xSPFieldSelector", xSPFieldSelector, "0.1.7");

})(spexplorerjs, spexplorerjs.modules.jQuery);
