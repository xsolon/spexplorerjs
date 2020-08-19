///<reference path='nativefs.ts' />
import { MyMonacoEditor } from './myMonacoEditor';
var $: JQueryStatic = require('jquery');// app.modules.jQuery;
import * as Api from 'spexplorerts';
// eslint-disable-next-line no-unused-vars
import * as nativefs from './nativefs';
import * as tmp from '../templates/MetadataProcessorCtrl.html';
// eslint-disable-next-line no-unused-vars
import { metaInfo } from './dto';
type onItemUpdate = (info: metaInfo, li: SP.ListItem) => Promise<void>;
export class MetadataProcessorCtrl extends Api.Logger {
    private jsEditor: MyMonacoEditor;
    constructor(el: any) {//, opts?: IOpts
        super('MetadataProcessorCtrl'); this.log('{version}');

        var ui = $(el);
        if (ui.length == 0) {
            // eslint-disable-next-line no-debugger
            debugger;
        }
        ui.html(tmp);
        var me = this;
        var processor: MetadataProcessor;
        $('#btnRunIterator', ui).click(() => {
            if (processor == null) {
                var ctx = SP.ClientContext.get_current();
                // eslint-disable-next-line no-debugger
                debugger;
                processor = new MetadataProcessor(ctx, (info, li) => {
                    // eslint-disable-next-line no-debugger
                    debugger;
                    me.log({ info, li });
                    return new Promise((resolve) => {
                        resolve();
                    });
                });
            }

            var code = me.jsEditor.Code();
            var args: string[] = ['info', 'li'];
            //@ts-ignore
            var tempFunction = new Function(args, code);

            //@ts-ignore
            processor.onItem = tempFunction;

            processor.processMetaBackup().then(() => {
                me.log('done');
            });

        });

        me.jsEditor = new MyMonacoEditor($('#jsMirror', ui)[0], 'typescript', `
// function(info: metaInfo, li: SP.ListItem){
console.log(info,li);
debugger;
 
//}`.trim(), 'metaProcessor');
        // this.opts = opts;
    }
}
export class MetadataProcessor extends Api.Logger {
    web: SP.Web;
    ctx: SP.ClientContext;
    utils = new Api.funcs();
    onItem: onItemUpdate;
    constructor(ctx: SP.ClientContext, onItem: onItemUpdate) {
        super('MetadataProcessor');
        this.web = ctx.get_web();
        this.ctx = ctx;
        this.onItem = onItem;
    }
    isFolder(typeId: string) {
        return typeId.startsWith('0x0120');
    }
    isItem(typeId: string) {
        return typeId.startsWith('0x0100');
    }
    isFile(typeId: string) {
        return typeId.startsWith('0x0101');
    }
    async processMetaBackup(handle?: nativefs.FileSystemDirectoryHandle) {
        var me = this;
        if (handle == null) {
            const fileopts: nativefs.ChooseFileSystemEntriesOptions = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
            //@ts-ignore
            handle = await window.chooseFileSystemEntries(fileopts) as nativefs.FileSystemDirectoryHandle;
        }
        var metaHandle: nativefs.FileSystemFileHandle;
        try {
            metaHandle = await handle.getFile('meta.json');
        } catch (error) {
            //
        }

        if (metaHandle != null) {
            me.log('folder:' + handle.name);
            var json = await (await metaHandle.getFile()).text();
            var meta: Array<metaInfo> = JSON.parse(json);

            await me.utils.processAsQueue(meta, async info => {
                await me.processItem(info);
            }).done(async () => {
                console.log('metadata set done');
            });

            console.log('processing subfolders...');

            var dirMetas = meta.filter(i => me.isFolder(i.ContentTypeId.StringValue));

            await me.utils.processAsQueue(dirMetas, async dir => {
                var subDirHandle = await handle.getDirectory(dir.ID);
                await me.processMetaBackup(subDirHandle);
            });

            console.log('folders');
        }

        console.log('done');
    }
    async processItem(meta: metaInfo) {
        var me = this;
        var uniqueId = meta.UniqueId;
        var contentType = meta.ContentTypeId.StringValue;

        var li: SP.ListItem;
        if (me.isFile(contentType)) {
            //@ts-ignore
            var file: SP.File = this.web.getFileById(uniqueId);
            li = file.get_listItemAllFields();
        } else if (me.isItem(contentType)) {
            throw 'not implemented';
        }
        else {
            //@ts-ignore
            var folder: SP.Folder = this.web.getFolderById(uniqueId);
            li = folder.get_listItemAllFields();
        }

        await me.utils.loadSpElem(li, me.ctx);
        await me.maintainUpdateMeta(meta, li);
        await me.utils.loadSpElem(li, me.ctx);

        // return new Promise((resolve, reject) => {
        //     me.ctx.executeQueryAsync(resolve, (sender, args) => {
        //         reject(args.get_message());
        //     });
        // });
    }

    async maintainUpdateMeta(meta: metaInfo, li: SP.ListItem) {
        var created = li.get_item('Created');
        li.set_item('Created', created);
        var modified = li.get_item('Modified');
        li.set_item('Modified', modified);
        // li.set_item('FileLeafRef', fileInfo.FileLeafRef); // rest api upload modified some characters eg removes %20

        var author = li.get_item('Author');
        li.set_item('Author', author);
        var editor = li.get_item('Editor');
        li.set_item('Editor', editor);

        if (this.onItem)
            await this.onItem(meta, li);

        li.update();
    }
    processLi(meta: metaInfo, li: SP.ListItem) {


        this.maintainUpdateMeta(meta, li);
    }

}