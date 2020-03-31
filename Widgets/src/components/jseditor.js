"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='jquery' />
var tmp = require("./jseditor.template.html");
var CodeMirror = require("codemirror");
var jshint_js_1 = require("jshint/dist/jshint.js");
window['JSHINT'] = jshint_js_1.JSHINT;
var beautify_js_1 = require("js-beautify/js/lib/beautify.js");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/neat.css");
// <!-- mode -->
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/mode/htmlmixed/htmlmixed.js");
require("codemirror/mode/css/css.js");
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
var CodeMirrorHelper = /** @class */ (function () {
    function CodeMirrorHelper() {
        this.trace = new Api.Logger("CodeMirrorHelper");
    }
    CodeMirrorHelper.prototype.createXmlEditor = function (divId) {
        this.trace.debug("Creating xml editor in " + divId);
        var section = document.getElementById(divId);
        if (!section) {
            this.trace.error("element with id " + divId + " not found");
        }
        section.innerHTML = tmp.trim();
        var elem = section.getElementsByTagName('textarea')[0];
        var config = {
            tabSize: 3,
            lineNumbers: true,
            mode: 'xml',
        };
        CodeMirror.fromTextArea(elem, config);
    };
    CodeMirrorHelper.prototype.createJsEditor = function (divId) {
        var section = document.getElementById(divId);
        section.innerHTML = tmp.trim();
        var elem = section.getElementsByTagName('textarea')[0];
        var editor = CodeMirror.fromTextArea(elem, {
            mode: "javascript",
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ["CodeMirror-lint-markers",
                "CodeMirror-linenumbers",
                "CodeMirror-foldgutter"],
            lint: true
        });
        editor.setOption("extraKeys", {
            "Ctrl-Q": function (cm) {
                cm.foldCode(cm.getCursor());
            },
            "Alt-R": function ( /*cm*/) {
                //$(elem).trigger("run");
            },
            "Alt-F": function (cm) {
                cm.setValue(beautify_js_1.js_beautify(cm.getValue()));
            },
            "Enter": function ( /*e*/) {
                editor.replaceSelection("\n", "end");
            }
        });
    };
    return CodeMirrorHelper;
}());
exports.CodeMirrorHelper = CodeMirrorHelper;
;
//# sourceMappingURL=jseditor.js.map