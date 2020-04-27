"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
var monaco = require("monaco-editor");
var sp = require("spexplorerts/bundles/sp.d.html");
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
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2016,
    allowNonTsExtensions: true
});
//monaco.languages.typescript.javascriptDefaults.addExtraLib(tmp, 'ts:filename/spexplorerjs.d.ts');
monaco.languages.typescript.javascriptDefaults.addExtraLib(sp, 'ts:filename/mysp.d.ts');
// extra libraries
monaco.languages.typescript.javascriptDefaults.addExtraLib("declare class Test{\n        static next():string,\n    }", 'ts:filename/test.d.ts');
monaco.languages.typescript.javascriptDefaults.addExtraLib("declare class Test1{\n        static next():string,\n    }", 'inmemory://model/test1.d.ts');
var MyMonacoEditor = /** @class */ (function () {
    function MyMonacoEditor(elemorId, type, value) {
        var elem;
        if (typeof elemorId === 'string')
            elem = document.getElementById(elemorId);
        else
            elem = elemorId;
        var model = monaco.editor.createModel(value, type, monaco.Uri.parse('file:///main.tsx'));
        this.editor = monaco.editor.create(elem, { model: model });
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
        return this.editor.getValue();
    };
    return MyMonacoEditor;
}());
exports.MyMonacoEditor = MyMonacoEditor;
//# sourceMappingURL=myMonacoEditor.js.map