"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
var monaco = require("monaco-editor");
var tmp = require("spexplorerts/bundles/api.amdbundle.d.html");
var sp = require("../defs/sp.d.html");
//https://github.com/microsoft/monaco-typescript/pull/8
// namespace ts {
//     interface IMonacoTypeScriptServiceProxy {
//         _getModel(uri: string): Promise<{ _eol: string, _lineStarts: any, _Lines: string[], length: number, _uri: monaco.Uri, _versionId: number }>;
//         getCompilationSettings(): Promise<CompilerOptions>;
//         getCompilerOptionsDiagnostics(): Promise<Diagnostic[]>;
//         getCompletionEntryDetails(uri: string, position: number, name: string, formatOptions: FormatCodeOptions | FormatCodeSettings | undefined, source: string | undefined, preferences: UserPreferences | undefined): Promise<CompletionEntryDetails | undefined>;
//         getCompletionsAtPosition(uri: string, position: number, options: GetCompletionsAtPositionOptions | undefined): Promise<WithMetadata<CompletionInfo> | undefined>;
//         getCurrentDirectory(): Promise<string>;
//         getDefaultLibFileName(options: CompilerOptions): Promise<string>;
//         getDefinitionAtPosition(uri: string, position: number): Promise<ReadonlyArray<DefinitionInfo> | undefined>;
//         getEmitOutput(uri: string, emitOnlyDtsFiles?: boolean): Promise<EmitOutput>;
//         getFormattingEditsAfterKeystroke(uri: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): Promise<TextChange[]>;
//         getFormattingEditsForDocument(uri: string, options: FormatCodeOptions | FormatCodeSettings): Promise<TextChange[]>;
//         getFormattingEditsForRange(uri: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): Promise<TextChange[]>;
//         getNavigationBarItems(uri: string): Promise<NavigationBarItem[]>;
//         getOccurrencesAtPosition(uri: string, position: number): Promise<ReadonlyArray<ReferenceEntry> | undefined>;
//         getQuickInfoAtPosition(uri: string, position: number): Promise<QuickInfo | undefined>;
//         getReferencesAtPosition(uri: string, position: number): Promise<ReferenceEntry[] | undefined>;
//         getScriptFileNames(): Promise<string[]>;
//         getScriptKind(uri: string): Promise<ScriptKind>;
//         getScriptSnapshot(uri: string): Promise<IScriptSnapshot | undefined>;
//         getScriptVersion(uri: string): Promise<string>;
//         /** The first time this is called, it will return global diagnostics (no location). */
//         getSemanticDiagnostics(uri: string): Promise<Diagnostic[]>;
//         getSignatureHelpItems(uri: string, position: number, options: SignatureHelpItemsOptions | undefined): Promise<SignatureHelpItems | undefined>;
//         getSyntacticDiagnostics(uri: string): Promise<DiagnosticWithLocation[]>;
//         isDefaultLibFileName(uri: string): Promise<boolean>;
//     }
// }
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
monaco.languages.typescript.typescriptDefaults.addExtraLib(tmp, 'ts:filename/spexplorerjs.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib(sp, 'ts:filename/mysp.d.ts');
// extra libraries
monaco.languages.typescript.typescriptDefaults.addExtraLib("declare class Test{\n        static next():string,\n    }", 'ts:filename/test.d.ts');
monaco.languages.typescript.typescriptDefaults.addExtraLib("declare class Test1{\n        static next():string,\n    }", 'inmemory://model/test1.d.ts');
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