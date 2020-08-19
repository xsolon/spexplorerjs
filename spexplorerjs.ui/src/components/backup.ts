import * as Api from 'spexplorerts';
import { ListSelector } from './fieldselector';
var $: JQueryStatic = require('jquery');// app.modules.jQuery;
import * as tmp from '../templates/ui.backup.html';
// eslint-disable-next-line no-unused-vars
import * as nativefs from './nativefs';
var ns: Api.Ispexplorerjs = window['spexplorerts'];
var utils = ns.modules.funcs;
// eslint-disable-next-line no-unused-vars
import { metaInfo } from './dto';

var app: nativefs.NSWindow = window;
var webUrl = _spPageContextInfo.webServerRelativeUrl;
export class FileUploadService {
    public siteUrl: string = _spPageContextInfo.webAbsoluteUrl;
    public siteRelativeUrl: string = _spPageContextInfo.webServerRelativeUrl != '/' ? _spPageContextInfo.webServerRelativeUrl : '';
    public fileUpload(file: File, folderId: string, fileName: string) {
        return new Promise((resolve, reject) => {
            this.createDummyFile(fileName, folderId).then(result => {
                let fr = new FileReader();
                let offset = 0;
                // the total file size in bytes...  
                let total = file.size;
                // 1MB Chunks as represented in bytes (if the file is less than a MB, seperate it into two chunks of 80% and 20% the size)...  
                let length = parseInt(1000000) > total ? Math.round(total * 0.8) : parseInt(1000000);
                let chunks = [];

                //reads in the file using the fileReader HTML5 API (as an ArrayBuffer) - readAsBinaryString is not available in IE!  
                fr.readAsArrayBuffer(file);
                fr.onload = (evt: any) => {
                    while (offset < total) {
                        //if we are dealing with the final chunk, we need to know...  
                        if (offset + length > total) {
                            length = total - offset;
                        }
                        //work out the chunks that need to be processed and the associated REST method (start, continue or finish)  
                        chunks.push({
                            offset,
                            length,
                            method: this.getUploadMethod(offset, length, total)
                        });
                        offset += length;
                    }
                    //each chunk is worth a percentage of the total size of the file...  
                    const chunkPercentage = (total / chunks.length) / total * 100;
                    if (chunks.length > 0) {
                        //the unique guid identifier to be used throughout the upload session  
                        const id = this.guid();
                        //Start the upload - send the data to S  
                        this.uploadFile(evt.target.result, id, documentLibrary, fileName, chunks, 0, 0, chunkPercentage, resolve, reject);
                    }
                };
            });
        });
    }
    createDummyFile(fileName: string, folderId: string) {
        return new Promise((resolve, reject) => {
            var svcurl = `${webUrl}/_api/web/GetFolderById('${folderId}')/Files/add(overwrite=true,url='${encodeURIComponent(fileName.replace(/'/g, '\'\''))}')`;

            const headers = {
                'accept': 'application/json;odata=verbose'
            };
            this.executeAsync(svcurl, this.convertDataBinaryString(2), headers).then(file => resolve(true)).catch(err => reject(err));
        });
    }
    // Base64 - this method converts the blob arrayBuffer into a binary string to send in the REST request  
    convertDataBinaryString(data) {
        let fileData = '';
        let byteArray = new Uint8Array(data);
        for (var i = 0; i < byteArray.byteLength; i++) {
            fileData += String.fromCharCode(byteArray[i]);
        }
        return fileData;
    }
    executeAsync(endPointUrl, data, requestHeaders) {
        return new Promise((resolve, reject) => {
            // using a utils function we would get the APP WEB url value and pass it into the constructor...  
            let executor = new SP.RequestExecutor(this.siteUrl);
            // Send the request.  
            executor.executeAsync({
                url: endPointUrl,
                method: 'POST',
                body: data,
                binaryStringRequestBody: true,
                headers: requestHeaders,
                success: offset => resolve(offset),
                error: err => reject(err.responseText)
            });
        });
    }
    //this method sets up the REST request and then sends the chunk of file along with the unique indentifier (uploadId)  
    uploadFileChunk(id, folderId, fileName, chunk, data, byteOffset) {
        return new Promise((resolve, reject) => {
            let offset = chunk.offset === 0 ? '' : ',fileOffset=' + chunk.offset;
            //parameterising the components of this endpoint avoids the max url length problem in SP (Querystring parameters are not included in this length)  
            var svcurl = `${webUrl}/_api/web/GetFolderById('${folderId}')/Files/add(overwrite=true,url='${encodeURIComponent(fileName.replace(/'/g, '\'\''))}')`;
            // let endpoint = this.siteUrl + '/_api/web/getfilebyserverrelativeurl(\'' + this.siteRelativeUrl + '/' + libraryPath + '/' + fileName + '\')/' + chunk.method + '(uploadId=guid\'' + id + '\'' + offset + ')';
            const headers = {
                'Accept': 'application/json; odata=verbose',
                'Content-Type': 'application/octet-stream'
            };
            this.executeAsync(svcurl, data, headers).then(offset => resolve(offset)).catch(err => reject(err));
        });
    }
    //the primary method that resursively calls to get the chunks and upload them to the library (to make the complete file)  
    uploadFile(result, id, libraryPath, fileName, chunks, index, byteOffset, chunkPercentage, resolve, reject) {
        //we slice the file blob into the chunk we need to send in this request (byteOffset tells us the start position)  
        const data = this.convertFileToBlobChunks(result, byteOffset, chunks[index]);
        //upload the chunk to the server using REST, using the unique upload guid as the identifier  
        this.uploadFileChunk(id, libraryPath, fileName, chunks[index], data, byteOffset).then(value => {
            const isFinished = index === chunks.length - 1;
            index += 1;
            const percentageComplete = isFinished ? 100 : Math.round((index * chunkPercentage));
            //More chunks to process before the file is finished, continue  
            if (index < chunks.length) {
                this.uploadFile(result, id, libraryPath, fileName, chunks, index, byteOffset, chunkPercentage, resolve, reject);
            } else {
                resolve(value);
            }
        }).catch(err => {
            console.log('Error in uploadFileChunk! ' + err);
            reject(err);
        });
    }
    //Helper method - depending on what chunk of data we are dealing with, we need to use the correct REST method...  
    getUploadMethod(offset, length, total) {
        if (offset + length + 1 > total) {
            return 'finishupload';
        } else if (offset === 0) {
            return 'startupload';
        } else if (offset < total) {
            return 'continueupload';
        }
        return null;
    }
    //this method slices the blob array buffer to the appropriate chunk and then calls off to get the BinaryString of that chunk  
    convertFileToBlobChunks(result, byteOffset, chunkInfo) {
        let arrayBuffer = result.slice(chunkInfo.offset, chunkInfo.offset + chunkInfo.length);
        return this.convertDataBinaryString(arrayBuffer);
    }
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}

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
        p5.reject(error);
        // eslint-disable-next-line no-debugger
        debugger;
    }
    return p5.promise();
};
interface IOpts {
    [key: string]: any;
    metadata?: boolean;
    files?: boolean;
    attachments?: boolean;
    target?: SP.List | SP.Web;
    rootfolderonly?: boolean;
}

export class SpBackupUI extends ns.modules.logger {
    userMap: { [key: string]: string };
    target: SP.List | SP.Web;
    ui: JQuery<HTMLElement>;
    listCtrl: ListSelector;
    opts: IOpts;
    handle: nativefs.FileSystemDirectoryHandle;
    constructor(el: any, opts?: IOpts) {
        super('SpBackupUI'); this.log('{version}');
        this.userMap = {};
        // Run your custom code when the DOM is ready.
        $(document).ready(function () {

            // Render and initialize the client-side People Picker.
            function initializePeoplePicker(peoplePickerElementId) {

                // Create a schema to store picker properties, and set the properties.
                var schema = {};
                schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
                schema['SearchPrincipalSource'] = 15;
                schema['ResolvePrincipalSource'] = 15;
                schema['AllowMultipleValues'] = true;
                schema['MaximumEntitySuggestions'] = 50;
                schema['Width'] = '280px';

                // Render and initialize the picker. 
                // Pass the ID of the DOM element that contains the picker, an array of initial
                // PickerEntity objects to set the picker value, and a schema that defines
                // picker properties.
                //@ts-ignore
                SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
            }

            // Specify the unique ID of the DOM element where the
            // picker will render.
            initializePeoplePicker('peoplePickerDiv');
        });


        var me = this;
        var ui = $(el);
        ui.html(tmp);
        this.opts = opts;
        this.listCtrl = new ListSelector($('#listSelect', ui));
        me.ui = ui;
        me.debug('SpBackupUI.init');

        $('#btnExportUserMap', ui).click(async function () {
            me.saveUserMap();
        });
        $('#btnUploadBigFile', ui).click(function () {
            var getFile = (file: File) => {
                var deferred = $.Deferred();
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    debugger;
                    deferred.resolve(e.target.result);
                };
                reader.onload = function (e) {
                };

                reader.onerror = function (e) {
                    deferred.reject(e.target.error);
                };
                reader.readAsArrayBuffer(file);
                return deferred.promise();
            };

            var f: JQuery<HTMLInputElement> = $('#userMapInput');
            for (let index = 0; index < f[0].files.length; index++) {
                const file: File = f[0].files[index];

                getFile(file).done((buffer: ArrayBuffer) => {
                    debugger;
                    var i, j, partSize = 1000000;
                    var parts = [];
                    for (i = 0, j = buffer.byteLength; i < j; i += partSize) {
                        parts.push(buffer.slice(i, i + partSize));
                    }

                    var create;
                    utils.processAsQueue(parts, part => {
                        return new Promise((resolve, reject) => {

                        });
                    }).done(() => {

                    });
                });
            }

        });

        $('#btnSetUserMap', ui).click(function () {
            var getFile = (file: File) => {
                var deferred = $.Deferred();
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    deferred.resolve(e.target.result);
                };
                reader.onerror = function (e) {
                    deferred.reject(e.target.error);
                };
                reader.readAsText(file);
                return deferred.promise();
            };

            var f: JQuery<HTMLInputElement> = $('#userMapInput');
            for (let index = 0; index < f[0].files.length; index++) {
                const file: File = f[0].files[index];

                getFile(file).done(json => {
                    me.userMap = JSON.parse(json);
                    alert('User map loaded:');
                });
            }

        });
        // $('#btnLoadUserMap', ui).click(function () {
        //     //@ts-ignore
        //     $('#userMapModal').modal('show');
        // });
        $('#btnRestore', ui).click(function () {
            var selection = me.listCtrl.getTarget();
            var list: SP.List = selection as SP.List;
            if (list) {
                me.restore(list);
            }
        });

        $('#btnBackup', ui).click(function () {
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
    saveUserMap = async function () {
        var me = this;
        var map = JSON.stringify(me.userMap);
        if (me.handle == null) {
            const fileopts: nativefs.ChooseFileSystemEntriesOptions = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
            me.handle = await app.chooseFileSystemEntries(fileopts) as nativefs.FileSystemDirectoryHandle;
        }
        var fileHandle = await me.handle.getFile('usermap.json', { create: true });
        await updateFile(fileHandle, map);
        me.handle = null;
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
        var userMap = this.userMap;
        var me = this;
        console.log(list.get_id());
        var ctx = SP.ClientContext.get_current();
        var web = ctx.get_web();
        var site = ctx.get_site();
        var webUrl = '';
        //@ts-ignore
        var rootFolder = list.get_rootFolder();
        const fileopts: nativefs.ChooseFileSystemEntriesOptions = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
        var processFolder = async (handle: nativefs.FileSystemDirectoryHandle, spFolder: SP.Folder): Promise<void> => {
            var p1 = $.Deferred();
            await utils.loadSpElem(spFolder);
            var folderName = spFolder.get_name();
            //@ts-ignore
            var folderUniqueId = spFolder.get_uniqueId().toString();

            var metaHandle: nativefs.FileSystemFileHandle;
            try {
                metaHandle = await handle.getFile('meta.json');
            } catch (error) {
                //
            }

            if (metaHandle == null) {
                p1.resolve();
            } else {

                var json = await (await metaHandle.getFile()).text();
                var meta: Array<metaInfo> = JSON.parse(json);

                var fileMetas = meta.filter(i => i.ContentTypeId.StringValue.startsWith('0x0101'));
                var dirMetas = meta.filter(i => i.ContentTypeId.StringValue.startsWith('0x0120'));

                var fileExists = function (folderId: string, fileName: string): JQuery.Promise<string> {
                    var fileCollectionEndpoint = `${webUrl}/_api/web/GetFolderById('${folderId}')/Files?$filter=Name eq '${encodeURIComponent(fileName.replace(/'/g, '\'\''))}'`;
                    var p6 = $.Deferred();
                    $.ajax(fileCollectionEndpoint, {
                        url: fileCollectionEndpoint,
                        type: 'GET',
                        processData: false,
                        headers: {
                            'accept': 'application/json;odata=verbose',
                            'X-RequestDigest': $('#__REQUESTDIGEST').val().toString(),
                            // 'content-length': buffer.byteLength
                        }
                    }).always((res) => {
                        var result = 'false';
                        try {
                            if (res.d.results.length > 0)
                                result = res.d.results[0].UniqueId;
                        } catch (e) {
                            debugger;
                            // 
                        }
                        p6.resolve(result);
                    });

                    return p6.promise();

                };
                var uploadfilerestApi = function (folderId: string, fileName: string, buffer: any, fileRef: string): JQuery.Promise<string> {
                    var p1 = $.Deferred();

                    fileExists(folderId, fileName).done(res => {

                        // big files:https://www.c-sharpcorner.com/blogs/programmatically-uploading-large-files-in-sharepoint-online
                        if (res == 'false') {
                            console.log(` ${fileRef} uploading`);

                            var fileCollectionEndpoint = `${webUrl}/_api/web/GetFolderById('${folderId}')/Files/add(overwrite=true,url='${encodeURIComponent(fileName.replace(/'/g, '\'\''))}')`;
                            $.ajax(fileCollectionEndpoint, {
                                url: fileCollectionEndpoint,
                                type: 'POST',
                                data: buffer,
                                processData: false,
                                headers: {
                                    'accept': 'application/json;odata=verbose',
                                    'X-RequestDigest': $('#__REQUESTDIGEST').val().toString(),
                                    // 'content-length': buffer.byteLength
                                }
                            }).done(res1 => {
                                p1.resolve(res1.d.UniqueId);
                            }).fail((sender, err) => {
                                p1.reject(err);
                            });

                        } else {
                            p1.resolve(res);
                        }
                    });

                    return p1.promise();
                };
                var resolveUser = (spFieldName: string, userKey: string, userInfo: string): JQuery.Promise<string> => {
                    var p7 = $.Deferred();
                    //@ts-ignore
                    if (userMap.hasOwnProperty(userKey)) {
                        p7.resolve(userMap[userKey]);
                    } else {
                        $('#userInfoRaw').html(userInfo);
                        //@ts-ignore
                        $('#exampleModal').modal('show');
                        // $('#showDlg').click();
                        var handler = () => {
                            var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

                            // Get information about all users.
                            var users = peoplePicker.GetAllUserInfo();

                            userMap[userKey] = null;
                            if (users.length > 0) {
                                userMap[userKey] = users[0].Key;
                            }
                            $('#btnUserMap1').unbind();

                            p7.resolve(userMap[userKey]);

                        };
                        $('#btnUserMap1').bind('click', handler);
                    }
                    return p7.promise();
                };
                var setMetadatOfLi = (fileInfo: metaInfo, li: SP.ListItem): JQuery.Promise<void> => {
                    var p8 = $.Deferred();
                    li.set_item('Created', new Date(fileInfo.Created));
                    li.set_item('Modified', new Date(fileInfo.Modified));
                    li.set_item('FileLeafRef', fileInfo.FileLeafRef); // rest api upload modified some characters eg removes %20

                    resolveUser('Author', fileInfo.Created_x0020_By, `UserInfo: ${fileInfo.Author.$1z_1} ${fileInfo.Author.$6L_1} ${fileInfo.Author.$7_2}`).done(author => {
                        if (author)
                            li.set_item('Author', web.ensureUser(author));
                        resolveUser('Editor', fileInfo.Modified_x0020_By, `UserInfo: ${fileInfo.Editor.$1z_1} ${fileInfo.Editor.$6L_1} ${fileInfo.Editor.$7_2}`).done(editor => {
                            if (editor)
                                li.set_item('Editor', web.ensureUser(editor));
                            li.update();
                            ctx.load(li);

                            ctx.executeQueryAsync(() => {
                                p8.resolve();
                            }, (sender, err) => {
                                console.log(err);
                                // eslint-disable-next-line no-debugger
                                debugger;
                            });
                        });
                    });
                    return p8.promise();
                };
                var setMetadata = (fileInfo: metaInfo, uniqueId: string): JQuery.Promise<void> => {

                    var p5 = $.Deferred();
                    //https://stackoverflow.com/questions/32662834/change-created-date-in-sharepoint-2013
                    // var file = web.getFileByServerRelativeUrl(escape(serverRelativeUrl));
                    //@ts-ignore
                    var file = web.getFileById(uniqueId);
                    var li: SP.ListItem = file.get_listItemAllFields();
                    setMetadatOfLi(fileInfo, li).always(() => {
                        p5.resolve();
                    });
                    return p5.promise();
                };
                //@ts-ignore
                utils.processAsQueue(fileMetas, (file) => {
                    var p3 = $.Deferred();
                    var fileName = file.FileLeafRef;

                    handle.getFile(fileName).then(f => {
                        f.getFile().then(f1 => {
                            f1.arrayBuffer().then(blob => {

                                uploadfilerestApi(folderUniqueId, fileName, blob, file.FileRef).then((uniqueId) => {
                                    setMetadata(file, uniqueId).done(() => {
                                        //console.log(`${fileName} done`);
                                    }).always(() => {
                                        p3.resolve();
                                    });
                                });
                            });
                        });
                    });
                    return p3.promise();
                }).done(() => {
                    //@ts-ignore
                    utils.processAsQueue(dirMetas, (dir) => {
                        var p2 = $.Deferred();
                        var subFolderName = dir.FileLeafRef;
                        console.log(`Folder: ${dir.FileRef}`);
                        var subFolder = spFolder.get_folders().add(subFolderName);
                        ctx.load(subFolder);
                        var li: SP.ListItem = subFolder.get_listItemAllFields();

                        setMetadatOfLi(dir, li).always(() => {
                            ctx.executeQueryAsync(() => {
                                try {
                                    handle.getDirectory(dir.ID).then(subdirHandle => {
                                        processFolder(subdirHandle, subFolder).then(() => {
                                            console.log(`SubFolder: ${subFolderName} done`);
                                            p2.resolve();
                                        });
                                    }).catch(err => {
                                        console.error({ error: err, folder: dir.ID });
                                        // eslint-disable-next-line no-debugger
                                        debugger;
                                    });

                                } catch (error) {
                                    console.error({ error: error, folder: dir.ID });
                                    // eslint-disable-next-line no-debugger
                                    debugger;
                                }
                            });
                        });


                        return p2.promise();
                    }).done(() => {
                        console.log(`Folder: ${folderName}`);
                        p1.resolve();
                    });

                });
            }

            return p1.promise();
        };
        (async () => {
            await utils.loadSpElem([rootFolder, site, web], ctx);
            webUrl = web.get_url();
            me.handle = await app.chooseFileSystemEntries(fileopts) as nativefs.FileSystemDirectoryHandle;
            await processFolder(me.handle, rootFolder);
            await me.saveUserMap();
            console.log('restore  done');
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