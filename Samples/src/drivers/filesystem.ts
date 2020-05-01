import { MyMonacoEditor } from '../components/myMonacoEditor'

class FileSystemDriver {
    constructor() {

    }

    buildUI() {
        var jQuery = require('jquery');
        var editor = new MyMonacoEditor('mirror', 'typescript', 'function test(){alert("hi");}');

        jQuery('button').click(() => {
            var code = editor.getValue();
            console.log(code);
        });
    }
}

new FileSystemDriver().buildUI();