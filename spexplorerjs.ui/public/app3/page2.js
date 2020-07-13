(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2"],{

/***/ "./src/app3/page2.ts":
/*!***************************!*\
  !*** ./src/app3/page2.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { CodeMirrorEditor } from '../components/codemirroreditor';
var tinylogger_1 = __webpack_require__(/*! ../components/tinylogger */ "./src/components/tinylogger.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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


/***/ }),

/***/ "./src/components/tinylogger.ts":
/*!**************************************!*\
  !*** ./src/components/tinylogger.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TinyLogger = /** @class */ (function () {
    function TinyLogger() {
    }
    TinyLogger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
    };
    return TinyLogger;
}());
exports.TinyLogger = TinyLogger;


/***/ })

},[["./src/app3/page2.ts","runtime","base"]]]);
//# sourceMappingURL=page2.js.map