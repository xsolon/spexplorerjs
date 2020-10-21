"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { CodeMirrorEditor } from '../components/codemirroreditor';
var tinylogger_1 = require("../components/tinylogger");
var $ = require('jquery');
var logger = new tinylogger_1.TinyLogger();
var Page2 = /** @class */ (function () {
    function Page2() {
        logger.log('init 0.1');
    }
    Page2.prototype.buildUI = function () {
        Promise.resolve().then(function () { return __importStar(require('./MyAsyncClass')); }).then((function (d) {
            debugger;
            var dd = d.MyAsyncClass;
        }));
        logger.log('buildUI');
        logger.log($.fn.jquery);
    };
    return Page2;
}());
var driver = new Page2();
//# sourceMappingURL=page2.js.map