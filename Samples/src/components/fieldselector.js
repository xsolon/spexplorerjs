"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
require("select2/dist/css/select2.css");
require("spexplorerts/api/def.api");
var spexplorerts_1 = require("spexplorerts");
require('select2');
var trace = spexplorerts_1.Logger.get("logger");
trace.shouldDebug = true;
var utils = new spexplorerts_1.funcs();
var tmp = require("./fieldselector.html");
var FieldSelector = /** @class */ (function () {
    function FieldSelector(el, opts) {
        var me = this;
        var ui = $(el);
        ui.html(tmp);
        me.ui = ui;
        trace.log('FieldSelector.init');
        var ns = window['spexplorerjs'];
        if (opts && opts.target) {
            me.setTarget(opts.target);
        }
        me.fieldSel = $(".fieldsDrp", this.ui).on("change", function () {
            var field = me.fieldSel.find(":selected").prop("data-field");
            if (field) {
                var xml = field.get_schemaXml();
                trace.log({ field: field });
            }
        });
    }
    FieldSelector.prototype.bindSelect = function (fields) {
        var me = this;
        var fieldSel = me.fieldSel;
        fieldSel.html("");
        fields.sort(function (x, y) {
            var xT = x.get_title();
            var xY = y.get_title();
            if (xT < xY)
                return -1;
            if (xT > xY)
                return 1;
            return 0;
        });
        fields.forEach(function (field) {
            var opt = $("<option value=\"" + field.get_title() + "\">" + field.get_internalName().toString() + "|" + field.get_title() + "</option>");
            opt.prop("data-field", field);
            //if (excludereadonly && field.get_readOnlyField()) {
            //	trace.debug("readonly");
            //}
            //else
            fieldSel.append(opt);
        });
        var fieldLabel = function (field) {
            var tmpl = "<b>" + field.get_title() + "</b>\n<ul class='xfieldInfo'>\n    <li>Internal Name: " + field.get_internalName() + "</li>\n    <li>Static Name: " + field.get_staticName() + "</li>\n    <li>Id: " + field.get_id().toString() + "</li>\n    <li>Type: " + field.get_fieldTypeKind().toString() + "</li>\n</ul>";
            return tmpl;
        };
        // @ts-ignore
        fieldSel.select2({
            templateResult: function formatState(state) {
                if (!state.id) {
                    return state.text;
                }
                var field = $(state.element).prop("data-field");
                var $state = $(fieldLabel(field));
                return $state;
            }, templateSelection: function template(data /*, container*/) {
                return $(data.element).prop("data-field").get_title();
            }
        });
    };
    FieldSelector.prototype.loadCollection = function () {
        var _this = this;
        var me = this;
        var ctx = me.ctx;
        utils.loadSpElem(me.col, ctx).done(function () {
            var fieldDic = utils.collectionToArray(me.col);
            _this.bindSelect(fieldDic);
        });
    };
    FieldSelector.prototype.setTarget = function (target) {
        this.target = target;
        var match = false;
        //@ts-ignore
        if (SP.Web.isInstanceOfType(target)) {
            var web = target;
            this.col = web.get_availableFields();
            match = true;
            //@ts-ignore
        }
        else if (SP.List.isInstanceOfType(target)) {
            this.col = target.get_fields();
            match = true;
        }
        if (match) {
            this.ctx = target.get_context();
            this.loadCollection();
        }
    };
    return FieldSelector;
}());
exports.FieldSelector = FieldSelector;
//# sourceMappingURL=fieldselector.js.map