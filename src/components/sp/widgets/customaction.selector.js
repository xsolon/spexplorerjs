/* global require */
// v 0.1.5 - 2018/03/28 - change public event from 'selectionchange' to 'ca.selectionchange'
//                      - layout updates
import template from "./customaction.selector.template.html";
import itemtemplate from "./customaction.selector.itemtemplate.html";
import "../../logger/logger.js";
import "./customaction.dal.js";
import "../api/sp.list.js";
import "./treelight.js";

(function (ns, $, template, itemtemplate) {

	var debug = window.location.href.search(/[local|debugcustomactionsel]/) > 0;
	var trace = ns.modules.logger.get("customactionEditor", debug);

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
		var tmpl = itemtemplate.trim();
		var valu = ns.modules.string.format(tmpl, field.get_title(),
			field.get_name(),
			field.get_description(),
			field.get_id().toString());
		return valu;
	};

	var addOptions = function (ctrl, actions) {
		trace.log("Actions:" + actions.length);
		for (var i = 0; i < actions.length; i++) {
			var ca = actions[i];
			var opt = $(ns.modules.string.format("<option value=\"{1}\">{0}</option>",
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
			container: null
			//excludereadonly: $el.attr('data-excludereadonly')
		}, opts);
		try {
			var state = $(".xwidgetstate:first", $el);
			if (state.length > 0) {
				opts = $.extend(opts, JSON.parse(state.html().trim()));
			}
		} catch (e) {
			trace.log(e);
		}

		container = opts.container;

		$el.html(template.trim().replace("[label]", opts.label));

		var spdal = new ns.listapi.dal(opts.weburl);
		//var spdal = new ns.customactions.dal(opts.weburl);
		var fieldSel = $(".casDrp", ui);

		fieldSel.on("change.select2", function () {
			var data = fieldSel.select2("data");
			var field = null;
			if (data.length > 0) {
				field = $(data[0].element).prop("data-field");
			}


			$el.trigger("ca.selectionchange", field);
		});

		bindActionSelect(fieldSel);

		var onListChange = function (selection) {

			return $.Deferred(function (dfd) {
				container = selection;

				opts.listtitle = (selection.get_title) ? selection.get_title() : selection.constructor.getName();

				(function loadWebUrl() {
					if (SP.Site.isInstanceOfType(container)) {
					} else if (SP.Web.isInstanceOfType(container)) {
						var doneWeb = function () {
							opts.weburl = container.get_url();
						};
						if (container.isPropertyAvailable("Url")) doneWeb();
						else ns.modules.spapi.loadSpElem(container).done(doneWeb);
					} else {
						var done = function () {
							opts.weburl = selection.get_parentWebUrl();
						};
						if (selection.isPropertyAvailable("ParentWebUrl")) done(); else
							ns.modules.spapi.loadSpElem(selection).done(done);
					}
				})();

				ns.modules.customactions.getActions(selection).done(function (actions) {
					fieldSel.html("");
					addOptions(fieldSel, actions);
					fieldSel.val(null).trigger("change.select2");
				}).fail(function (err) {
					trace.error(err);
				}).always(function () { dfd.resolve(); });

			}).promise();

		};

		var listCtrl = $("[data-widget='xSPTreeLight']", $el).xSPTreeLight().on("listchange", function (e, list) {
			onListChange(list);
		});

		var setSelection = function (elem) {
			onListChange(elem);
			listCtrl.data("xSPTreeLight").value(elem);
		};

		var loadList = function (listTitle) {
			return $.Deferred(function (dfd) {

				trace.debug("loading list" + listTitle);
				spdal.getList(listTitle).done(function (list) {
					setSelection(list);
				}).always(function () {
					dfd.resolve();
				});

			}).promise();

		};
		if (opts.listtitle) {
			loadList(opts.listtitle).done(function () {
				$el.trigger("xwidget.init");
			});
		} else if (opts.container) {
			setSelection(opts.container);
		} else {
			$el.trigger("xwidget.init");
		}

		return (function register() {
			var me = {
				value: function () {
					var field = fieldSel.find(":selected").prop("data-field");
					return field;
				},
				getOptions() {
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

							spdal = new ns.listapi.dal(opts.weburl);
						}
						//opts.excludereadonly = instate.excludereadonly;
						//readonlycheck.prop("checked", opts.excludereadonly);
						opts = $.extend(opts, instate);
						$("legend:first", $el).html(opts.label);
						loadList(opts.listtitle);

					} else {
						var state = {
							label: $("legend:first", $el).html(),
							list: container,
							listtitle: (container) ? container.get_title() : "",
							weburl: opts.weburl
							//, excludereadonly: opts.excludereadonly
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

	ns.widgets.addSpWidget("xSPCustomActionSelector", xSPCustomActionSelector, "0.1.7");

})(spexplorerjs, spexplorerjs.modules.jQuery, template, itemtemplate);

