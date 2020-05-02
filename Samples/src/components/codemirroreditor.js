"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
/// <reference types='jstree' />
require("jstree/dist/themes/default/style.css");
require("spexplorerts/api/def");
var spexplorerts_1 = require("spexplorerts");
var tmp = __importStar(require("./searchbox.template.html"));
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
        var xmlEditor = helper.createXmlEditor(xmlUi);
        this.xmlEditor = xmlEditor;
        var jsUi = $('#jsMirror', ui)[0];
        // var jsEditor = helper.createJsEditor(jsUi, "Code Editor");
        // jsEditor.setValue('var xml = xmlEditor.getValue();\r\nconsole.log(xml);');
        var jsEditor = new myMonacoEditor_1.MyMonacoEditor(jsUi, 'typescript', "\nimport * as Api from 'spexplorerjs';\n// @ts-ignore\nvar xml = xmlEditor.getValue();\n\nvar ns: Api.Ispexplorerjs = window['spexplorerjs']\n\nvar logger = new ns.modules.logger('test');\nlogger.log('Starting...');\n\nvar utils = new ns.modules.utils();\n\nvar ctx = SP.ClientContext.get_current();\nvar list = ctx.get_web().get_lists().getByTitle('Site Pages');\n\nctx.load(list, 'SchemaXml');\n\nctx.executeQueryAsync(() => {\n    // @ts-ignore\n    xmlEditor.setValue(list.get_schemaXml());\n    logger.log('Done');\n\n}, (s, e) => {\n    logger.error(e.get_message());\n});\n    ");
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
                trace.debug(code);
                var script = "\n        var log = console.log, clear = console.clear;\n        var exports = {};\n                   " + code + "\n      ";
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