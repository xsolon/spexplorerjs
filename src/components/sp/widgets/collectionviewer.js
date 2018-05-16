/// <reference path="../../../../public/vendor/datatables/jquery.datatables.js" />
/// <reference path="../../../../public/vendor/moment/moment.js" />
import template from "./collectionviewer.template.html";

import "../../widget.base.js";
import "../../../../public/vendor/datatables/jquery.datatables.js";
import "../../../../public/vendor/datatables/css/jquery.datatables.min.css";
import moment from "../../../../public/vendor/moment/moment.js";

(function(ns, $, template) {

    var name = "colviewer";
    var debugging = window.location.href.search(/(local|colviewer)/) > 0;
    var trace = ns.modules.logger.get(name, debugging);
    trace.debug(name + ".load");

    ns.modules.moment = moment;

    var colViewer = function(el/*, opts*/) {// constructor
        trace.log("init");

        var $el = $(el);
        var dt = null;
        //opts = $.extend({
        //  fields: [],
        //  data: []
        //}, opts);

        $el.html(template);

        var bindTable = function(options) {
            options.destroy = true;
            if (dt) {
                dt.clear();
                dt.destroy();
                $("table", $el).html("");
            }
            dt = $("table", $el).DataTable(options);
        };

        var me = {};
        me.render = function(options) {
            bindTable(options);
            return dt;
        };
        me.getTable = function() {
            return dt;
        };

        return me;
    };

    ns.widgets.addWidget(name, colViewer, "0.0.1");

})(spexplorerjs, spexplorerjs.modules.jQuery, template);