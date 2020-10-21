"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backup_1 = require("../components/backup");
require("bootstrap");
require("../custom.scss");
// import * as tmp from '../ui.template.html';
var $ = require('jquery');
var tmp = "\n<div class=\"expjs\">\n    <div class=\"container\">\n    <div class=\"row\">\n        <div id=\"ctrl\" class='col-12'></div>\n    </div>\n    </div>\n</div>\n";
$('#ui').html(tmp);
$('.version').html(new Date().toISOString());
new backup_1.SpBackupUI($('#ctrl'));
ExecuteOrDelayUntilScriptLoaded(function () {
    // var ctx = SP.ClientContext.get_current();
    // var web = ctx.get_web();
    // field.setTarget(web);
}, 'sp.js');
//# sourceMappingURL=backup.js.map