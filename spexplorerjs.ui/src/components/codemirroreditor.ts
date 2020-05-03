/// <reference types='jquery' />
/// <reference types='jstree' />
import 'jstree/dist/themes/default/style.css';
import 'spexplorerts/api/def';
import * as Api from 'spexplorerts';
import * as tmp from './searchbox.template.html';
import { CodeMirrorHelper } from './jseditor';
import { MyMonacoEditor } from './myMonacoEditor';

var trace: Api.Logger = Api.Logger.get('logger');
trace.shouldDebug = true;

export class CodeMirrorEditor {
  private xmlEditor: CodeMirror.EditorFromTextArea;
  // eslint-disable-next-line no-unused-vars
  constructor(el: any, opts?: { [key: string]: any }) {
    var ui = $(el);
    trace.log('CodeMirrorEditor.init');
    // var ns: Api.Ispexplorerjs = window['spexplorerjs'];
    var helper = new CodeMirrorHelper();

    ui.html(tmp);
    var xmlUi = $('#resultMirror', ui)[0];
    var xmlEditor = helper.createXmlEditor(xmlUi);
    this.xmlEditor = xmlEditor;
    var jsUi = $('#jsMirror', ui)[0];
    // var jsEditor = helper.createJsEditor(jsUi, "Code Editor");
    // jsEditor.setValue('var xml = xmlEditor.getValue();\r\nconsole.log(xml);');
    var jsEditor = new MyMonacoEditor(jsUi, 'typescript', `
import * as Api from 'spexplorerjs';
// @ts-ignore
var xml = xmlEditor.getValue();

var ns: Api.Ispexplorerjs = window['spexplorerjs']

var logger = new ns.modules.logger('test');
logger.log('Starting...');

var utils = new ns.modules.utils();

var ctx = SP.ClientContext.get_current();
var list = ctx.get_web().get_lists().getByTitle('Site Pages');

ctx.load(list, 'SchemaXml');

ctx.executeQueryAsync(() => {
    // @ts-ignore
    xmlEditor.setValue(list.get_schemaXml());
    logger.log('Done');

}, (s, e) => {
    logger.error(e.get_message());
});
    `);

    var onRun = function () {
      jsEditor.getValue().done((code) => {
        runScript(code);
      });
    };

    var elem = jsUi;//jsEditor.getTextArea();
    $(elem).on('run', onRun);

    $('#editorXmlTab').click(() => {
      setTimeout(() => {
        xmlEditor.refresh();
      }, 200);
    });

    var runScript = function (code: string) {
      try {
        trace.debug(code);
        var script = `
        var log = console.log, clear = console.clear;
        var exports = {};
                   ${code}
      `;

        var args: string[] = ['xmlEditor', 'jsEditor'];
        var vals = [xmlEditor, jsEditor];

        //for (var name in resourceHash) {
        //  if (resourceHash.hasOwnProperty(name)) {
        //    args.push(name);
        //    vals.push(resourceHash[name]);
        //  }
        //}

        //@ts-ignore
        var tempFunction = new Function(args, script);
        var res = tempFunction.apply(tempFunction, vals);
        if (res) {
          console.log(res);
          xmlEditor.setValue(res);
        }

      } catch (e) {
        trace.error(e.message);
        throw e;
      }

    };

    $('#btnRun', ui).click(function (e) {
      e.preventDefault();
      onRun();
      return false;
    });

  }
  setXml(xml: string) {
    this.xmlEditor.setValue(xml);
  }
}
