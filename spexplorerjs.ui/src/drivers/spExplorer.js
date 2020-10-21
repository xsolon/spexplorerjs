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
var monaco = __importStar(require("monaco-editor"));
// import { FieldSelector, ListSelector } from '../components/fieldselector';
require("bootstrap");
require("../custom.scss");
//import 'bootstrap/dist/css/bootstrap.min.css';
var tmp = __importStar(require("../ui.template.html"));
var all_1 = require("@pnp/sp/presets/all");
var $ = require('jquery');
$('#ui').html(tmp);
$('.version').html(new Date().toISOString());
var tree = new treelight_1.TreeLight('#tree');
//import * as pnp1 from '@pnp/sp';
//@ts-ignore
window.pnp1 = { sp: all_1.sp, Webs: all_1.Webs, Lists: all_1.Lists };
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
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2015,
    allowNonTsExtensions: true
});
var code = new codemirroreditor_1.CodeMirrorEditor('#editor');
code.setTarget('ES2017');
ExecuteOrDelayUntilScriptLoaded(function () {
    // var ctx = SP.ClientContext.get_current();
    // var web = ctx.get_web();
    // field.setTarget(web);
}, 'sp.js');
var addChoicesToListsChoiceField = function (listName, choiceFieldName, newChoices) {
    return new Promise(function (resolve, reject) {
        // Field object
        var field = pnp1.sp.web.lists.getByTitle(listName)
            .fields.getByInternalNameOrTitle(choiceFieldName);
        // Getting current choice values
        field.select('Choices')
            .get().then(function (fieldData) {
            var choices = fieldData.Choices.results || fieldData.Choices; // For verbose & minimalmetadata
            var temp = {};
            choices.concat(newChoices).forEach(function (x) { return temp[x] = x; });
            var uniqueChoices = [];
            for (var k in temp) {
                uniqueChoices.push(k);
            }
            uniqueChoices.sort();
            // Update choice field with new array of choices
            field
                .update({
                Choices: {
                    results: choices.concat(uniqueChoices)
                }
            }, 'SP.FieldChoice')
                .then(function (results) {
                resolve(results);
            });
        });
    });
};
addChoicesToListsChoiceField('User Communications', //'List Name', 
'CommType', ['ResponseApproval', 'TaskAssignment', 'Intro', 'Type 2']).then(console.log);
//# sourceMappingURL=spExplorer.js.map