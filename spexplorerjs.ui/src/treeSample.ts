import { TreeLight } from "./components/treelight";
import { CodeMirrorEditor } from "./components/codemirroreditor";
import { FieldSelector } from "./components/fieldselector";
import 'bootstrap';
import './custom.scss'
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as tmp from './ui.template.html';

var $ = require('jquery');
$('#ui').html(tmp);
var tree = new TreeLight('#tree');
var field = new FieldSelector('#field');
tree.on('selectionChange', (spelem: any): void => {
  field.setTarget(spelem);

  // @ts-ignore
  if (SP.View.isInstanceOfType(spelem)) {
    code.setXml((spelem as SP.View).get_listViewXml());
  }
  // @ts-ignore
  else if (SP.ContentType.isInstanceOfType(spelem)) {
    code.setXml((spelem as SP.ContentType).get_schemaXml());
  }
  // @ts-ignore
  else if (SP.Field.isInstanceOfType(spelem)) {
    code.setXml((spelem as SP.Field).get_schemaXml());
  }
  // @ts-ignore
  else if (SP.UserCustomAction.isInstanceOfType(spelem)) {
    code.setXml((spelem as SP.UserCustomAction).get_commandUIExtension());
  }
});
var code = new CodeMirrorEditor('#editor');

ExecuteOrDelayUntilScriptLoaded(() => {
  var ctx = SP.ClientContext.get_current();
  var web = ctx.get_web();
  field.setTarget(web);
}, 'sp.js');
