"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(name) {
        this.shouldLog = true;
        this.shouldDebug = true;
        this.shouldTrace = true;
        this.name = name;
    }
    Logger.prototype.log = function (message) {
        this.shouldLog && console && console.log(message);
    };
    Logger.prototype.debug = function (message) {
        this.shouldDebug && console && console.debug(message);
    };
    Logger.prototype.trace = function (message) {
        this.shouldTrace && console && console.trace(message);
    };
    Logger.prototype.error = function (message) {
        console && console.error(message);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.api.js.map