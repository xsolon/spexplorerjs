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
//# sourceMappingURL=tinylogger.js.map