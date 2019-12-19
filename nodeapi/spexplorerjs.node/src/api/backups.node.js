"use strict";
/// <reference types="sharepoint" />
/// <reference types="node" />
/// <reference types="sp-request" />
Object.defineProperty(exports, "__esModule", { value: true });
//v 0.1
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var window = new JSDOM().window;
var document = (new JSDOM('')).window.document;
global['document'] = document;
global['window'] = window;
var fs = require('fs');
var path = require('path');
//import * as Api from './def.api';
var jQuery = require("jquery");
var j$ = jQuery;
//import * as Schema from "./schema";
var sprequest = require("sp-request");
var logger_api_1 = require("./logger.api");
var utils_api_1 = require("./utils.api");
var list_api_1 = require("./list.api");
var trace = new logger_api_1.Logger("backups.node");
var utils = new utils_api_1.funcs();
function backupList(listDef, ctx, localFolder, settings) {
    trace.log("backing-up " + listDef.title);
    var listDal = new list_api_1.ListApi(ctx);
    var lDfd = j$.Deferred();
    var web = ctx.get_web();
    var list = web.get_lists().getByTitle(listDef.title);
    ctx.load(web);
    ctx.load(list);
    ctx.executeQueryAsync(function () {
        var caml = "<View><ViewFields>";
        var fields = 'ID|Created|Modified|Author|Editor|Title'.split('|');
        if (list.get_enableAttachments()) {
            fields.push("Attachments");
        }
        fields.forEach(function (field) {
            caml += "<FieldRef Name='" + field + "' />";
        });
        listDef.fields.forEach(function (field) {
            caml += "<FieldRef Name='" + field.name + "' />";
            fields.push(field.name);
        });
        caml += "</ViewFields></View>";
        //var cdw = process.cwd();
        var localPath = path.join(localFolder, "./lists/" + listDef.title);
        var data = []; //serializable friendly array of items
        var webUrl = web.get_url();
        var downloadFile = function (serverRelativeUrl, filePath) {
            var queryUrl = webUrl + "/_api/web/GetFileByServerRelativeUrl('" + serverRelativeUrl + "')/$value";
            var opts = {
                encoding: null,
                method: 'GET',
                url: queryUrl,
                headers: {
                    json: false,
                    'Accept': '*/*',
                    'Content-Type': 'application/octet-stream',
                    'Accept-Encoding': 'gzip, deflate, br'
                }, callback1: function (error, response, body) {
                    debugger;
                    var req = require('request');
                    opts.headers = response.request.headers;
                    var r = req(opts);
                    r.on('response', function (res) {
                        res.pipe(fs.createWriteStream('c:\\temp\\pic2.png'));
                    });
                }
            };
            var spr = sprequest.create(settings);
            spr.get(opts).then(function (response) {
                fs.writeFile(filePath, response.body, function (err) {
                    if (err)
                        console.log(err);
                });
            }).catch(function (err) {
                debugger;
                console.log(err);
            });
        };
        var processItem = function (li) {
            var itemdfd = j$.Deferred();
            var item = {}; // serilizable
            fields.forEach(function (field) {
                var value = li.get_item(field);
                if (Array.isArray(value) && value.length > 0) {
                    var temp = [];
                    value.forEach(function (i) {
                        var s = serializeFriendlyValue(i);
                        temp.push(s);
                    });
                    value = temp;
                }
                else {
                    value = serializeFriendlyValue(value);
                }
                item[field] = value;
            });
            var attachmentsLocalPath = path.join(localPath, "/" + item.ID + "/Attachments");
            var mkdrip = require('mkdirp');
            mkdrip(attachmentsLocalPath, function (err) {
                if (err) {
                    debugger;
                    console.error(err);
                }
                if (item.Attachments === true) {
                    item.AttachmentList = [];
                    var attachments = li.get_attachmentFiles();
                    ctx.load(attachments);
                    var folderUrl = settings.webUrl + "/Lists/" + listDef.title + "/Attachments/" + item.ID;
                    var attFolder = web.getFolderByServerRelativeUrl(folderUrl);
                    var attFiles = attFolder.get_files();
                    ctx.load(attFiles, 'Include(ServerRelativeUrl,Name,Author)');
                    ctx.executeQueryAsync(function () {
                        utils.collectionToArray(attFiles).forEach(function (att) {
                            var attServerRelativeUrl = att.get_serverRelativeUrl();
                            var localAttPath = path.join(attachmentsLocalPath, att.get_name());
                            downloadFile(attServerRelativeUrl, localAttPath);
                            var author = att.get_author();
                            var authorLookup = {
                                LookupId: author.get_id(),
                                LookupValue: author.get_loginName(), Email: author.get_email()
                            };
                            item.AttachmentList.push({
                                LocalPath: localAttPath,
                                name: att.get_name(),
                                author: authorLookup
                            });
                        });
                        data.push(item);
                        itemdfd.resolve();
                    }, function () {
                        debugger;
                    });
                }
                else {
                    data.push(item);
                    itemdfd.resolve();
                }
            });
            return itemdfd.promise();
        };
        var serializeFriendlyValue = function (value) {
            if (value && SP.FieldLookupValue.isInstanceOfType(value)) {
                var lookup = value;
                var temp = { LookupId: lookup.get_lookupId(), LookupValue: lookup.get_lookupValue() };
                if (SP.FieldUserValue.isInstanceOfType(value)) {
                    var userLookup = value;
                    temp.Email = userLookup.get_email();
                }
                value = temp;
            }
            return value;
        };
        trace.log('getting items');
        listDal.getAll(list, caml).done(function (items) {
            trace.log("Item #: " + items.length);
            utils.processAsQueue(items, function (li) {
                return processItem(li);
            }).done(function () {
                var filePath = path.join(localPath, "data.json");
                var json = JSON.stringify(data, null, '\t');
                fs.writeFile(filePath, json, function (err) {
                    if (err)
                        console.log(err);
                    lDfd.resolve();
                });
            });
        });
    }, function () {
        debugger;
    });
    return lDfd.promise();
}
exports.backupList = backupList;
;
function restoreList(listDef, ctx, localFolder, settings) {
    var listDal = new list_api_1.ListApi(ctx);
    listDal.ensureList(listDef).then(function (list) {
        ctx.load(list);
        ctx.executeQueryAsync(function () {
            if (list.get_enableAttachments()) {
            }
            //var cdw = process.cwd();
            var localPath = path.join(localFolder, "./lists/" + listDef.title);
            var filePath = path.join(localPath, "data.json");
            var dataitems = require(filePath);
            dataitems.forEach(function (n) {
                delete n['Attachments'];
                delete n['ID'];
                delete n['Editor'];
                delete n['Modified'];
                delete n['Created'];
                delete n['Author'];
            });
            listDal.addItems(dataitems, list).done(function () {
                lDfd.resolve();
            });
        }, function () {
            debugger;
        });
    });
    trace.log("restore " + listDef.title);
    //var web = ctx.get_web();
    //var list = web.get_lists().getByTitle(listDef.title);
    var lDfd = j$.Deferred();
    return lDfd.promise();
}
exports.restoreList = restoreList;
;
//export function backupLists(ctx: SP.ClientContext, settings: any) {
//	var defs = new Schema.Defs(settings.webUrl);
//	var utils = new Api.funcs();
//	var listDal = new Api.ListDal(ctx);
//	var lists = defs.getLists();
//	utils.processAsQueue<ListMeta>(lists, function (def) {
//		trace.log(`starting backup ${def.title}`);
//		return backupList(def).done(function () {
//			trace.log(`backup ${def.title} done`);
//		});
//	}).done(function () {
//		trace.log('backup complete');
//	});
//};
function restoreLists(ctx, settings, sourceSettings) {
    //var defs = new Schema.Defs(settings.webUrl);
    //var utils = new Api.funcs();
    //var listDal = new Api.ListDal(ctx);
    //var lists = defs.getLists();
    //lists = [defs.configListDef()];
    //utils.processAsQueue<ListMeta>(lists, function (def) {
    //	trace.log(`starting restore ${def.title}`);
    //	return restoreList(def).done(function () {
    //		trace.log(`restore ${def.title} done`);
    //	});
    //}).done(function () {
    //	trace.log('restore complete');
    //});
}
exports.restoreLists = restoreLists;
;
function buildWebSchema(settings) {
    //var defs = new Schema.Defs(settings.webUrl);
    //var cdw = process.cwd();
    //var localPath = path.join(cdw, './src/schema');
    //console.log(localPath);
    //defs.getLists().forEach(function (list) {
    //	var classStr = Api.classBuilder(list);
    //	var filePath = path.join(localPath, `${list.title}Def.ts`);
    //	fs.writeFile(filePath, classStr, function (err) {
    //		if (err)
    //			console.log(err);
    //	});
    //});
}
exports.buildWebSchema = buildWebSchema;
;
//# sourceMappingURL=backups.node.js.map