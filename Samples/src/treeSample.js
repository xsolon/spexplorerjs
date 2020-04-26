"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treelight_1 = require("./components/treelight");
var codemirroreditor_1 = require("./components/codemirroreditor");
var fieldselector_1 = require("./components/fieldselector");
require("bootstrap");
require("./custom.scss");
//import 'bootstrap/dist/css/bootstrap.min.css';
var tmp = require("./ui.template.html");
var $ = require('jquery');
$('#ui').html(tmp);
var tree = new treelight_1.TreeLight('#tree');
var field = new fieldselector_1.FieldSelector('#field');
tree.on('selectionChange', function (spelem) {
    field.setTarget(spelem);
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
    var ctx = SP.ClientContext.get_current();
    var web = ctx.get_web();
    field.setTarget(web);
}, 'sp.js');
//# sourceMappingURL=treeSample.js.map