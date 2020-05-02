import { MyMonacoEditor } from './components/myMonacoEditor'
var jQuery = require('jquery');
var editor = new MyMonacoEditor('mirror', 'javascript', 'function test(){alert("hi");}');

// if (false)
//     editor.setValue(`
//     function what(){
//         alert('hello world');
//     }

//     what();
// `);

jQuery('button').click(() => {
    var code = editor.getValue();
    console.log(code);
});