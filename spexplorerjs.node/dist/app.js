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
Object.defineProperty(exports, "__esModule", { value: true });
var sp_jsom_node_1 = require("sp-jsom-node");
var backups = require("./backups/backups.node");
//#region jQuery init
var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;
var window = new JSDOM().window;
var document = (new JSDOM('')).window.document;
global['document'] = document;
global['window'] = window;
var jQuery = require("jquery");
var $ = jQuery; //(window) as JQueryStatic;
global['$'] = $;
//#endregion 
//import * as sprequest from 'sp-request';
require("fs");
console.log('v0.1');
try {
    //#region startup
    var path = 'c:\\sc\\creds_localMartin.json';
    var settings_1 = require(path);
    var jsomNodeOptions = {
        siteUrl: settings_1.siteUrl,
        authOptions: settings_1
    };
    var jsomSettings = {
        envCode: 'spo',
        modules: ['documentmanagement', 'taxonomy']
    };
    var ctx_1 = new sp_jsom_node_1.JsomNode(jsomSettings).init(jsomNodeOptions).getContext();
    console.log('init...');
    //#endregion
    if (false)
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var oListsCollection, listsTitlesArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oListsCollection = ctx_1.get_web().get_lists();
                        ctx_1.load(oListsCollection, 'Include(Title)');
                        return [4 /*yield*/, ctx_1.executeQueryPromise()];
                    case 1:
                        _a.sent(); // Using JSOM extension
                        listsTitlesArr = oListsCollection.get_data()
                            .map(function (l) { return l.get_title(); });
                        console.log('Lists', listsTitlesArr);
                        return [2 /*return*/];
                }
            });
        }); })()
            .catch(console.error);
    var basicTest = function () {
        var web = ctx_1.get_web();
        web.update();
        ctx_1.load(web);
        ctx_1.executeQueryAsync(function () {
            debugger;
            console.log(web.get_title());
        }, function (s, e) {
            console.log(e.get_message());
        });
    };
    // basicTest();
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('starting');
                    return [4 /*yield*/, backups.backupNode(ctx_1, 'Site Assets', settings_1)];
                case 1:
                    _a.sent();
                    console.log('done');
                    return [2 /*return*/];
            }
        });
    }); })();
}
catch (e) {
    // eslint-disable-next-line no-debugger
    debugger;
    console.log(e);
}
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What do you think of Node.js? ', function (answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback: " + answer);
    rl.close();
});
//# sourceMappingURL=app.js.map