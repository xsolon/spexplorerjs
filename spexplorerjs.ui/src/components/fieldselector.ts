// eslint-disable-next-line no-unused-vars
import * as Api from 'spexplorerts';
//var app: Api.Ispexplorerjs = window['spexplorerts'];
var $ = require('jquery');//app.modules.jQuery;
import 'select2/dist/css/select2.css';
import * as tmp from './fieldselector.html';
import * as tmp1 from '../templates/ui.colselect.html';

// @ts-ignore
var w: Api.IWindow = window;
var ns: Api.Ispexplorerjs = w.spexplorerts;
require('select2');
var trace: Api.Logger = new ns.modules.logger('logger');
trace.shouldDebug = true;
var utils = ns.modules.funcs;
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
    // var ns: Api.Ispexplorerjs = window['spexplorerjs'];

    if (opts && opts.target) {
      me.setTarget(opts.target);
    }
    me.fieldSel = $('.fieldsDrp', this.ui).on('change', function () {
      var field = me.fieldSel.find(':selected').prop('data-field');
      if (field) {
        // var xml = field.get_schemaXml();
        trace.log({ field: field });
      }
    });
  }
  private bindSelect(fields: SP.Field[]): void {
    var me = this;
    var fieldSel = me.fieldSel;
    fieldSel.html('');

    fields.sort((x, y) => {
      var xT = x.get_title();
      var xY = y.get_title();
      if (xT < xY) return -1;
      if (xT > xY) return 1;
      return 0;
    });

    fields.forEach((field) => {
      var opt = $(`<option value="${field.get_title()}">${field.get_internalName().toString()}|${field.get_title()}</option>`);
      opt.prop('data-field', field);

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
</ul>`;
      return tmpl;
    };
    // @ts-ignore
    fieldSel.select2({
      templateResult: function formatState(state) {

        if (!state.id) { return state.text; }

        var field = $(state.element).prop('data-field');

        var $state = $(fieldLabel(field));

        return $state;
      }, templateSelection: function template(data/*, container*/) {

        return $(data.element).prop('data-field').get_title();
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

abstract class SpSelector<T> {
  target: SP.List | SP.Web;
  col: SP.ClientObjectCollection<T>;
  ui: JQuery<HTMLElement>;
  ctx: SP.ClientRuntimeContext;
  fieldSel: JQuery<HTMLElement>;
  constructor(el: any, opts?: { [key: string]: any, target?: SP.List | SP.Web }) {
    var me = this;
    var ui = $(el);
    ui.html(tmp1);
    me.ui = ui;

    if (opts && opts.target) {
      me.setTarget(opts.target);
    }
    me.fieldSel = $('.fieldsDrp', this.ui).on('change', function () {
      var item = me.fieldSel.find(':selected').prop('data-field');
      if (item) {
        me.target = item;
        trace.log({ item: item });
      }
    });
  }
  protected abstract bindSelect(items: T[]): void;
  protected loadCollection(): void {
    var me = this;
    var ctx = me.ctx;
    utils.loadSpElem([me.col], ctx).done(() => {
      var arr = utils.collectionToArray<T>(me.col);
      this.bindSelect(arr);
    });
  }
  setTarget(target: SP.List | SP.Web): void {
    this.target = target;
    this.ctx = target.get_context();
    this.loadCollection();
  }
  getTarget(): SP.List | SP.Web {
    return this.target;
  }
}

export class ListSelector extends SpSelector<SP.List> {
  constructor(el: any, opts?: { [key: string]: any, target?: SP.List | SP.Web }) {
    trace.log('ListSelector.init');
    super(el, opts);
  }
  bindSelect(fields: SP.List[]): void {
    var me = this;
    var fieldSel = me.fieldSel;
    fieldSel.html('');

    fields.sort((x, y) => {
      var xT = x.get_title();
      var xY = y.get_title();
      if (xT < xY) return -1;
      if (xT > xY) return 1;
      return 0;
    });

    var targetId = me.target.get_id().toString();
    fields.forEach((field) => {
      var opt = $(`<option value="${field.get_title()}">${field.get_title()}</option>`);
      opt.prop('data-field', field);
      if (targetId == field.get_id().toString()) {
        opt.attr('selected', 'selected');
      }
      fieldSel.append(opt);
    });

    var fieldLabel = function (item: SP.List) {
      var tmpl = `<b>${item.get_title()}</b>
<ul class='xfieldInfo'>
    <li>Url: ${item.get_defaultViewUrl()}</li>
    <li>Id: ${item.get_id().toString()}</li>
</ul>`;
      return tmpl;
    };
    // @ts-ignore
    fieldSel.select2({
      text: 'Select a list',
      templateResult: function formatState(state) {

        if (!state.id) { return state.text; }
        var field = $(state.element).prop('data-field');
        var $state = $(fieldLabel(field));
        return $state;
      }, templateSelection: function template(data/*, container*/) {
        return $(data.element).prop('data-field').get_title();
      }
    });
  }
  setTarget(target: SP.List | SP.Web): void {
    var match = false;
    //@ts-ignore
    if (SP.Web.isInstanceOfType(target)) {
      var web: SP.Web = target as SP.Web;
      this.col = web.get_lists();
      match = true;
      //@ts-ignore
    } else if (SP.List.isInstanceOfType(target)) {
      this.col = (target.get_parentWeb() as SP.Web).get_lists();
      match = true;
    }
    if (match) {
      target.get_context().load(this.col, 'Include(Title,DefaultViewUrl,Id)');
      super.setTarget(target);
    }
  }
}