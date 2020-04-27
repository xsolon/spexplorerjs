/// <reference types='jquery' />
import 'select2/dist/css/select2.css';
import 'spexplorerts/api/def';
import { Ispexplorerjs } from 'spexplorerts/api/def';
import { Logger, funcs } from 'spexplorerts';

require('select2');
var trace: Logger = Logger.get("logger");
trace.shouldDebug = true;
var utils = new funcs();
import * as tmp from './fieldselector.html';


export class FieldSelector {
  target: SP.List | SP.Web;
  col: SP.FieldCollection;
  ui: JQuery<HTMLElement>;
  ctx: SP.ClientRuntimeContext;
  fieldSel: JQuery<HTMLElement>;
  constructor(el: any, opts?: { [key: string]: any, target?: SP.List | SP.Web }) {
    var me = this;
    var ui = $(el);
    ui.html(tmp);
    me.ui = ui;
    trace.log('FieldSelector.init');
    var ns: Ispexplorerjs = window['spexplorerjs']

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
  private bindSelect(fields: SP.Field[]): void {
    var me = this;
    var fieldSel = me.fieldSel
    fieldSel.html("");

    fields.sort((x, y) => {
      var xT = x.get_title();
      var xY = y.get_title();
      if (xT < xY) return -1;
      if (xT > xY) return 1;
      return 0;
    });

    fields.forEach((field) => {
      var opt = $(`<option value="${field.get_title()}">${field.get_internalName().toString()}|${field.get_title()}</option>`);
      opt.prop("data-field", field);

      //if (excludereadonly && field.get_readOnlyField()) {
      //	trace.debug("readonly");
      //}
      //else
      fieldSel.append(opt);
    });

    var fieldLabel = function (field: SP.Field) {
      var tmpl = `<b>${field.get_title()}</b>
<ul class='xfieldInfo'>
    <li>Internal Name: ${field.get_internalName()}</li>
    <li>Static Name: ${field.get_staticName()}</li>
    <li>Id: ${field.get_id().toString()}</li>
    <li>Type: ${field.get_fieldTypeKind().toString()}</li>
</ul>`
      return tmpl;
    };
    // @ts-ignore
    fieldSel.select2({
      templateResult: function formatState(state) {

        if (!state.id) { return state.text; }

        var field = $(state.element).prop("data-field");

        var $state = $(fieldLabel(field));

        return $state;
      }, templateSelection: function template(data/*, container*/) {

        return $(data.element).prop("data-field").get_title();
      }
    });

  }
  private loadCollection(): void {
    var me = this;
    var ctx = me.ctx;
    utils.loadSpElem(me.col, ctx).done(() => {
      var fieldDic = utils.collectionToArray<SP.Field>(me.col);
      this.bindSelect(fieldDic);
    });
  }
  setTarget(target: SP.List | SP.Web): void {
    this.target = target;
    var match = false;
    //@ts-ignore
    if (SP.Web.isInstanceOfType(target)) {
      var web: SP.Web = target as SP.Web;
      this.col = web.get_availableFields();
      match = true;
      //@ts-ignore
    } else if (SP.List.isInstanceOfType(target)) {
      this.col = target.get_fields();
      match = true;
    }
    if (match) {
      this.ctx = target.get_context();
      this.loadCollection();
    }
  }
}
