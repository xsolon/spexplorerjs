import * as monaco from "monaco-editor";
import * as tmp from 'spexplorerts/bundles/api.amdbundle.d.html';
import * as sp from 'spexplorerts/bundles/sp.d.html';

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/'
        };
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.js');`
        )}`;

        if (label === "json") {
            return "./javascripts/json.worker.js";
        }
        if (label === "css") {
            return "./javascripts/css.worker.js";
        }
        if (label === "html") {
            return "./javascripts/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
            return "./javascripts/ts.worker.js";
        }
        return "./javascripts/editor.worker.js";
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

// monaco.languages.typescript.typescriptDefaults.addExtraLib(tmp, 'ts:filename/spexplorerjs.d.ts');
// monaco.languages.typescript.typescriptDefaults.addExtraLib(sp, 'ts:filename/sharepoint.d.ts');
// monaco.languages.typescript.typescriptDefaults.addExtraLib('export declare module martin {}', 'node_modules/@types/martin.d.ts');
// extra libraries
monaco.languages.typescript.javascriptDefaults.addExtraLib([
	'declare class Facts {',
	'    /**',
	'     * Returns the next fact',
	'     */',
	'    static next():string',
	'}',
].join('\n'), 'ts:filename/facts.d.ts');

export class MyMonacoEditor {
    constructor(elem: string | HTMLElement, type: string, value: string) {

        if (typeof elem === 'string')
            elem = document.getElementById(elem);

        var uri = monaco.Uri.parse('file:///main.tsx');
value = `
"use strict";

class Chuck {
    greet() {
        return Facts.next();
    }
}
`;
        var model = monaco.editor.createModel(value, type, uri);
        this.editor = monaco.editor.create(elem, {
            // model: model
            value: value,
            language: 'javascript'
        });
    }
    editor: monaco.editor.IStandaloneCodeEditor;
    setValue(val: string) {
        this.editor.setValue(val);
    }
    getValue() {
        return this.editor.getValue();
    }
}