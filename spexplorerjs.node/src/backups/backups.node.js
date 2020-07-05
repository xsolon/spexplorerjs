"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="sharepoint" />
/// <reference types="sp-request" />
var fs = __importStar(require("fs"));
//v 0.1
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var window = new JSDOM().window;
var document = (new JSDOM('')).window.document;
global['document'] = document;
global['window'] = window;
var path = require('path');
//import * as Api from './def';
var jQuery = require("jquery");
var j$ = jQuery;
//import * as Schema from "./schema";
var sprequest = __importStar(require("sp-request"));
var logger_1 = require("../api/logger");
var utils_1 = require("../api/utils");
var list_1 = require("../api/list");
var trace = new logger_1.Logger("backups.node");
var utils = new utils_1.funcs();
function backupNode(ctx, List, settings) {
    return __awaiter(this, void 0, void 0, function () {
        var web, site, serverRelativeUrl, webUrl, downloadFile, list, web, rootFolder, listDal, processFolder, path, p1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    web = ctx.get_web();
                    site = ctx.get_site();
                    ctx.load(web);
                    return [4 /*yield*/, utils.loadSpElem(site)];
                case 1:
                    _a.sent();
                    serverRelativeUrl = web.get_serverRelativeUrl();
                    webUrl = web.get_url();
                    downloadFile = function (serverRelativeUrl, filePath) {
                        return __awaiter(this, void 0, void 0, function () {
                            var queryUrl, opts, spr, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        queryUrl = webUrl + "/_api/web/GetFileByServerRelativeUrl('" + serverRelativeUrl + "')/$value";
                                        opts = {
                                            encoding: null,
                                            method: 'GET',
                                            url: queryUrl,
                                            headers: {
                                                json: false,
                                                'Accept': '*/*',
                                                'Content-Type': 'application/octet-stream',
                                                'Accept-Encoding': 'gzip, deflate, br'
                                            }
                                            // , callback1: function (error, response, body) {
                                            // 	debugger;
                                            // 	opts.headers = response.request.headers;
                                            // 	var r = req(opts);
                                            // 	r.on('response', function (res) {
                                            // 		res.pipe(fs.createWriteStream(filePath));
                                            // 	});
                                            // }
                                        };
                                        spr = sprequest.create(settings);
                                        return [4 /*yield*/, spr.get(opts)];
                                    case 1:
                                        res = _a.sent();
                                        fs.writeFileSync(filePath, res.body);
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    if (typeof List == 'string') {
                        web = ctx.get_web();
                        list = web.get_lists().getByTitle(List);
                    }
                    else {
                        list = List;
                    }
                    rootFolder = list.get_rootFolder();
                    listDal = new list_1.ListApi(ctx);
                    return [4 /*yield*/, utils.loadSpElem(list)];
                case 2:
                    _a.sent();
                    processFolder = function (folder, localPath) { return __awaiter(_this, void 0, void 0, function () {
                        var spitems, items, metapath, subFolders, folderArr;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!fs.existsSync(localPath)) {
                                        fs.mkdirSync(localPath);
                                    }
                                    ctx.load(folder);
                                    return [4 /*yield*/, ctx.executeQueryPromise()];
                                case 1:
                                    _a.sent();
                                    console.log('processing ' + folder.get_name());
                                    return [4 /*yield*/, listDal.getAll(list, '<View />', folder.get_serverRelativeUrl())];
                                case 2:
                                    spitems = _a.sent();
                                    items = [];
                                    // await spitems.forEach(async i => {
                                    // });
                                    return [4 /*yield*/, utils.processAsQueue(spitems, function (i) { return __awaiter(_this, void 0, void 0, function () {
                                            var fields, ctypeid, fileRef, fileLeafRef, fullPath;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        fields = i.get_fieldValues();
                                                        items.push(fields);
                                                        ctypeid = fields.ContentTypeId['$17_1'];
                                                        if (!ctypeid.startsWith("0x0101")) return [3 /*break*/, 2];
                                                        fileRef = i.get_item('FileRef');
                                                        fileLeafRef = i.get_item('FileLeafRef');
                                                        fullPath = localPath + '\\' + fileLeafRef;
                                                        if (!!fs.existsSync(fullPath)) return [3 /*break*/, 2];
                                                        console.log(fullPath);
                                                        return [4 /*yield*/, downloadFile(fileRef, fullPath)];
                                                    case 1:
                                                        _a.sent();
                                                        _a.label = 2;
                                                    case 2: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 3:
                                    // await spitems.forEach(async i => {
                                    // });
                                    _a.sent();
                                    metapath = localPath + '\\meta.json';
                                    if (items.length > 0) {
                                        if (!fs.existsSync(localPath)) {
                                            fs.mkdirSync(localPath);
                                        }
                                        fs.writeFileSync(metapath, JSON.stringify(items));
                                    }
                                    subFolders = folder.get_folders();
                                    ctx.load(subFolders);
                                    return [4 /*yield*/, ctx.executeQueryPromise()];
                                case 4:
                                    _a.sent();
                                    folderArr = utils.collectionToArray(subFolders);
                                    return [4 /*yield*/, utils.processAsQueue(folderArr, function (f) { return __awaiter(_this, void 0, void 0, function () {
                                            var name, subPath;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        name = f.get_name();
                                                        subPath = localPath + "\\" + name + "\\";
                                                        return [4 /*yield*/, processFolder(f, subPath)];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    path = 'c:\\temp\\backups';
                    return [4 /*yield*/, processFolder(rootFolder, path)];
                case 3:
                    _a.sent();
                    console.log('backupNode.done');
                    p1 = $.Deferred();
                    return [2 /*return*/, p1.promise()];
            }
        });
    });
}
exports.backupNode = backupNode;
function backupList(listDef, ctx, localFolder, settings) {
    trace.log("backing-up " + listDef.title + " ");
    var listDal = new list_1.ListApi(ctx);
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
            caml += "< FieldRef Name = '" + field + "' /> ";
        });
        listDef.fields.forEach(function (field) {
            caml += "< FieldRef Name = '" + field.name + "' /> ";
            fields.push(field.name);
        });
        caml += "< /ViewFields></View > ";
        //var cdw = process.cwd();
        var localPath = path.join(localFolder, "./ lists / " + listDef.title + " ");
        var data = []; //serializable friendly array of items
        var webUrl = web.get_url();
        var downloadFile = function (serverRelativeUrl, filePath) {
            var queryUrl = webUrl + " /_api/web / GetFileByServerRelativeUrl('" + serverRelativeUrl + "') / $value";
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
            var attachmentsLocalPath = path.join(localPath, "/ " + item.ID + " /Attachments");
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
    var listDal = new list_1.ListApi(ctx);
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