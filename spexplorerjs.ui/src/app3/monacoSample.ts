// import { CodeMirrorEditor } from '../components/codemirroreditor';
import { TinyLogger } from '../components/tinylogger';
var $ = require('jquery');

import 'bootstrap';
import '../custom.scss';
import { MyMonacoEditor } from '../components/myMonacoEditor';
var trace = new TinyLogger();

class Page1 {
    constructor() {

        trace.log('init 0.1');

    }
    buildUI() {
        trace.log('buildUI');

        var ui = $('#monacoEditor');
        trace.log(ui.length);
        var editor = new MyMonacoEditor(ui[0], 'typescript', 'alert("hi")');

        var runScript = function (code: string) {
            try {
                trace.log(code);
                var script = `
        var log = console.log, clear = console.clear;
        var exports = {};
                   ${code}
      `;

                var args: string[] = ['xmlEditor', 'jsEditor'];

                //@ts-ignore
                var tempFunction = new Function(args, script);
                var res = tempFunction.apply(tempFunction, []);
                if (res) {
                    console.log(res);
                }

            } catch (e) {
                trace.log(e.message);
                throw e;
            }

        };

        ui.on('run', () => {

            editor.getValue().then(code => {
                runScript(code);
            });
        });
    }
}

var driver = new Page1();

driver.buildUI();