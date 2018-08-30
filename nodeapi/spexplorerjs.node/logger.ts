// v 1.0.8: 2018-08-11  - define namespace if needed
// v 1.0.7: 2018-08-09  - remove dependency on funcs.js
// v 1.0.6: 2018-05-17  - assert, addOnTraceHandler allows additional event hanlders for trace
// v 1.0.4: 2018-04-28  - move definition to modules
// v 1.0.2: 2018-04-28  - match spexplorerjs.trace
// v 0.0.3: 2018-04-28  - removed jQuery dependency
// v 0.0.2: 2018-04-02  - remove try/catch by probing from window.console, let it fail otherwise
// v 0.0.1: 2018-03-28  - debug, get

(function (ns) {

    var format = function format() {
        /// TODO: unit test, breaks in some cases
        var args = arguments;
        var tmpl = args[0];
        for (var i = 0; i < args.length - 1; i++) {
            var s = "\\{" + i + "\\}";
            var reg1 = new RegExp(s, "g");
            tmpl = tmpl.replace(reg1, encodeURIComponent(args[i + 1]));
        }
        try {
            tmpl = decodeURIComponent(tmpl);
        } catch (e) {

            console && console.error(e);
            throw e;
        }

        return tmpl;
    };

    var isConsole = typeof console !== 'undefined';

    var logf = function (...args: any[]) {
        var msg = format.apply(format, arguments);
        if (this && this.source) {
            msg = this.source + ": " + msg;
        }
        isConsole && console.log.apply(console, [msg]);
    };
    var log = function () {
        if (this && this.source) {
            if (arguments.length === 1 && typeof arguments[0] == "string") {
                logf("{0}: {1}", this.source, arguments[0]);
            } else {
                var obj = {};
                obj[this.source] = arguments;
                if (arguments.length === 1) obj[this.source] = arguments[0];
                isConsole && console.log.apply(console, [obj]);
            }
        }
        //if (this && this.source && arguments.length === 1 && typeof arguments[0] == "string") {
        //	let s = this.source + ": "; for (let i = 0; i < arguments.length; i++) {
        //		s += `{${i}} `;
        //	}
        //	var msg = logf(s, arguments[0]);
        //	console.log.apply(console, [msg]);
        //	var obj = {};
        //	obj[this.source] = arguments;
        //	console.log.apply(console, [obj]);
        //         }
        else isConsole && console.log.apply(console, arguments);
        //jQuery("#depLog").append(String.format("<li>{0}</li>", arguments[0]));
    };
    var error = function () {
        isConsole && console.error.apply(console, arguments);
    };
    var warn = function () {
        isConsole && console.warn.apply(console, arguments);
    };
    var assert = function () {
        isConsole && console.assert.apply(console, arguments);
    };
    var debug = function () {
        isConsole && console.log.apply(console, arguments);
    };

    var logger = {
        "version": "1.0.6",
        logf: logf, "log": log, "error": error, "warn": warn, "debug": debug, "assert": assert
    };

    var defineScopedTracing = function defineScopedTracing(source: string, debugging: boolean, onTraceH?: Function) {
        var onTraceArray = [];
        (onTraceH && onTraceArray.push(onTraceH));
        var onTrace = function (...args: any[]) {
            var args1 = arguments;
            onTraceArray.forEach(function (n) {
                n(args1);
            });
        };
        var scopedAssert = (function () {
            var d = function () {
                logger.assert.apply(scopedAssert, arguments);
                onTrace && onTrace({ type: "assert", args: arguments });
            };
            d['source'] = source;
            return d;
        })();

        var scopedLog = (function () {
            var d = function () {
                logger.log.apply(scopedLog, arguments);
                onTrace && onTrace({ type: "log", args: arguments });
            };
            d['source'] = source;
            return d;
        })();
        var scopedError = (function () {
            var d = function d() {
                logger.error.apply(scopedError, arguments);
                onTrace && onTrace({ type: "error", args: arguments });
            };
            d['source'] = source;
            return d;
        })();
        var scopedDebug = (function () {
            var d = function d() {
                if (debugging) {
                    logger.log.apply(scopedDebug, arguments);
                    onTrace && onTrace({ type: "debug", args: arguments });
                }
            };
            d['source'] = source;
            return d;
        })();
        var scopedWarn = (function () {
            var d = function d() {
                logger.error.apply(scopedWarn, arguments);
                onTrace && onTrace({ type: "warn", args: arguments });
            };
            d['source'] = source;
            return d;
        })();

        return {
            addOnTraceHandler: function (handler) {
                (handler && onTraceArray.push(handler));
            },
            log: scopedLog,
            error: scopedError,
            debug: scopedDebug,
            warn: scopedWarn,
            assert: scopedAssert
        };
    };

    logger['get'] = defineScopedTracing;

    /// TODO: this should be private
    var debug = (typeof window === 'undefined') ? true : window.location.href.search(/local/i) > 0;
    logger['trace'] = defineScopedTracing("logger", debug);
    ns.modules.logger = logger;
    ns.modules.logger.trace.debug(logger.version);

    return ns.logger;

    // both of these dependencies are resolved in string.js
})(spexplorerjs = (typeof spexplorerjs === 'undefined') ? { modules: {} } : spexplorerjs);

module.exports = spexplorerjs;