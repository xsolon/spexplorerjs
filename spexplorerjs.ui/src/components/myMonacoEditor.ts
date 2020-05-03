/// <reference types='jquery' />
import * as monaco from 'monaco-editor';
import * as tmp from './defs/spexplorerts.d.html';
import * as legacy from './defs/legacy.d.html';
import * as misc from './defs/misc.d.html';
import * as jqueryDef from './defs/JQuery.d.html';
import * as jqueryStaticDef from './defs/jqueryStatic.d.html';
import * as sp from './defs/sp.d.html';

//https://github.com/microsoft/monaco-typescript/pull/8

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (/*moduleId: string, label: string*/) {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/'
        };
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.js');`
        )}`;
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

export class MyMonacoEditor {
    constructor(elemorId: string | HTMLElement, type: string, value: string) {

        var elem: HTMLElement;
        if (typeof elemorId === 'string')
            elem = document.getElementById(elemorId);
        else elem = elemorId;

        var model = monaco.editor.createModel(value, type, monaco.Uri.parse('file:///main.tsx'));

        this.editor = monaco.editor.create(elem, { model: model });
        monaco.languages.typescript.getTypeScriptWorker().then((worker) => {
            worker(model.uri).then((client) => {
                this.tsproxy = client;
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
                // chord
                //monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_M)
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
                $(elem).trigger('run', ed.getValue());
                return null;
            }
        });
    }
    tsproxy: any;
    editor: monaco.editor.IStandaloneCodeEditor;
    setValue(val: string) {
        this.editor.setValue(val);
    }
    getValue(): JQuery.Promise<string> {
        this.tsproxy.getEmitOutput('file:///main.tsx').then((r: any) => {
            p1.resolve(r.outputFiles[0].text);
        });

        //return this.editor.getValue();
        var p1 = $.Deferred();
        return p1.promise();
    }
}