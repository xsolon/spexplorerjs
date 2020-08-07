import * as Api from 'spexplorerts';
import { ListSelector } from './fieldselector';
var $ = require('jquery');// app.modules.jQuery;
import * as tmp from '../templates/ui.backup.html';
// eslint-disable-next-line no-unused-vars
import * as nativefs from './nativefs';

// @ts-ignore
var w: IWindow = window;
var ns: Api.Ispexplorerjs = w.spexplorerts;
var utils = ns.modules.funcs;

interface IOpts {
    [key: string]: any;
    metadata?: boolean;
    files?: boolean;
    attachments?: boolean;
    target?: SP.List | SP.Web;
    rootfolderonly?: boolean;
}

export class SpBackupUI extends ns.modules.logger {
    target: SP.List | SP.Web;
    ui: JQuery<HTMLElement>;
    listCtrl: ListSelector;
    opts: IOpts;
    handle: nativefs.FileSystemDirectoryHandle;
    constructor(el: any, opts?: IOpts) {
        super('SpBackupUI'); this.log('{version}');
        var me = this;
        var ui = $(el);
        ui.html(tmp);
        this.opts = opts;
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
    restore(list: SP.List) {
        var me = this;
        var ctx = SP.ClientContext.get_current();
        var app: nativefs.NSWindow = window;
        const fileopts: nativefs.ChooseFileSystemEntriesOptions = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
        (async () => {
            me.handle = await app.chooseFileSystemEntries(fileopts) as nativefs.FileSystemDirectoryHandle;

            var rootFolder = list.get_rootFolder();
            var listDal = new Api.ListApi(ctx);
            await utils.loadSpElem([list, rootFolder]);



            var p2 = $.Deferred();
            var folderProps = folder.get_listItemAllFields();
            await utils.loadSpElem([folder, folderProps], ctx);

            var folderName = folder.get_name();
            var folderUrl = folder.get_serverRelativeUrl();
            var folderId = folderName;
            try {
                folderId = folderProps.get_item('ID');
            } catch (e) {
                //
            }
            console.debug(folderUrl);
            //  me.log('Folder:' + folderName);

            var currentHandle = await parentHandle.getDirectory(folderId, { create: true });

            var downloadFile = async function (serverRelativeUrl: string, handle: nativefs.FileSystemDirectoryHandle, uniqueId?: string): Promise<void> {
                var p2 = $.Deferred();
                me.log(serverRelativeUrl);
                //https://sharepoint.stackexchange.com/questions/125737/the-length-of-the-url-for-this-request-exceeds-the-configured-maxurllength-value
                var url = `${webUrl}/_api/web/GetFileByServerRelativeUrl('${escape(serverRelativeUrl.replace(/'/g, '\'\''))}')/$value`;
                if (uniqueId)
                    url = `${webUrl}/_api/web/GetFileById('${uniqueId}')/$value`;
                var xhr = new window.XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';
                xhr.addEventListener('load', async function () {
                    if (xhr.status === 200) {
                        var data = new Uint8Array(xhr.response);
                        var blob = new Blob([data]);//, { type: "application/" }),
                        var bits = serverRelativeUrl.split('/');
                        var fileName = bits[bits.length - 1];
                        // fileName = fileName.replace(/'/g, '');
                        var down = (): Promise<void> => {
                            var p6 = $.Deferred();
                            handle.getFile(fileName, { create: true }).then(file => {
                                updateFile(file, blob).catch(reason => {
                                    console.error(reason);
                                    updateFile(file, blob).catch(reason => {
                                        console.error(reason);
                                        // eslint-disable-next-line no-debugger
                                        debugger;
                                        p6.reject();
                                    }).then(() => {
                                        p6.resolve();
                                    });
                                }).then(() => {
                                    p6.resolve();
                                });

                            });

                            return p6.promise();
                        };

                        down().catch(() => {

                            setTimeout(function () {
                                down().catch(() => {
                                    debugger;
                                    p2.reject();
                                }).then(() => {
                                    p2.resolve();
                                });

                            }, 5000);
                        }).then(() => {
                            p2.resolve();
                        });

                    }


                });
                xhr.send();
                return p2.promise();
            };

            if (listAttachments && attachmentHandle == null) {
                attachmentHandle = await currentHandle.getDirectory('Attachments', { create: true });
            }

            if (folderName == 'Previous Charter and MBP Package Set Up in Nov 2017')
                debugger;

            // var query = listDal.getAll(list, '<View />', folder.get_serverRelativeUrl());
            listDal.getAll(list, '<View />', folderUrl).then(spitems => {
                // query.catch(err => {
                //     debugger;
                //     console.error({ folder: folderName, err });
                // });

                // var spitems = await query;
                var items = [];

                utils.processAsQueue(spitems, async i => {
                    var p4 = $.Deferred();
                    var fields = i.get_fieldValues();
                    items.push(fields);
                    var ctypeid = fields.ContentTypeId['$12_1'] || fields.ContentTypeId['$17_1'] || fields.ContentTypeId.get_stringValue();
                    if (me.opts.files && ctypeid.startsWith('0x0101')) {
                        var fileRef = i.get_item('FileRef');
                        var uniqueId = fields.UniqueId.toString() || i.get_item('UniqueId').toString();
                        await downloadFile(fileRef, currentHandle, uniqueId);
                    }

                    if (listAttachments && me.opts.attachments && fields.Attachments) {
                        var attachments = i.get_attachmentFiles();
                        var folderUrl = `${rootFolder.get_serverRelativeUrl()}/Attachments/${i.get_id()}`;
                        var attFolder = web.getFolderByServerRelativeUrl(folderUrl);
                        var attFiles = attFolder.get_files();
                        ctx.load(attFiles, 'Include(ServerRelativeUrl,Name,Author)');
                        // ctx.load(attachments);
                        await utils.loadSpElem(attachments);

                        var attachmentsArray = utils.collectionToArray(attFiles);
                        if (attachmentsArray.length > 0) {
                            fields.AttachmentList = [];

                            await attachmentsArray.forEach(async function (att: SP.File) {
                                var attServerRelativeUrl = att.get_serverRelativeUrl();
                                var attachmentFolderHandle = await attachmentHandle.getDirectory(i.get_id().toString(), { create: true });
                                await downloadFile(attServerRelativeUrl, attachmentFolderHandle);
                                var author = att.get_author();
                                var authorLookup = {
                                    LookupId: author.get_id(),
                                    LookupValue: author.get_loginName(), Email: author.get_email()
                                };
                                var localAttPath = attachmentHandle.name + '/' + attachmentFolderHandle.name + '/' + att.get_name();
                                fields.AttachmentList.push({
                                    LocalPath: localAttPath,
                                    name: att.get_name(),
                                    author: authorLookup
                                });
                            });
                        }

                    }

                    p4.resolve();

                    return p4.promise();
                }).done(async () => {
                    console.log('done with ' + folderName);

                    var saveMetadata = async (): Promise<void> => {
                        var p3 = $.Deferred();

                        if (me.opts.metadata && items.length > 0) {

                            var file = await currentHandle.getFile('meta.json', { create: true });

                            var json = JSON.stringify(items);
                            //d.fromJson({LookupId:19,LookupValue:'asdf',Email:'martin@test.com'})
                            //'{"$1p_1":19,"$5c_1":"asdf","$6_2":"martin@test.com"}{"$1p_1":19,"$5c_1":"asdf","$6_2":"martin@test.com"}'.replace(/\$1p_1/g,'LookupValue')
                            json = json.replace(/\$1p_1/g, 'LookupId').replace(/\$5c_1/g, 'LookupValue').replace(/\$6_2/g, 'Email')
                                .replace(/\$12_1/g, 'StringValue')
                                .replace(/\$17_1/g, 'StringValue');

                            updateFile(file, json).catch(() => {
                                updateFile(file, json).catch(() => {
                                    // eslint-disable-next-line no-debugger
                                    debugger;
                                    p3.resolve();
                                }).then(() => {
                                    p3.resolve();
                                });
                            }).then(() => {
                                p3.resolve();
                            });


                        } else p3.resolve();
                        return p3.promise();
                    };

                    await saveMetadata();

                    var subFolders = folder.get_folders();
                    await utils.loadSpElem(subFolders);

                    var folderArr: SP.Folder[] = utils.collectionToArray(subFolders);

                    if (!me.opts.rootfolderonly)
                        utils.processAsQueue(folderArr, f => processFolder(f, currentHandle)).done(() => {
                            p2.resolve();
                        });
                    else
                        p2.resolve();

                });

            }).catch(err => {
                console.error(err);
                debugger;
            });

            return p2.promise();
        };

        debugger;
        await processFolder(rootFolder, me.handle);

    })();

    }
backup(list: SP.List) {
    var me = this;
    var ui = me.ui;
    var htmlOpts = {
        metadata: $('[value=metadata]:checked', ui).length == 1,
        files: $('[value=files]:checked', ui).length == 1,
        rootfolderonly: $('[value=rootfolderonly]:checked', ui).length == 1,
        attachments: $('[value=attachments]:checked', ui).length == 1
    };
    me.opts = $.extend(me.opts || {}, htmlOpts);
    var ctx = SP.ClientContext.get_current();
    //@ts-ignore
    var app: nativefs.NSWindow = window;
    var backupNode = async function (List: SP.List | string): Promise<void> {
        const fileopts: nativefs.ChooseFileSystemEntriesOptions = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
        me.handle = me.handle || await app.chooseFileSystemEntries(fileopts) as nativefs.FileSystemDirectoryHandle;
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

        var listAttachments = list.get_enableAttachments();
        var attachmentHandle: nativefs.FileSystemDirectoryHandle = null;

        var updateFile = async (file: nativefs.FileSystemFileHandle, content: any): Promise<void> => {
            var p5 = $.Deferred();
            try {
                var opts: nativefs.FileSystemCreateWriterOptions = { keepExistingData: false };
                const writable = await file.createWritable(opts);// Create a FileSystemWritableFileStream to write to.
                //@ts-ignore
                await writable.write(content);// Write the contents of the file to the stream.
                await writable.close();// Close the file and write the contents to disk.
                p5.resolve();
            } catch (error) {
                me.error(error);
                p5.reject(error);
                // eslint-disable-next-line no-debugger
                debugger;
            }
            return p5.promise();
        };
        var processFolder = async (folder: SP.Folder, parentHandle: nativefs.FileSystemDirectoryHandle): Promise<void> => {

            var p2 = $.Deferred();
            var folderProps = folder.get_listItemAllFields();
            await utils.loadSpElem([folder, folderProps], ctx);

            var folderName = folder.get_name();
            var folderUrl = folder.get_serverRelativeUrl();
            var folderId = folderName;
            try {
                folderId = folderProps.get_item('ID');
            } catch (e) {
                //
            }
            console.debug(folderUrl);
            //  me.log('Folder:' + folderName);

            var currentHandle = await parentHandle.getDirectory(folderId, { create: true });

            var downloadFile = async function (serverRelativeUrl: string, handle: nativefs.FileSystemDirectoryHandle, uniqueId?: string): Promise<void> {
                var p2 = $.Deferred();
                me.log(serverRelativeUrl);
                //https://sharepoint.stackexchange.com/questions/125737/the-length-of-the-url-for-this-request-exceeds-the-configured-maxurllength-value
                var url = `${webUrl}/_api/web/GetFileByServerRelativeUrl('${escape(serverRelativeUrl.replace(/'/g, '\'\''))}')/$value`;
                if (uniqueId)
                    url = `${webUrl}/_api/web/GetFileById('${uniqueId}')/$value`;
                var xhr = new window.XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';
                xhr.addEventListener('load', async function () {
                    if (xhr.status === 200) {
                        var data = new Uint8Array(xhr.response);
                        var blob = new Blob([data]);//, { type: "application/" }),
                        var bits = serverRelativeUrl.split('/');
                        var fileName = bits[bits.length - 1];
                        // fileName = fileName.replace(/'/g, '');
                        var down = (): Promise<void> => {
                            var p6 = $.Deferred();
                            handle.getFile(fileName, { create: true }).then(file => {
                                updateFile(file, blob).catch(reason => {
                                    console.error(reason);
                                    updateFile(file, blob).catch(reason => {
                                        console.error(reason);
                                        // eslint-disable-next-line no-debugger
                                        debugger;
                                        p6.reject();
                                    }).then(() => {
                                        p6.resolve();
                                    });
                                }).then(() => {
                                    p6.resolve();
                                });

                            });

                            return p6.promise();
                        };

                        down().catch(() => {

                            setTimeout(function () {
                                down().catch(() => {
                                    debugger;
                                    p2.reject();
                                }).then(() => {
                                    p2.resolve();
                                });

                            }, 5000);
                        }).then(() => {
                            p2.resolve();
                        });

                    }


                });
                xhr.send();
                return p2.promise();
            };

            if (listAttachments && attachmentHandle == null) {
                attachmentHandle = await currentHandle.getDirectory('Attachments', { create: true });
            }

            if (folderName == 'Previous Charter and MBP Package Set Up in Nov 2017')
                debugger;

            // var query = listDal.getAll(list, '<View />', folder.get_serverRelativeUrl());
            listDal.getAll(list, '<View />', folderUrl).then(spitems => {
                // query.catch(err => {
                //     debugger;
                //     console.error({ folder: folderName, err });
                // });

                // var spitems = await query;
                var items = [];

                utils.processAsQueue(spitems, async i => {
                    var p4 = $.Deferred();
                    var fields = i.get_fieldValues();
                    items.push(fields);
                    var ctypeid = fields.ContentTypeId['$12_1'] || fields.ContentTypeId['$17_1'] || fields.ContentTypeId.get_stringValue();
                    if (me.opts.files && ctypeid.startsWith('0x0101')) {
                        var fileRef = i.get_item('FileRef');
                        var uniqueId = fields.UniqueId.toString() || i.get_item('UniqueId').toString();
                        await downloadFile(fileRef, currentHandle, uniqueId);
                    }

                    if (listAttachments && me.opts.attachments && fields.Attachments) {
                        var attachments = i.get_attachmentFiles();
                        var folderUrl = `${rootFolder.get_serverRelativeUrl()}/Attachments/${i.get_id()}`;
                        var attFolder = web.getFolderByServerRelativeUrl(folderUrl);
                        var attFiles = attFolder.get_files();
                        ctx.load(attFiles, 'Include(ServerRelativeUrl,Name,Author)');
                        // ctx.load(attachments);
                        await utils.loadSpElem(attachments);

                        var attachmentsArray = utils.collectionToArray(attFiles);
                        if (attachmentsArray.length > 0) {
                            fields.AttachmentList = [];

                            await attachmentsArray.forEach(async function (att: SP.File) {
                                var attServerRelativeUrl = att.get_serverRelativeUrl();
                                var attachmentFolderHandle = await attachmentHandle.getDirectory(i.get_id().toString(), { create: true });
                                await downloadFile(attServerRelativeUrl, attachmentFolderHandle);
                                var author = att.get_author();
                                var authorLookup = {
                                    LookupId: author.get_id(),
                                    LookupValue: author.get_loginName(), Email: author.get_email()
                                };
                                var localAttPath = attachmentHandle.name + '/' + attachmentFolderHandle.name + '/' + att.get_name();
                                fields.AttachmentList.push({
                                    LocalPath: localAttPath,
                                    name: att.get_name(),
                                    author: authorLookup
                                });
                            });
                        }

                    }

                    p4.resolve();

                    return p4.promise();
                }).done(async () => {
                    console.log('done with ' + folderName);

                    var saveMetadata = async (): Promise<void> => {
                        var p3 = $.Deferred();

                        if (me.opts.metadata && items.length > 0) {

                            var file = await currentHandle.getFile('meta.json', { create: true });

                            var json = JSON.stringify(items);
                            //d.fromJson({LookupId:19,LookupValue:'asdf',Email:'martin@test.com'})
                            //'{"$1p_1":19,"$5c_1":"asdf","$6_2":"martin@test.com"}{"$1p_1":19,"$5c_1":"asdf","$6_2":"martin@test.com"}'.replace(/\$1p_1/g,'LookupValue')
                            json = json.replace(/\$1p_1/g, 'LookupId').replace(/\$5c_1/g, 'LookupValue').replace(/\$6_2/g, 'Email')
                                .replace(/\$12_1/g, 'StringValue')
                                .replace(/\$17_1/g, 'StringValue');

                            updateFile(file, json).catch(() => {
                                updateFile(file, json).catch(() => {
                                    // eslint-disable-next-line no-debugger
                                    debugger;
                                    p3.resolve();
                                }).then(() => {
                                    p3.resolve();
                                });
                            }).then(() => {
                                p3.resolve();
                            });


                        } else p3.resolve();
                        return p3.promise();
                    };

                    await saveMetadata();

                    var subFolders = folder.get_folders();
                    await utils.loadSpElem(subFolders);

                    var folderArr: SP.Folder[] = utils.collectionToArray(subFolders);

                    if (!me.opts.rootfolderonly)
                        utils.processAsQueue(folderArr, f => processFolder(f, currentHandle)).done(() => {
                            p2.resolve();
                        });
                    else
                        p2.resolve();

                });

            }).catch(err => {
                console.error(err);
                debugger;
            });

            return p2.promise();
        };

        debugger;
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