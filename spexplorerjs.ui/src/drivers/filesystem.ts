import { CodeMirrorEditor } from '../components/codemirroreditor';
import 'jquery';
import 'spexplorerts';
import { Logger } from 'spexplorerts';
import * as Api from 'spexplorerts';
import 'bootstrap';
import '../custom.scss';
import * as monaco from 'monaco-editor';
import * as nativefsdef from '../components/defs/nativefs.d.html';
import * as nativefs from '../components/nativefs';
class FileSystemDriver {
    constructor() {
        console.log('0.0.4');

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2015,
            allowNonTsExtensions: true
        });
        monaco.languages.typescript.typescriptDefaults.addExtraLib(nativefsdef, 'file:///node_modules/@types/nativefs.d.ts');
        //@ts-ignore
        window.nativefsdef = nativefs;
    }

    buildUI() {


        var jQuery = require('jquery');

        window['Api'] = Api;
        var logger = new Logger('test');
        logger.log('hello world!');

        var code = new CodeMirrorEditor('#editor');
        code.setXml('<view />');
        code.setCode(`
        import 'nativefs';
        var nativefs = window['nativefsdef'];
        var d: ChooseFileSystemEntriesOptionsAccepts;
        `);
        // var editor = new MyMonacoEditor('mirror', 'typescript', 'function test(){alert("hi");}');

        jQuery('button').click(() => {
        });
    }
}

new FileSystemDriver().buildUI();