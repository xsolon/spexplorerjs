"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var treelight_1 = require("../components/treelight");
var codemirroreditor_1 = require("../components/codemirroreditor");
var backup_1 = require("../components/backup");
require("bootstrap");
require("../custom.scss");
//import 'bootstrap/dist/css/bootstrap.min.css';
var tmp = __importStar(require("../ui.template.html"));
var $ = require('jquery');
$('#ui').html(tmp);
$('.version').html(new Date().toISOString());
var tree = new treelight_1.TreeLight('#tree');
var widget = null;
var ctrlSelector = $('#ctrlSelector');
var ctrl = $('#ctrl');
ctrlSelector.change(function () {
    var val = $(this).val();
    if (val == 'Backup') {
        widget = new backup_1.SpBackupUI(ctrl);
    }
});
// var field = new FieldSelector('#ctrl');
tree.on('selectionChange', function (spelem) {
    if (widget != null) {
        widget.setTarget(spelem);
    }
    // field.setTarget(spelem);
    // @ts-ignore
    if (SP.View.isInstanceOfType(spelem)) {
        code.setXml(spelem.get_listViewXml());
    }
    // @ts-ignore
    else if (SP.ContentType.isInstanceOfType(spelem)) {
        code.setXml(spelem.get_schemaXml());
    }
    // @ts-ignore
    else if (SP.Field.isInstanceOfType(spelem)) {
        code.setXml(spelem.get_schemaXml());
    }
    // @ts-ignore
    else if (SP.UserCustomAction.isInstanceOfType(spelem)) {
        code.setXml(spelem.get_commandUIExtension());
    }
});
var code = new codemirroreditor_1.CodeMirrorEditor('#editor');
ExecuteOrDelayUntilScriptLoaded(function () {
    // var ctx = SP.ClientContext.get_current();
    // var web = ctx.get_web();
    // field.setTarget(web);
}, 'sp.js');
//# sourceMappingURL=spExplorer.js.map