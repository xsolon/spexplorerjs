"use strict";
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
        logger.log('buildUI');
        logger.log($.fn.jquery);
    };
    return Page2;
}());
var driver = new Page2();
driver.buildUI();
//# sourceMappingURL=page2.js.map