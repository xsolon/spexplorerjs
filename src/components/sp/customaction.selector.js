import template from "./customaction.selector.template.html";
import itemtemplate from "./customaction.selector.itemtemplate.html";
import "../logger/logger.js";
import $ from "jquery";
import "../../../public/vendor/select2/js/select2.full.js";
import "../../../public/vendor/select2/css/select2.css";
import "./customaction.dal.js";
import "./sp.list.js";
import "./treelight.js";

(function (ns, $, template, itemtemplate) {

	var debug = window.location.href.search(/[localhost|debugcustomactionsel]/) > 0;
	var log = new function () {
		var d = function () {
			ns.logger && ns.logger.log.apply(log, arguments);
			if (debug)
				SP.UI.Notify.addNotification(arguments[0]);
		};
		d.source = "list.selector";
		return d;
	};
	//var error = new function () {
	//	var d = function () {
	//		ns.logger && ns.logger.error.apply(log, arguments);
	//		if (debug)
	//			SP.UI.Notify.addNotification(arguments[0]);
	//	};
	//	d.source = "list.selector";
	//	return d;
	//};

	var fieldLabel = function (field) {
		var tmpl = itemtemplate.trim();
		var valu = ns.string.format(tmpl, field.get_title(),
			field.get_name(),
			field.get_description(),
			field.get_id().toString());
		return valu;
	};

	var addOptions = function (ctrl, actions) {
		log("Actions:" + actions.length);
		for (var i = 0; i < actions.length; i++) {
			var ca = actions[i];
			var opt = $(ns.string.format("<option value=\"{1}\">{0}</option>",
				ca.get_title(), ca.get_id().toString()));
			opt.prop("data-field", ca);

			ctrl.append(opt);

		}
	};

	var bindActionSelect = function (sel) {
		var initSelect2 = function (sel) {
			sel.select2({
				templateResult: function formatState(state) {

					if (!state.id) { return state.text; }

					var field = $(state.element).prop("data-field");

					var $state = $(fieldLabel(field));

					return $state;
				}, templateSelection: function template(data/*, container*/) {
					var ca = $(data.element).prop("data-field");
					return ca.get_title();
				}
			});
		};
		initSelect2(sel);
	};

	var xSPCustomActionSelector = function (ui, opts) {
		var $el = $(ui); var container = null;
		//var selectedField = null;
		opts = $.extend({
			label: $el.attr("data-label"),
			weburl: $el.attr("data-siteurl"),
			listtitle: $el.attr("data-list"),
			//excludereadonly: $el.attr('data-excludereadonly')
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

		var spdal = new ns.customactions.dal(opts.weburl);
		var fieldSel = $(".casDrp", ui);
		fieldSel.on("change.select2", function () {
			var data = fieldSel.select2("data");
			var field = null;
			if (data.length > 0) {
				field = $(data[0].element).prop("data-field");
			}
			$el.trigger("selectionchange", field);
		});
		bindActionSelect(fieldSel);
		var onListChange = function (list) {

			return $.Deferred(function (dfd) {

				container = list;
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

				spdal.getActions(list).done(function (actions) {
					fieldSel.html("");
					addOptions(fieldSel, actions);
					fieldSel.val(null).trigger("change.select2");
				}).fail(function (err) {
					log(err);
				}).always(function () { dfd.resolve(); });

			}).promise();

		};

		var listCtrl = $("[data-widget=\"xSPTreeLight\"]", $el).xSPTreeLight().on("listchange", function (e, list) {
			onListChange(list);
		});
		var loadList = function (listTitle) {
			return $.Deferred(function (dfd) {

				log("loading list" + listTitle);

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
				value: function () {
					var field = fieldSel.find(":selected").prop("data-field");
					return field;
				},
				getFields() {

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

							spdal = new ns.listapi.dal(opts.weburl);
						}
						//opts.excludereadonly = instate.excludereadonly;
						readonlycheck.prop("checked", opts.excludereadonly);
						opts = $.extend(opts, instate);
						$("legend:first", $el).html(opts.label);
						loadList(opts.listtitle);

					} else {
						var state = {
							label: $("legend:first", $el).html(),
							list: container,
							listtitle: (container) ? container.get_title() : "",
							weburl: opts.weburl
							, excludereadonly: opts.excludereadonly
						};

						return state;

					}
				}
				, container: function (list) {
					if (list) {
						onListChange(list);
						listCtrl.data("xSPTreeLight").value(list);
						container = list;
					}

					return container;
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

			return me;

		})();
	};

	(function register() {
		var widgetInfo = {
			publicName: "xSPCustomActionSelector",
			constructor: xSPCustomActionSelector,
			version: "0.1.3",
			getSelector: function () {
				var selector = "[data-widget=\"publicName\"]".replace("publicName", widgetInfo.publicName);
				log("selector: " + selector);
				return selector;
			},
			startup: function (context) {
				log(widgetInfo.publicName + ".startup");
				var selector = widgetInfo.getSelector();
				var elems = $(selector, context || document);
				log("Elems: " + elems.length);
				return elems[widgetInfo.publicName]({});
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
					$el.data(widgetInfo.publicName, obj).data("xwidget", obj);
				}
			});

			//if (lastInstance && result.length == 1) return lastInstance;
			return result;
		};
		(ns.widgets = (ns.widgets || {}))[widgetInfo.publicName] = widgetInfo;
		log(widgetInfo.publicName + ".registered");

		var init = function customActionSelectorInit() {
			if (window["ExecuteOrDelayUntilScriptLoaded"]) {
				ExecuteOrDelayUntilScriptLoaded(function () {
					widgetInfo.startup();
				}, "sp.js");
				SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });
			}
			else widgetInfo.startup();
		};

		init();

	})();

})(window["spexplorerjs"] = window["spexplorerjs"] || {}, $, template, itemtemplate);

