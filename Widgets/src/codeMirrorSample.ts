
import { CodeMirrorHelper } from './components/jseditor';
import jQuery = require('jquery');

var helper = new CodeMirrorHelper();
helper.createXmlEditor('mirror1');
helper.createJsEditor('mirror2');
