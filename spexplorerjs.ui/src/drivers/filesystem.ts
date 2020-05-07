import { CodeMirrorEditor } from '../components/codemirroreditor';
import 'jquery';
import 'spexplorerts';
import { Logger } from 'spexplorerts';
import * as Api from 'spexplorerts';
import 'bootstrap';
import '../custom.scss';

class FileSystemDriver {
    constructor() {
        console.log('0.0.3');
    }

    buildUI() {
        var jQuery = require('jquery');

        window['Api'] = Api;
        var logger = new Logger('test');
        logger.log('hello world!');

        var code = new CodeMirrorEditor('#editor');
        code.setXml('<view />');
        // var editor = new MyMonacoEditor('mirror', 'typescript', 'function test(){alert("hi");}');

        jQuery('button').click(() => {
        });
    }
}

new FileSystemDriver().buildUI();