/// <reference types='jquery' />
/// <reference path='../../node_modules/@types/codemirror/index.d.ts' />
import * as tmp from './jseditor.template.html';
//import *  from 'codemirror';
import { JSHINT } from "jshint/dist/jshint.js";
window['JSHINT'] = JSHINT;
import { js_beautify } from "js-beautify/js/lib/beautify.js";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
// @ts-ignore
import * as CodeMirror from 'codemirror';

// <!-- mode -->
import 'codemirror/mode/xml/xml.js';
import "codemirror/mode/javascript/javascript.js";
//import "codemirror/mode/htmlmixed/htmlmixed.js";
//import "codemirror/mode/css/css.js";

import "codemirror/addon/lint/lint.css";
import "codemirror/addon/fold/foldgutter.css";

import "codemirror/addon/lint/lint.js";
import "codemirror/addon/lint/javascript-lint.js";

//<!-- fold-->
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";
import "codemirror/addon/fold/foldgutter.css";
//< !--end fold-- >

//import 'codemirror/addon/display/fullscreen.css';
//import 'codemirror/addon/display/fullscreen.js';
import * as Api from 'spexplorerts';

export class CodeMirrorHelper {
  trace: Api.Logger;
  constructor() {
    this.trace = new Api.Logger("CodeMirrorHelper");
  }
  createEditor(divId: string, config: CodeMirror.EditorConfiguration, title?:string): CodeMirror.EditorFromTextArea {
    var section = document.getElementById(divId) as HTMLDivElement;
    if (!section) {
      this.trace.error(`element with id ${divId} not found`);
    }
    var temp:string = tmp.trim();
    if (title) {
      temp = temp.replace(/Sample/ig, title);
    }
    section.innerHTML = temp;

    var elem: HTMLTextAreaElement = section.getElementsByTagName('textarea')[0] as HTMLTextAreaElement;

    var editor = CodeMirror.fromTextArea(elem, config);

    $(elem).data('cm', editor);

    return editor
  }

  createXmlEditor(divId: string, title?:string): CodeMirror.EditorFromTextArea {

    this.trace.debug(`Creating xml editor in ${divId}`);

    var config: CodeMirror.EditorConfiguration = {
      tabSize: 3,
      lineNumbers: true,
      mode: 'xml',
    };

    return this.createEditor(divId,config, title);
  }
  createJsEditor(divId: string, title?:string): CodeMirror.EditorFromTextArea {

    this.trace.debug(`Creating js editor in ${divId}`);

    var config: CodeMirror.EditorConfiguration = {
        mode: "javascript",
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ["CodeMirror-lint-markers",
          "CodeMirror-linenumbers",
          "CodeMirror-foldgutter"],
        lint: true
    };

    var editor = this.createEditor(divId,config, title);

    var elem = editor.getTextArea();

    editor.setOption("extraKeys", {
      "Ctrl-Q": function (cm) {
        //@ts-ignore
        cm.foldCode(cm.getCursor());
      },
      "Alt-R": function (/*cm*/) {
        $(elem).trigger("run");
      },
      "Alt-F": function (cm) {

        cm.setValue(js_beautify(cm.getValue()));
      },
      "Enter": function (/*e*/) {
        editor.replaceSelection("\n", "end");
      }
    });

    return editor;
  }
};
