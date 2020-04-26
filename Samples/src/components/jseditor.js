"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
/// <reference path='../../node_modules/@types/codemirror/index.d.ts' />
var tmp = require("./jseditor.template.html");
//import *  from 'codemirror';
var jshint_js_1 = require("jshint/dist/jshint.js");
window['JSHINT'] = jshint_js_1.JSHINT;
var beautify_js_1 = require("js-beautify/js/lib/beautify.js");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/neat.css");
// @ts-ignore
var CodeMirror = require("codemirror");
// <!-- mode -->
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");
//import "codemirror/mode/htmlmixed/htmlmixed.js";
//import "codemirror/mode/css/css.js";
require("codemirror/addon/lint/lint.css");
require("codemirror/addon/fold/foldgutter.css");
require("codemirror/addon/lint/lint.js");
require("codemirror/addon/lint/javascript-lint.js");
//<!-- fold-->
require("codemirror/addon/fold/brace-fold.js");
require("codemirror/addon/fold/comment-fold.js");
require("codemirror/addon/fold/foldcode.js");
require("codemirror/addon/fold/foldgutter.js");
require("codemirror/addon/fold/indent-fold.js");
require("codemirror/addon/fold/markdown-fold.js");
require("codemirror/addon/fold/xml-fold.js");
require("codemirror/addon/fold/foldgutter.css");
//< !--end fold-- >
//import 'codemirror/addon/display/fullscreen.css';
//import 'codemirror/addon/display/fullscreen.js';
var Api = require("spexplorerts");
var format = require('xml-formatter');
var CodeMirrorHelper = /** @class */ (function () {
    function CodeMirrorHelper() {
        this.trace = new Api.Logger("CodeMirrorHelper");
    }
    CodeMirrorHelper.prototype.createEditor = function (divId, config, title) {
        var section = divId; // document.getElementById(divId) as HTMLDivElement;
        if (!section) {
            this.trace.error("element with id " + divId + " not found");
        }
        var temp = tmp.trim();
        if (title) {
            temp = temp.replace(/Sample/ig, title);
        }
        section.innerHTML = temp;
        var elem = section.getElementsByTagName('textarea')[0];
        var editor = CodeMirror.fromTextArea(elem, config);
        $(elem).data('cm', editor);
        return editor;
    };
    CodeMirrorHelper.prototype.createXmlEditor = function (divId, title) {
        this.trace.debug("Creating xml editor in " + divId);
        var config = {
            tabSize: 3,
            lineNumbers: true,
            mode: 'xml',
        };
        var editor = this.createEditor(divId, config, title);
        editor.setOption("extraKeys", {
            "Ctrl-Q": function (cm) {
                //@ts-ignore
                cm.foldCode(cm.getCursor());
            },
            "Alt-F": function (cm) {
                var val = format(cm.getValue());
                cm.setValue(val);
            },
        });
        return editor;
    };
    CodeMirrorHelper.prototype.createJsEditor = function (divId, title) {
        this.trace.debug("Creating js editor in " + divId);
        var config = {
            mode: "javascript",
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ["CodeMirror-lint-markers",
                "CodeMirror-linenumbers",
                "CodeMirror-foldgutter"],
            lint: true
        };
        var editor = this.createEditor(divId, config, title);
        var elem = editor.getTextArea();
        editor.setOption("extraKeys", {
            "Ctrl-Q": function (cm) {
                //@ts-ignore
                cm.foldCode(cm.getCursor());
            },
            "Alt-R": function ( /*cm*/) {
                $(elem).trigger("run");
            },
            "Alt-F": function (cm) {
                cm.setValue(beautify_js_1.js_beautify(cm.getValue()));
            },
            "Enter": function ( /*e*/) {
                editor.replaceSelection("\n", "end");
            }
        });
        return editor;
    };
    return CodeMirrorHelper;
}());
exports.CodeMirrorHelper = CodeMirrorHelper;
;
//# sourceMappingURL=jseditor.js.map