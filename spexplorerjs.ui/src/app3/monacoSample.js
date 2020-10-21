"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { CodeMirrorEditor } from '../components/codemirroreditor';
var tinylogger_1 = require("../components/tinylogger");
var $ = require('jquery');
require("bootstrap");
require("../custom.scss");
var myMonacoEditor_1 = require("../components/myMonacoEditor");
var trace = new tinylogger_1.TinyLogger();
var Page1 = /** @class */ (function () {
    function Page1() {
        trace.log('init 0.1');
        Promise.resolve().then(function () { return __importStar(require('./MyAsyncClass')); }).then((function (d) {
            debugger;
            var dd = d.MyAsyncClass;
        }));
    }
    Page1.prototype.buildUI = function () {
        trace.log('buildUI');
        var ui = $('#monacoEditor');
        trace.log(ui.length);
        var editor = new myMonacoEditor_1.MyMonacoEditor(ui[0], 'typescript', 'alert("hi")');
        var runScript = function (code) {
            try {
                trace.log(code);
                var script = "\n        var log = console.log, clear = console.clear;\n        var exports = {};\n                   " + code + "\n      ";
                var args = ['xmlEditor', 'jsEditor'];
                //@ts-ignore
                var tempFunction = new Function(args, script);
                var res = tempFunction.apply(tempFunction, []);
                if (res) {
                    console.log(res);
                }
            }
            catch (e) {
                trace.log(e.message);
                throw e;
            }
        };
        ui.on('run', function () {
            editor.getValue().then(function (code) {
                runScript(code);
            });
        });
    };
    return Page1;
}());
var driver = new Page1();
driver.buildUI();
//# sourceMappingURL=monacoSample.js.map