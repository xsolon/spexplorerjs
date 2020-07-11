"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var utils = ns.modules.funcs;
var SpBackupUI = /** @class */ (function (_super) {
    __extends(SpBackupUI, _super);
    function SpBackupUI(el, opts) {
        var _this = _super.call(this, 'SpBackupUI') || this;
        _this.log('{version}');
        var me = _this;
        var ui = $(el);
        ui.html(tmp);
        _this.listCtrl = new fieldselector_1.ListSelector($('#listSelect', ui));
        me.ui = ui;
        me.debug('SpBackupUI.init');
        $('button', ui).click(function () {
            var selection = me.listCtrl.getTarget();
            var list = selection;
            if (list) {
                me.backup(list);
            }
        });
        if (opts && opts.target) {
            me.setTarget(opts.target);
        }
        else {
            var ctx = SP.ClientContext.get_current();
            me.setTarget(ctx.get_web());
        }
        return _this;
    }
    SpBackupUI.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args && args.length == 1)
            args = args[0];
        console && console.debug && console.debug(args);
    };
    SpBackupUI.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args && args.length == 1)
            args = args[0];
        console && console.log && console.log(args);
        $('#log', this.ui).append("<li>" + args + "</li>");
    };
    SpBackupUI.prototype.backup = function (list) {
        var me = this;
        var opts = { type: nativefs.ChooseFileSystemEntriesType.opendirectory };
        var ctx = SP.ClientContext.get_current();
        //@ts-ignore
        var app = window;
        var backupNode = function (List) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, web, site, webUrl, list, web, rootFolder, listDal, processFolder, p1;
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
                                var updateFile, downloadFile, spitems, items, file, json, subFolders, folderArr;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
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
                                            downloadFile = function (serverRelativeUrl) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    var p2, url, xhr;
                                                    return __generator(this, function (_a) {
                                                        p2 = $.Deferred();
                                                        me.log(serverRelativeUrl);
                                                        url = webUrl + "/_api/web/GetFileByServerRelativeUrl('" + serverRelativeUrl + "')/$value";
                                                        xhr = new window.XMLHttpRequest();
                                                        xhr.open('GET', url, true);
                                                        xhr.responseType = 'arraybuffer';
                                                        xhr.addEventListener('load', function () {
                                                            return __awaiter(this, void 0, void 0, function () {
                                                                var data, blob, bits, fileName, file;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            if (!(xhr.status === 200)) return [3 /*break*/, 3];
                                                                            data = new Uint8Array(xhr.response);
                                                                            blob = new Blob([data]);
                                                                            bits = serverRelativeUrl.split('/');
                                                                            fileName = bits[bits.length - 1];
                                                                            return [4 /*yield*/, currentHandle.getFile(fileName, { create: true })];
                                                                        case 1:
                                                                            file = _a.sent();
                                                                            return [4 /*yield*/, updateFile(file, blob)];
                                                                        case 2:
                                                                            _a.sent();
                                                                            p2.resolve();
                                                                            _a.label = 3;
                                                                        case 3: return [2 /*return*/];
                                                                    }
                                                                });
                                                            });
                                                        });
                                                        xhr.send();
                                                        return [2 /*return*/, p2.promise()];
                                                    });
                                                });
                                            };
                                            return [4 /*yield*/, currentHandle.getDirectory(folder.get_name(), { create: true })];
                                        case 1:
                                            currentHandle = _a.sent();
                                            return [4 /*yield*/, utils.loadSpElem(folder)];
                                        case 2:
                                            _a.sent();
                                            me.log('Folder:' + folder.get_name());
                                            return [4 /*yield*/, listDal.getAll(list, '<View />', folder.get_serverRelativeUrl())];
                                        case 3:
                                            spitems = _a.sent();
                                            items = [];
                                            return [4 /*yield*/, utils.processAsQueue(spitems, function (i) { return __awaiter(_this, void 0, void 0, function () {
                                                    var fields, ctypeid, fileRef;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                fields = i.get_fieldValues();
                                                                items.push(fields);
                                                                ctypeid = fields.ContentTypeId['$12_1'] || fields.ContentTypeId['$17_1'] || fields.ContentTypeId.get_stringValue();
                                                                if (!ctypeid.startsWith('0x0101')) return [3 /*break*/, 2];
                                                                fileRef = i.get_item('FileRef');
                                                                return [4 /*yield*/, downloadFile(fileRef)];
                                                            case 1:
                                                                _a.sent();
                                                                _a.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 4:
                                            _a.sent();
                                            return [4 /*yield*/, currentHandle.getFile('meta.json', { create: true })];
                                        case 5:
                                            file = _a.sent();
                                            if (!(items.length > 0)) return [3 /*break*/, 7];
                                            json = JSON.stringify(items);
                                            //d.fromJson({LookupId:19,LookupValue:'asdf',Email:'martin@test.com'})
                                            //'{"$1p_1":19,"$5c_1":"asdf","$6_2":"martin@test.com"}{"$1p_1":19,"$5c_1":"asdf","$6_2":"martin@test.com"}'.replace(/\$1p_1/g,'LookupValue')
                                            json = json.replace(/\$1p_1/g, 'LookupId').replace(/\$5c_1/g, 'LookupValue').replace(/\$6_2/g, 'Email')
                                                .replace(/\$12_1/g, 'StringValue')
                                                .replace(/\$17_1/g, 'StringValue');
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
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, processFolder(f, currentHandle)];
                                                            case 1:
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
                            me.log('Backup Complete');
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
}(ns.modules.logger));
exports.SpBackupUI = SpBackupUI;
//# sourceMappingURL=backup.js.map