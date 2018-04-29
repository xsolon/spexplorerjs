/// <reference path="sp.list.js" />
import "./sp.base.js";
import "./sp.list.js";
import template from "./masterpageselector.template.html";
import "./treelight.js"; // loads jstree, bootstrap
import "../widget.base.js";

(function (ns, $) {

  var debugging = window.location.href.search(/(localhost|debugmasterpagesel)/) > 0;
  var trace = ns.logger.get("masterpageSelector", debugging);

  (function loadPublicRefs() {

    if ($.fn.select2) {
      trace.debug("select2 already loaded");
    } else {
      trace.log("loading select2");
      require("../../../public/vendor/select2/js/select2.full.js");
      require("../../../public/vendor/select2/css/select2.css");
    }
  })();

  var getMasterPages = function () {
    var ctx = new SP.ClientContext();
    try {
      ctx = SP.ClientContext.get_current();
    } catch (e) { }
    var site = ctx.get_site();
    var rootWeb = site.get_rootWeb();
    var lists = rootWeb.get_lists();
    var list = lists.getByTitle("Master Page Gallery");

    var caml = "<View Scope='Recursive'>\
        <ViewFields>\
          <FieldRef Name='FileRef'></FieldRef>\
        </ViewFields><RowLimit>100</RowLimit>\
    <Query><Where><Eq>\
      <FieldRef Name='ContentType'/><Value Type='Computed'>Master Page</Value>\
    </Eq></Where></Query>\
      </View>";

    return ns.listapi.getAll(list, ctx, caml);

  };
  var bindSelect = function (sel, items) {

    items.forEach(function (item) {
      var html = `<option value='${item.get_item('FileRef')}'>${item.get_item('FileLeafRef')}</option>`;
      var opt = $(html);

      opt.prop("data-item", item);

      //if (excludereadonly && item.get_readOnlyField()) {
      //	trace.debug("readonly");
      //}
      //else
      sel.append(opt);
    });

    var initSelect2 = function (sel) {
      sel.select2({
        templateResult: function formatState(state) {

          if (!state.id) { return state.text; }

          var item = $(state.element).prop("data-item");

          var $state = $(fieldLabel(item));

          return $state;
        }, templateSelection: function (data/*, container*/) {
          return $(data.element).prop("data-field").get_title();
        }
      });

    };

    initSelect2(sel);
  };

  var xSpMastePageSelector = function (ui, opts) {
    trace.debug("init");
    var $el = $(ui);

    opts = $.extend({
      label: $el.attr("data-label") || "MasterPage",
      showSelector: true
    }, opts);

    $el.html(template.trim().replace("[label]", opts.label));
    var ctrl = $(".xDrp", ui).on("change", function () {
      var field = ctrl.find(":selected").prop("data-field");
      if (field) {
        trace.log({ field: field });
      }
    });

    getMasterPages().done(function (items) {
      trace.debug(items);
      bindSelect(ctrl, items, false);
    });

    var me = {};
    return me;

  };

  ns.widgets.addSpWidget("xSpMastePageSelector", xSpMastePageSelector, "0.0.1");

})(spexplorerjs, jQuery);