"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpBackupUI = void 0;
var Api = __importStar(require("spexplorerts"));
var fieldselector_1 = require("./fieldselector");
var app = window['spexplorerts'];
var $ = app.modules.jQuery;
var tmp = __importStar(require("../templates/ui.backup.html"));
// eslint-disable-next-line no-unused-vars
var nativefs = __importStar(require("./nativefs"));
// @ts-ignore
var w = window;
var ns = w.spexplorerts;
var trace = new ns.modules.logger('logger');
trace.shouldDebug = true;
var utils = ns.modules.funcs;
// class DriveNativeAL{
//     ensureFolder();
// }
var SpBackupUI = /** @class */ (function () {
    function SpBackupUI(el, opts) {
        var me = this;
        var ui = $(el);
        ui.html(tmp);
        this.listCtrl = new fieldselector_1.ListSelector($('#listSelect', ui));
        me.ui = ui;
        trace.log('FieldSelector.init');
        if (opts && opts.target) {
            me.setTarget(opts.target);
        }
        $('button', ui).click(function () {
            var selection = me.listCtrl.getTarget();
            var list = selection;
            if (list) {
                me.backup(list);
            }
        });
    }
    SpBackupUI.prototype.backup = function (list) {
        var me = this;
        var opts = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
        var ctx = SP.ClientContext.get_current();
        //@ts-ignore
        var app = window;
        var backupNode = function (List) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, web, site, webUrl, downloadFile, list, web, rootFolder, listDal, processFolder, p1;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = me;
                            _b = me.handle;
                            if (_b) return [3 /*break*/, 2];
                            return [4 /*yield*/, app.chooseFileSystemEntries(opts)];
                        case 1:
                            _b = (_c.sent());
                            _c.label = 2;
                        case 2:
                            _a.handle = _b;
                            web = ctx.get_web();
                            site = ctx.get_site();
                            ctx.load(web);
                            return [4 /*yield*/, utils.loadSpElem(site)];
                        case 3:
                            _c.sent();
                            webUrl = web.get_url();
                            downloadFile = function (serverRelativeUrl, filePath) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var queryUrl, opts;
                                    return __generator(this, function (_a) {
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
                                        };
                                        return [2 /*return*/];
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
                            listDal = new Api.ListApi(ctx);
                            return [4 /*yield*/, utils.loadSpElem([list, rootFolder])];
                        case 4:
                            _c.sent();
                            processFolder = function (folder, currentHandle) { return __awaiter(_this, void 0, void 0, function () {
                                var spitems, items, file, updateFile, json, subFolders, folderArr;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, currentHandle.getDirectory(folder.get_name(), { create: true })];
                                        case 1:
                                            currentHandle = _a.sent();
                                            return [4 /*yield*/, utils.loadSpElem(folder)];
                                        case 2:
                                            _a.sent();
                                            console.log('processing ' + folder.get_name());
                                            return [4 /*yield*/, listDal.getAll(list, '<View />', folder.get_serverRelativeUrl())];
                                        case 3:
                                            spitems = _a.sent();
                                            items = [];
                                            return [4 /*yield*/, utils.processAsQueue(spitems, function (i) { return __awaiter(_this, void 0, void 0, function () {
                                                    var fields, ctypeid;
                                                    return __generator(this, function (_a) {
                                                        fields = i.get_fieldValues();
                                                        items.push(fields);
                                                        ctypeid = fields.ContentTypeId['$17_1'] || fields.ContentTypeId.get_stringValue();
                                                        if (ctypeid.startsWith('0x0101')) {
                                                            // var fileRef = i.get_item('FileRef');
                                                            // var fileLeafRef = i.get_item('FileLeafRef');
                                                            // var fullPath = localPath + '\\' + fileLeafRef;
                                                            // if (!fs.existsSync(fullPath)) {
                                                            //     console.log(fullPath);
                                                            //     await downloadFile(fileRef, fullPath);
                                                            // }
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 4:
                                            _a.sent();
                                            return [4 /*yield*/, currentHandle.getFile('meta.json', { create: true })];
                                        case 5:
                                            file = _a.sent();
                                            updateFile = function (file, content) { return __awaiter(_this, void 0, void 0, function () {
                                                var writable;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, file.createWritable()];
                                                        case 1:
                                                            writable = _a.sent();
                                                            //@ts-ignore
                                                            return [4 /*yield*/, writable.write(content)];
                                                        case 2:
                                                            //@ts-ignore
                                                            _a.sent(); // Write the contents of the file to the stream.
                                                            return [4 /*yield*/, writable.close()];
                                                        case 3:
                                                            _a.sent(); // Close the file and write the contents to disk.
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); };
                                            if (!(items.length > 0)) return [3 /*break*/, 7];
                                            json = JSON.stringify(items);
                                            return [4 /*yield*/, updateFile(file, json)];
                                        case 6:
                                            _a.sent();
                                            _a.label = 7;
                                        case 7:
                                            subFolders = folder.get_folders();
                                            return [4 /*yield*/, utils.loadSpElem(subFolders)];
                                        case 8:
                                            _a.sent();
                                            folderArr = utils.collectionToArray(subFolders);
                                            return [4 /*yield*/, utils.processAsQueue(folderArr, function (f) { return __awaiter(_this, void 0, void 0, function () {
                                                    var name;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                name = f.get_name();
                                                                return [4 /*yield*/, currentHandle.getDirectory(name, { create: true })];
                                                            case 1:
                                                                currentHandle = _a.sent();
                                                                return [4 /*yield*/, processFolder(f, currentHandle)];
                                                            case 2:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 9:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); };
                            return [4 /*yield*/, processFolder(rootFolder, me.handle)];
                        case 5:
                            _c.sent();
                            console.log('backupNode.done');
                            p1 = $.Deferred();
                            return [2 /*return*/, p1.promise()];
                    }
                });
            });
        };
        try {
            backupNode(list);
        }
        catch (error) {
            // eslint-disable-next-line no-debugger
            debugger;
        }
    };
    SpBackupUI.prototype.setTarget = function (target) {
        this.target = target;
        this.listCtrl.setTarget(target);
    };
    return SpBackupUI;
}());
exports.SpBackupUI = SpBackupUI;
//# sourceMappingURL=backup.js.map