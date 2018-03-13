import $ from "jquery";
import "../../../public/vendor/select2/js/select2.full.js";
import "../../../public/vendor/select2/css/select2.css";
//import "../../../public/vendor/bootstrap/js/bootstrap.js";
//import "../../../public/vendor/bootstrap/css/spexpjs.css";
//import "../../../public/vendor/bootstrap/3.3.7/js/bootstrap.js";
//import "../../../public/vendor/bootstrap/3.3.7/css/spexp.css";
import "../logger/logger.js";
import "./sp.base.js";
import "../mirrors/xmlmirror.js";
import template from "./field.selector.template.html";
import fieldtemplate from "./field.selector.fieldtemplate.html";
import "./treelight.js";

(function (ns, $) {

	var debug = window.location.href.search(/[localhost|debugfieldsel]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "field.selector";
		return d;
	};

	var fieldLabel = function (field) {
		var tmpl = fieldtemplate.trim();
		var valu = ns.string.format(tmpl, field.get_title(),
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
					log(list);
					var enumer = fields.getEnumerator();
					var spfields = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						spfields.push(cur);
					}
					spfields.sort(function (x, y) { return x.get_title().localeCompare(y.get_title()); });
					dfd.resolve(spfields);
				}, function onError(sender, args) {
					log(`Request failed ${args.get_message()}\n${args.get_stackTrace()}`);
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
					log(lists);
					var enumer = lists.getEnumerator();
					var splists = [];
					while (enumer.moveNext()) {
						var cur = enumer.get_current();
						splists.push(cur.get_title());
					}
					dfd.resolve(splists);
				}, function onError(sender, args) {
					log(`Request failed ${args.get_message()}\n${args.get_stackTrace()}`);
				});

			}).promise();
		};

		return { getFields: getFields, getLists: getLists, getList: getList };
	};
	var bindFieldSelect = function (sel, fields, excludereadonly) {

		for (var i = 0; i < fields.length; i++) {
			var field = fields[i];
			var opt = $(ns.string.format("<option value=\"{1}\">{0}|{1}</option>",
				field.get_internalName().toString(),
				field.get_title()));
			opt.prop("data-field", field);

			if (excludereadonly && field.get_readOnlyField()) {
				log("readonly");
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
			excludereadonly: $el.attr("data-excludereadonly")
		}, opts);

		try {
			var state = $(".xwidgetstate:first", $el);
			if (state.length > 0) {
				opts = $.extend(opts, JSON.parse(state.html().trim()));
			}
		} catch (e) {
			log(e);
		}

		$el.html(template.trim().replace("[label]", opts.label));

		var xmlMirror = ns.widgets.xxmlmirror.startup($el).data("xwidget");

		var spdal = new SPDAL(opts.weburl);
		var fieldSel = $(".fieldsDrp", ui).on("change", function () {
			var field = fieldSel.find(":selected").prop("data-field");
			if (field) {

				var xml = field.get_schemaXml();
				xmlMirror.setXml(xml);
				log({ field: field });
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
						ns.sp.loadSpElem(list, list.get_context()).done(done);
					}
				})();

				spdal.getFields(list).done(function (fields) {
					fieldSel.html("");
					bindFieldSelect(fieldSel, fields, opts.excludereadonly);
					fieldSel.val(null).trigger("change.select2");
				}).fail(function (err) {
					log(err);
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
		var loadList = function (listTitle) {
			return $.Deferred(function (dfd) {

				log(`loading list${listTitle}`);

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
					//onListChange(list);
					listCtrl.data("xSPTreeLight").value(list);
					//container = list;
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
						log({ setstate: instate });
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
					if (statectrl.length == 0) {
						statectrl = $("<div class=\"xwidgetstate\" style=\"display:none\"/>");
					}
					statectrl.html(JSON.stringify(state));
				}
			};

			$el.data("xSPFieldSelector", me).data("xwidget", me);

			return me;

		})();
	};

	var widgetInfo = {
		publicName: "xSPFieldSelector",
		constructor: xSPFieldSelector,
		version: "0.1.3",
		getSelector: function () {
			var selector = "[data-widget=\"publicName\"]".replace("publicName", widgetInfo.publicName);
			log(`selector: ${selector}`);
			return selector;
		},
		startup: function (context) {
			log(widgetInfo.publicName + ".startup");
			var selector = widgetInfo.getSelector();
			var elems = $(selector, context || document);
			log(`Elems: ${elems.length}`);
			elems[widgetInfo.publicName]({});

			return elems;
		}
	};

	$.fn[widgetInfo.publicName] = function (opts) {
		var args = arguments;
		//var lastInstance = null;
		var result = this.each(function () {

			var $el = $(this);

			var me = $el.data(widgetInfo.publicName);

			if (me) { // object has been initialized before

				if (opts == null) { // request for instance
					//lastInstance = me;
				} else
				if (me[opts]) {
					if (typeof me[opts] == "function")
						me[opts].apply(me, Array.prototype.slice.call(args, 1));
					else
						me[opts] = args[1];
				}

			} else {

				var obj = new widgetInfo.constructor(this, opts);
				$el.data(widgetInfo.publicName, obj);
			}
		});

		//if (lastInstance && result.length == 1) return lastInstance;
		return result;
	};

	(ns.widgets = (ns.widgets || {}))[widgetInfo.publicName] = widgetInfo;
	log(widgetInfo.publicName + ".registered");

	ExecuteOrDelayUntilScriptLoaded(widgetInfo.startup, "sp.js");

})(spexplorerjs, $);
