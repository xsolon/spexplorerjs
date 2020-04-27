"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
/// <reference types='jstree' />
require("jstree/dist/themes/default/style.css");
require("spexplorerts/api/def");
var spexplorerts_1 = require("spexplorerts");
var tmp = require("./searchbox.template.html");
var jseditor_1 = require("./jseditor");
var myMonacoEditor_1 = require("./myMonacoEditor");
var trace = spexplorerts_1.Logger.get("logger");
trace.shouldDebug = true;
var CodeMirrorEditor = /** @class */ (function () {
    function CodeMirrorEditor(el, opts) {
        var ui = $(el);
        trace.log('CodeMirrorEditor.init');
        var ns = window['spexplorerjs'];
        var helper = new jseditor_1.CodeMirrorHelper();
        ui.html(tmp);
        var xmlUi = $('#resultMirror', ui)[0];
        var xmlEditor = helper.createXmlEditor(xmlUi, 'Xml Editor');
        this.xmlEditor = xmlEditor;
        var jsUi = $('#jsMirror', ui)[0];
        // var jsEditor = helper.createJsEditor(jsUi, "Code Editor");
        var jsEditor = new myMonacoEditor_1.MyMonacoEditor(jsUi, 'typescript', 'var xml = xmlEditor.getValue();\r\nconsole.log(xml);');
        // jsEditor.setValue('var xml = xmlEditor.getValue();\r\nconsole.log(xml);');
        var onRun = function () {
            jsEditor.getValue().done(function (code) {
                runScript(code);
            });
        };
        var elem = jsUi; //jsEditor.getTextArea();
        $(elem).on('run', onRun);
        $('#editorXmlTab').click(function () {
            setTimeout(function () {
                xmlEditor.refresh();
            }, 200);
        });
        var runScript = function (code) {
            try {
                trace.log(code);
                var script = "var log = console.log, clear = console.clear;\r\n\
                    {0}\r\n".replace("{0}", code);
                var args = ['xmlEditor', 'jsEditor'];
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
            }
            catch (e) {
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
    CodeMirrorEditor.prototype.setXml = function (xml) {
        this.xmlEditor.setValue(xml);
    };
    return CodeMirrorEditor;
}());
exports.CodeMirrorEditor = CodeMirrorEditor;
//# sourceMappingURL=codemirroreditor.js.map