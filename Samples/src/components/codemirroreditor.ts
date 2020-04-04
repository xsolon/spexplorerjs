/// <reference types='jquery' />
/// <reference types='jstree' />
import 'jstree/dist/themes/default/style.css';
import 'spexplorerts/api/def.api';
import { spexplorerjs } from 'spexplorerts/api/def.api';
import { Logger, funcs } from 'spexplorerts';
import * as tmp from './searchbox.template.html';
import { CodeMirrorHelper } from './jseditor';

var trace: Logger = Logger.get("logger");
trace.shouldDebug = true;

export class CodeMirrorEditor {
  private xmlEditor: CodeMirror.EditorFromTextArea;
  constructor(el: any, opts?: { [key: string]: any }) {
    var ui = $(el);
    trace.log('CodeMirrorEditor.init');
    var ns: spexplorerjs = window['spexplorerjs']
    var helper = new CodeMirrorHelper();

    ui.html(tmp);
    var xmlUi = $('#resultMirror', ui)[0];
    var xmlEditor = helper.createXmlEditor(xmlUi, 'Xml Editor');
    this.xmlEditor = xmlEditor;
    var jsUi = $('#jsMirror', ui)[0];
    var jsEditor = helper.createJsEditor(jsUi, "Code Editor");

    jsEditor.setValue('var xml = xmlEditor.getValue();\r\nconsole.log(xml);');

    var onRun = function () {
      var code = jsEditor.getValue();
      runScript(code);
    };

    var elem = jsEditor.getTextArea();
    $(elem).on('run', onRun);

    var runScript = function (code: string) {
      try {
        trace.log(code);
        var script = "var log = console.log, clear = console.clear;\r\n\
                    {0}\r\n".replace("{0}", code);

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
