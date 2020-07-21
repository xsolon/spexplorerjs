
import { TreeLight } from '../components/treelight';
import { CodeMirrorEditor } from '../components/codemirroreditor';
import { SpBackupUI } from '../components/backup';
import * as monaco from 'monaco-editor';
// import { FieldSelector, ListSelector } from '../components/fieldselector';
import 'bootstrap';
import '../custom.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as tmp from '../ui.template.html';

var $ = require('jquery');
$('#ui').html(tmp);
$('.version').html(new Date().toISOString());
var tree = new TreeLight('#tree');

var widget: SpBackupUI = null;
var ctrlSelector = $('#ctrlSelector');
var ctrl = $('#ctrl');
ctrlSelector.change(function () {
    var val = $(this).val();
    if (val == 'Backup') {
        widget = new SpBackupUI(ctrl);
    }
});
// var field = new FieldSelector('#ctrl');
tree.on('selectionChange', (spelem: any): void => {
    if (widget != null) {
        widget.setTarget(spelem);
    }
    // field.setTarget(spelem);

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
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2015,
    allowNonTsExtensions: true
});
var code = new CodeMirrorEditor('#editor');
code.setTarget('ES2017');

ExecuteOrDelayUntilScriptLoaded(() => {
    // var ctx = SP.ClientContext.get_current();
    // var web = ctx.get_web();
    // field.setTarget(web);
}, 'sp.js');
