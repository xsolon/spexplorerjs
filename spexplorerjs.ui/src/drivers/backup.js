"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var backup_1 = require("../components/backup");
require("bootstrap");
require("../custom.scss");
//import 'bootstrap/dist/css/bootstrap.min.css';
var tmp = __importStar(require("../ui.template.html"));
var $ = require('jquery');
$('#ui').html(tmp);
$('.version').html(new Date().toISOString());
var widget = null;
var ctrlSelector = $('#ctrlSelector');
var ctrl = $('#ctrl');
widget = new backup_1.SpBackupUI(ctrl);
ctrlSelector.change(function () {
    var val = $(this).val();
    if (val == 'Backup') {
        widget = new backup_1.SpBackupUI(ctrl);
    }
});
ExecuteOrDelayUntilScriptLoaded(function () {
    // var ctx = SP.ClientContext.get_current();
    // var web = ctx.get_web();
    // field.setTarget(web);
}, 'sp.js');
//# sourceMappingURL=backup.js.map