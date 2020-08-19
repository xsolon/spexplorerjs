///
import { sp } from '@pnp/sp/presets/all';
import { CodeMirrorEditor } from '../components/codemirroreditor';
import * as uihtml from '../templates/spscripteditor.html';
import 'bootstrap';
import '../custom.scss';
var $: JQueryStatic = require('jquery');
import 'select2';
import { MetadataProcessorCtrl } from '../components/MetadataProcessor';
import { SpBackupUI } from '../components/backup';

(async () => {
    // ensure that a list exists. If it doesn't it will be created with the provided title (the rest of the settings will be default):
    var listTitle = 'My scripts';
    const listEnsureResult = await sp.web.lists.ensure(listTitle);
    var list = listEnsureResult.list;

    // check if the list was created, or if it already existed:
    if (listEnsureResult.created) {
        console.log('My List was created!');
        await listEnsureResult.list.fields.addMultilineText('Code', 10, false, true, false, false);
        await listEnsureResult.list.fields.addMultilineText('Xml', 10, false, true, false, false);
        await listEnsureResult.list.fields.addMultilineText('Json', 10, false, true, false, false);
        await list.items.add({
            Title: 'Test 1', Code: 'alert("Hello World!")', Xml: '<div/>', Json: '[]'
        });
    }

    $('#ui').html(uihtml);

    var items = await list.items.getAll(10);
    var select = $('#lstScripts');

    items.forEach(x => {
        var title = x['Title'];
        var id = x['ID'];
        var opthtml = `<option value='${id}'>${title}</option>`;
        var opt = $(opthtml);
        opt.prop('data-item', x);
        select.append(opt);
    });

    var titleField = $('#txtTitle');
    var idField = $('#txtID');

    new MetadataProcessorCtrl('#backupIterator');

    var code = new CodeMirrorEditor('#txtScript');
    code.setTarget('ES2017');
    code.Code(`import * as pnp from '@pnp/sp/presets/all';

(async () => {
    var items = await pnp.sp.web.lists.getByTitle('Site Pages').items.getAll();
    // @ts-ignore
    jsonEditor.setValue(JSON.stringify(items));
    console.log(items);
})();`);
    select.change(() => {
        var selectedOption = $(':selected', select);
        var item = selectedOption.prop('data-item');
        titleField.val(item.Title);
        idField.val(item.ID);
        code.Code(item.Code);
        code.Xml(item.Xml);
        code.Json(item.Json);
        console.log(item);
    });

    //@ts-ignore
    select.select2({});
    var ctx = SP.ClientContext.get_current();

    var spweb = ctx.get_web();
    var splist = spweb.get_lists().getByTitle(listTitle);
    ctx.load(splist);
    ctx.executeQueryAsync(() => {
        new SpBackupUI($('#backupCtrl'), { target: splist });
    });

    $('#btnSave').click(async () => {

        var el = {
            Title: titleField.val(),
            Code: code.Code(),
            Json: code.Json(),
            Xml: code.Xml()
        };

        var id = parseInt(idField.val().toString());

        if (id == 0) {
            await list.items.add(el);
            window.location.reload();
        } else {
            list.items.getById(id).update(el);
        }

    });
})();