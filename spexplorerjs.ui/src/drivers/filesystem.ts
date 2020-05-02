import { MyMonacoEditor } from '../components/myMonacoEditor'
import 'jquery';
import 'spexplorerts';
import { Logger } from 'spexplorerts';
import * as Api from 'spexplorerts';

class FileSystemDriver {
    constructor() {
        console.log('0.0.3');
    }

    buildUI() {
        var jQuery = require('jquery');

        window['Api'] = Api;
        var logger = new Logger('test');
        logger.log('hello world!');
        var editor = new MyMonacoEditor('mirror', 'typescript', 'function test(){alert("hi");}');

        jQuery('button').click(() => {
            editor.getValue().done((code) => {
                console.log(code);

            })
        });
    }
}

new FileSystemDriver().buildUI();