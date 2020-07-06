import * as Api from 'spexplorerts';
import { ListSelector } from './fieldselector';
var app: Api.Ispexplorerjs = window['spexplorerts'];
var $ = app.modules.jQuery;
import * as tmp from '../templates/ui.backup.html';
// eslint-disable-next-line no-unused-vars
import * as nativefs from './nativefs';

// @ts-ignore
var w: IWindow = window;
var ns: Api.Ispexplorerjs = w.spexplorerts;
var utils = ns.modules.funcs;

export class SpBackupUI extends ns.modules.logger {
    target: SP.List | SP.Web;
    ui: JQuery<HTMLElement>;
    listCtrl: ListSelector;
    handle: nativefs.FileSystemDirectoryHandle;
    constructor(el: any, opts?: { [key: string]: any, target?: SP.List | SP.Web }) {
        super('SpBackupUI'); this.log('{version}');
        var me = this;
        var ui = $(el);
        ui.html(tmp);

        this.listCtrl = new ListSelector($('#listSelect', ui));
        me.ui = ui;
        me.debug('SpBackupUI.init');

        $('button', ui).click(function () {
            var selection = me.listCtrl.getTarget();
            var list: SP.List = selection as SP.List;
            if (list) {
                me.backup(list);
            }
        });

        if (opts && opts.target) {
            me.setTarget(opts.target);
        } else {
            var ctx = SP.ClientContext.get_current();
            me.setTarget(ctx.get_web());
        }
    }
    debug(...args: any[]) {
        if (args && args.length == 1)
            args = args[0];
        console && console.debug && console.debug(args);
    }
    log(...args: any[]) {
        if (args && args.length == 1)
            args = args[0];
        console && console.log && console.log(args);
        $('#log', this.ui).append(`<li>${args}</li>`);
    }
    backup(list: SP.List) {
        var me = this;
        const opts: nativefs.ChooseFileSystemEntriesOptions = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
        var ctx = SP.ClientContext.get_current();
        //@ts-ignore
        var app: nativefs.NSWindow = window;
        var backupNode = async function (List: SP.List | string): Promise<void> {
            me.handle = me.handle || await app.chooseFileSystemEntries(opts) as nativefs.FileSystemDirectoryHandle;
            var web = ctx.get_web();
            var site = ctx.get_site();
            ctx.load(web);
            await utils.loadSpElem(site);
            var webUrl = web.get_url();

            var list: SP.List;
            if (typeof List == 'string') {
                var web = ctx.get_web();
                list = web.get_lists().getByTitle(List);
            } else {
                list = List;
            }

            var rootFolder = list.get_rootFolder();
            var listDal = new Api.ListApi(ctx);
            await utils.loadSpElem([list, rootFolder]);

            var processFolder = async (folder: SP.Folder, currentHandle: nativefs.FileSystemDirectoryHandle): Promise<void> => {
                var updateFile = async (file: nativefs.FileSystemFileHandle, content: any) => {
                    const writable = await file.createWritable();// Create a FileSystemWritableFileStream to write to.
                    //@ts-ignore
                    await writable.write(content);// Write the contents of the file to the stream.
                    await writable.close();// Close the file and write the contents to disk.
                };
                var downloadFile = async function (serverRelativeUrl: string): Promise<void> {
                    var p2 = $.Deferred();
                    me.log(serverRelativeUrl);
                    var url = `${webUrl}/_api/web/GetFileByServerRelativeUrl('${serverRelativeUrl}')/$value`;
                    var xhr = new window.XMLHttpRequest();
                    xhr.open('GET', url, true);
                    xhr.responseType = 'arraybuffer';
                    xhr.addEventListener('load', async function () {
                        if (xhr.status === 200) {
                            var data = new Uint8Array(xhr.response);
                            var blob = new Blob([data]);//, { type: "application/" }),
                            var bits = serverRelativeUrl.split('/');
                            var fileName = bits[bits.length - 1];
                            var file = await currentHandle.getFile(fileName, { create: true });
                            await updateFile(file, blob);
                            p2.resolve();
                        }
                    });
                    xhr.send();
                    return p2.promise();
                };

                currentHandle = await currentHandle.getDirectory(folder.get_name(), { create: true });

                await utils.loadSpElem(folder);

                me.log('Folder:' + folder.get_name());
                var spitems = await listDal.getAll(list, '<View />', folder.get_serverRelativeUrl());
                var items = [];

                await utils.processAsQueue(spitems, async i => {
                    var fields = i.get_fieldValues();
                    items.push(fields);
                    var ctypeid = fields.ContentTypeId['$12_1'] || fields.ContentTypeId['$17_1'] || fields.ContentTypeId.get_stringValue();
                    if (ctypeid.startsWith('0x0101')) {
                        var fileRef = i.get_item('FileRef');
                        await downloadFile(fileRef);
                    }
                });

                var file = await currentHandle.getFile('meta.json', { create: true });
                if (items.length > 0) {
                    var json = JSON.stringify(items);
                    await updateFile(file, json);
                }
                var subFolders = folder.get_folders();
                await utils.loadSpElem(subFolders);

                var folderArr: SP.Folder[] = utils.collectionToArray(subFolders);
                await utils.processAsQueue(folderArr, async f => {
                    await processFolder(f, currentHandle);
                });
            };

            await processFolder(rootFolder, me.handle);

            me.log('Backup Complete');

            var p1 = $.Deferred();
            return p1.promise();
        };

        try {
            backupNode(list);
        } catch (error) {
            // eslint-disable-next-line no-debugger
            debugger;
        }
    }
    setTarget(target: SP.List | SP.Web): void {
        this.target = target;
        this.listCtrl.setTarget(target);
    }
}