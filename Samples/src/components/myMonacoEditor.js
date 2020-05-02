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
var monaco = __importStar(require("monaco-editor"));
var tmp = __importStar(require("./defs/spexplorerts.d.html"));
var legacy = __importStar(require("./defs/legacy.d.html"));
var misc = __importStar(require("./defs/misc.d.html"));
var jqueryDef = __importStar(require("./defs/JQuery.d.html"));
var jqueryStaticDef = __importStar(require("./defs/jqueryStatic.d.html"));
var sp = __importStar(require("./defs/sp.d.html"));
//https://github.com/microsoft/monaco-typescript/pull/8
// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        return "data:text/javascript;charset=utf-8," + encodeURIComponent("\n        self.MonacoEnvironment = {\n          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/'\n        };\n        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.js');");
    }
};
//validation settings
// monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
//     noSemanticValidation: false,
//     noSyntaxValidation: false
// });
// compiler options
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES5,
    allowNonTsExtensions: true
});
monaco.languages.typescript.typescriptDefaults.addExtraLib(legacy, 'file:///node_modules/@types/jquery/legacy.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(misc, 'file:///node_modules/@types/jquery/misc.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(jqueryStaticDef, 'file:///node_modules/@types/jquery/jQueryStatic.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(jqueryDef, 'file:///node_modules/@types/jquery/jQuery.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(sp, 'ts:filename/mysp.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(tmp, 'file:///node_modules/@types/spexplorerjs.d.ts');
// monaco.languages.typescript.typescriptDefaults.addExtraLib("declare module 'test/file1' { export interface Test {} }", 'file:///node_modules/@types/test/file1.d.ts'); 
//monaco.languages.typescript.typescriptDefaults.addExtraLib( `    `, 'inmemory://model/test7.d.ts');
var MyMonacoEditor = /** @class */ (function () {
    function MyMonacoEditor(elemorId, type, value) {
        var _this = this;
        var elem;
        if (typeof elemorId === 'string')
            elem = document.getElementById(elemorId);
        else
            elem = elemorId;
        var model = monaco.editor.createModel(value, type, monaco.Uri.parse('file:///main.tsx'));
        this.editor = monaco.editor.create(elem, { model: model });
        monaco.languages.typescript.getTypeScriptWorker().then(function (worker) {
            worker(model.uri).then(function (client) {
                _this.tsproxy = client;
            });
        });
        // Explanation:
        // Press F1 (Alt-F1 in Edge) => the action will appear and run if it is enabled
        // Press Ctrl-F10 => the action will run if it is enabled
        // Press Chord Ctrl-K, Ctrl-M => the action will run if it is enabled
        this.editor.addAction({
            id: 'format',
            label: 'Format',
            keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KEY_F,],
            precondition: null,
            keybindingContext: null,
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 1.5,
            run: function (ed) {
                ed.getAction('editor.action.formatDocument').run();
                return null;
            }
        });
        this.editor.addAction({
            // An unique identifier of the contributed action.
            id: 'runIt',
            // A label of the action that will be presented to the user.
            label: 'Run',
            // An optional array of keybindings for the action.
            keybindings: [
                monaco.KeyMod.Alt | monaco.KeyCode.KEY_R,
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
                $(elem).trigger("run", ed.getValue());
                return null;
            }
        });
    }
    MyMonacoEditor.prototype.setValue = function (val) {
        this.editor.setValue(val);
    };
    MyMonacoEditor.prototype.getValue = function () {
        this.tsproxy.getEmitOutput('file:///main.tsx').then(function (r) {
            p1.resolve(r.outputFiles[0].text);
        });
        //return this.editor.getValue();
        var p1 = $.Deferred();
        return p1.promise();
    };
    return MyMonacoEditor;
}());
exports.MyMonacoEditor = MyMonacoEditor;
//# sourceMappingURL=myMonacoEditor.js.map