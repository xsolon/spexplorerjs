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
        // in IE console.debug not always available
        if (this.shouldDebug && console) {
            if (console.debug) {
                console.debug(message);
            }
            else if (console.log) {
                console.log(message);
            }
        }
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