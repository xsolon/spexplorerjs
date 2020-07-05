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
var trace: Api.Logger = new ns.modules.logger('logger');
trace.shouldDebug = true;
var utils = ns.modules.funcs;

// class DriveNativeAL{
//     ensureFolder();
// }

export class SpBackupUI {
    target: SP.List | SP.Web;
    ui: JQuery<HTMLElement>;
    listCtrl: ListSelector;
    handle: nativefs.FileSystemDirectoryHandle;
    constructor(el: any, opts?: { [key: string]: any, target?: SP.List | SP.Web }) {
        var me = this;
        var ui = $(el);
        ui.html(tmp);

        this.listCtrl = new ListSelector($('#listSelect', ui));
        me.ui = ui;
        trace.log('FieldSelector.init');

        if (opts && opts.target) {
            me.setTarget(opts.target);
        }

        $('button', ui).click(function () {
            var selection = me.listCtrl.getTarget();
            var list: SP.List = selection as SP.List;
            if (list) {
                me.backup(list);
            }
        });
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

            var downloadFile = async function (serverRelativeUrl: string): Promise<void> {
                var queryUrl = `${webUrl}/_api/web/GetFileByServerRelativeUrl('${serverRelativeUrl}')/$value`;
                var opts = {
                    encoding: null,
                    method: 'GET',
                    url: queryUrl,
                    headers: {
                        json: false,
                        'Accept': '*/*',
                        'Content-Type': 'application/octet-stream',
                        'Accept-Encoding': 'gzip, deflate, br'
                    }
                };

                var resp = await $.ajax(opts);

                resp;
                // let spr = sprequest.create(settings);
                // var res = await spr.get(opts);
                // fs.writeFileSync(filePath, res.body);
            };

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

                currentHandle = await currentHandle.getDirectory(folder.get_name(), { create: true });

                await utils.loadSpElem(folder);

                console.log('processing ' + folder.get_name());
                var spitems = await listDal.getAll(list, '<View />', folder.get_serverRelativeUrl());
                var items = [];

                await utils.processAsQueue(spitems, async i => {
                    var fields = i.get_fieldValues();
                    items.push(fields);
                    var ctypeid = fields.ContentTypeId['$12_1'] || fields.ContentTypeId['$17_1'] || fields.ContentTypeId.get_stringValue();
                    if (ctypeid.startsWith('0x0101')) {
                        // var fileRef = i.get_item('FileRef');
                        // var fileLeafRef = i.get_item('FileLeafRef');
                        // var fullPath = localPath + '\\' + fileLeafRef;
                        // if (!fs.existsSync(fullPath)) {
                        //     console.log(fullPath);
                        //     await downloadFile(fileRef, fullPath);
                        // }
                    }
                });

                var file = await currentHandle.getFile('meta.json', { create: true });
                var updateFile = async (file: nativefs.FileSystemFileHandle, content: string) => {
                    const writable = await file.createWritable();// Create a FileSystemWritableFileStream to write to.
                    //@ts-ignore
                    await writable.write(content);// Write the contents of the file to the stream.
                    await writable.close();// Close the file and write the contents to disk.
                };
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

            console.log('backupNode.done');

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
