"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CodeMirrorEditor } from '../components/codemirroreditor';
var tinylogger_1 = require("../components/tinylogger");
var $ = require('jquery');
require("bootstrap");
require("../custom.scss");
require("../test.css");
var logger = new tinylogger_1.TinyLogger();
var Page1 = /** @class */ (function () {
    function Page1() {
        logger.log('init 0.1');
    }
    Page1.prototype.buildUI = function () {
        logger.log('buildUI');
        logger.log($.fn.jquery);
    };
    return Page1;
}());
var driver = new Page1();
driver.buildUI();
//# sourceMappingURL=page1.js.map