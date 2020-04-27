"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myMonacoEditor_1 = require("./components/myMonacoEditor");
var jQuery = require('jquery');
var editor = new myMonacoEditor_1.MyMonacoEditor('mirror', 'javascript', 'function test(){alert("hi");}');
// if (false)
//     editor.setValue(`
//     function what(){
//         alert('hello world');
//     }
//     what();
// `);
jQuery('button').click(function () {
    var code = editor.getValue();
    console.log(code);
});
//# sourceMappingURL=monacoSample.js.map