/// <reference types='jquery' />
/// <reference types='jstree' />
import * as monaco from 'monaco-editor';
import 'jstree/dist/themes/default/style.css';
import 'spexplorerts/api/def';
import * as Api from 'spexplorerts';
import * as tmp from './searchbox.template.html';
// import { CodeMirrorHelper } from './jseditor';
import { MyMonacoEditor } from './myMonacoEditor';
import * as pnp from '@pnp/sp/presets/all';
var $: JQueryStatic = require('jquery');// app.modules.jQuery;
var format = require('xml-formatter');

var trace: Api.Logger = Api.Logger.get('logger');
trace.shouldDebug = true;

export class CodeMirrorEditor {
  private xmlEditor: monaco.editor.IStandaloneCodeEditor;// CodeMirror.EditorFromTextArea;
  private jsonEditor: monaco.editor.IStandaloneCodeEditor;// CodeMirror.EditorFromTextArea;
  private jsEditor: MyMonacoEditor;
  // eslint-disable-next-line no-unused-vars
  constructor(el: any, opts?: { [key: string]: any }) {
    var me = this;
    var ui = $(el);
    trace.log('CodeMirrorEditor.init');
    // var ns: Api.Ispexplorerjs = window['spexplorerjs'];
    // var helper = new CodeMirrorHelper();

    ui.html(tmp);
    // var xmlUi = $('#resultMirror', ui)[0];

    var jsonEditor: monaco.editor.IStandaloneCodeEditor = (() => {
      var modelUri = monaco.Uri.parse('a://b/foo.json'); // a made up unique URI for our model
      var model = monaco.editor.createModel('[]', 'json', modelUri);
      var jsonEditor = monaco.editor.create(document.getElementById('jsonMirror'), { model: model, automaticLayout: true });
      $('#editorJsonTab').click(() => {
        setTimeout(() => {
          jsonEditor.layout();
        }, 200);
      });
      return jsonEditor;
    })();
    this.jsonEditor = jsonEditor;
    this.xmlEditor = (() => {
      var modelUri = monaco.Uri.parse('a://b/foo.xml'); // a made up unique URI for our model
      var model = monaco.editor.createModel('<xml></xml>', 'xml', modelUri);
      var xmlEditor = monaco.editor.create(document.getElementById('xmlMirror'), { model: model, automaticLayout: true });
      xmlEditor.addAction({
        // An unique identifier of the contributed action.
        id: 'myformatIt',
        // A label of the action that will be presented to the user.
        label: 'Xml Format',
        // An optional array of keybindings for the action.
        keybindings: [
          monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F,
          // chord
          // monaco.KeyMod.chord(monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F)
        ],
        // A precondition for this action.
        precondition: null,
        // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        // Method that will be executed when the action is triggered.
        // @param editor The editor instance is passed in as a convinience
        run: function (ed) {
          var xml = ed.getValue();
          xml = format(xml);
          ed.setValue(xml);
          return null;
        }
      });
      $('#editorXmlTab').click(() => {
        setTimeout(() => {
          xmlEditor.layout();
        }, 200);
      });
      return xmlEditor;
    })();
    // var xmlEditor = helper.createXmlEditor(xmlUi);
    // this.xmlEditor = xmlEditor;
    var jsUi = $('#jsMirror', ui)[0];
    // var jsEditor = helper.createJsEditor(jsUi, "Code Editor");
    // jsEditor.setValue('var xml = xmlEditor.getValue();\r\nconsole.log(xml);');
    me.jsEditor = new MyMonacoEditor(jsUi, 'typescript', `
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
      me.jsEditor.getValue().done((code) => {
        runScript(code);
      });
    };

    var elem = jsUi;//jsEditor.getTextArea();
    $(elem).on('run', onRun);

    // $('#editorXmlTab').click(() => {
    //   setTimeout(() => {
    //     xmlEditor.refresh();
    //   }, 200);
    // });

    var runScript = function (code: string) {
      try {
        trace.debug(code);
        var script = `
        var log = console.log, clear = console.clear;
        var exports = {};
                   ${code}
      `;

        var args: string[] = ['xmlEditor', 'jsEditor', 'pnp', 'jsonEditor'];
        //@ts-ignore
        var vals = [me.xmlEditor, me.jsEditor, pnp, jsonEditor];

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
          me.xmlEditor.setValue(res);
          // xmlEditor.setValue(res);
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

  setTarget(target: string) {
    this.jsEditor.setTarget(target);
  }

  Code(code?: string): string {
    return this.jsEditor.Code(code);
  }
  Json(json?: string): string {
    if (json)
      this.jsonEditor.setValue(json);
    return this.jsonEditor.getValue();
  }
  Xml(xml?: string): string {
    if (arguments.length > 0)
      this.xmlEditor.setValue(xml);
    return this.xmlEditor.getValue();
  }
}
