import { SpBackupUI } from '../components/backup';
import 'bootstrap';
import '../custom.scss';
// import * as tmp from '../ui.template.html';

var $ = require('jquery');
var tmp = `
<div class="expjs">
    <div class="container">
    <div class="row">
        <div id="ctrl" class='col-12'></div>
    </div>
    </div>
</div>
`;
$('#ui').html(tmp);
$('.version').html(new Date().toISOString());

new SpBackupUI($('#ctrl'));

ExecuteOrDelayUntilScriptLoaded(() => {
    // var ctx = SP.ClientContext.get_current();
    // var web = ctx.get_web();
    // field.setTarget(web);
}, 'sp.js');
