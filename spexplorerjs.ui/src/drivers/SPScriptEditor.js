"use strict";
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
///
var all_1 = require("@pnp/sp/presets/all");
var codemirroreditor_1 = require("../components/codemirroreditor");
var uihtml = __importStar(require("../templates/spscripteditor.html"));
require("bootstrap");
require("../custom.scss");
var backup_1 = require("../components/backup");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var listTitle, listEnsureResult, list, $, items, select, titleField, idField, code, ctx, spweb, splist;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                listTitle = 'My scripts';
                return [4 /*yield*/, all_1.sp.web.lists.ensure(listTitle)];
            case 1:
                listEnsureResult = _a.sent();
                list = listEnsureResult.list;
                if (!listEnsureResult.created) return [3 /*break*/, 5];
                console.log('My List was created!');
                return [4 /*yield*/, listEnsureResult.list.fields.addMultilineText('Script', 10, false, true, false, false)];
            case 2:
                _a.sent();
                return [4 /*yield*/, listEnsureResult.list.fields.addMultilineText('Xml', 10, false, true, false, false)];
            case 3:
                _a.sent();
                return [4 /*yield*/, list.items.add({
                        Title: 'Test 1', Script: 'Test 123', Xml: '<div/>'
                    })];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                console.log('My List already existed!');
                _a.label = 6;
            case 6:
                $ = require('jquery');
                $('#ui').html(uihtml);
                return [4 /*yield*/, list.items.getAll(10)];
            case 7:
                items = _a.sent();
                select = $('#lstScripts');
                items.forEach(function (x) {
                    var title = x['Title'];
                    var id = x['ID'];
                    var opthtml = "<option value='" + id + "'>" + title + "</option>";
                    var opt = $(opthtml);
                    opt.prop('data-item', x);
                    select.append(opt);
                });
                titleField = $('#txtTitle');
                idField = $('#txtID');
                code = new codemirroreditor_1.CodeMirrorEditor('#txtScript');
                code.setTarget('ES2017');
                select.change(function () {
                    var selectedOption = $(':selected', select);
                    var item = selectedOption.prop('data-item');
                    titleField.val(item.Title);
                    idField.val(item.ID);
                    code.Code(item.Script);
                    code.Xml(item.Xml);
                    console.log(item);
                });
                ctx = SP.ClientContext.get_current();
                spweb = ctx.get_web();
                splist = spweb.get_lists().getByTitle(listTitle);
                ctx.load(splist);
                ctx.executeQueryAsync(function () {
                    var backupCtrl = new backup_1.SpBackupUI($('#backupCtrl'), { target: splist });
                });
                // backupCtrl.setTarget(spweb);
                $('#btnBackup').click(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                }); });
                $('#btnSave').click(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var el, _a, id;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {
                                    Title: titleField.val()
                                };
                                return [4 /*yield*/, code.Code()];
                            case 1:
                                _a.Script = _b.sent();
                                return [4 /*yield*/, code.Xml()];
                            case 2:
                                el = (_a.Xml = _b.sent(),
                                    _a);
                                id = parseInt(idField.val().toString());
                                if (id == 0) {
                                    list.items.add(el);
                                }
                                else {
                                    list.items.getById(id).update(el);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=SPScriptEditor.js.map