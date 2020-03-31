"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_api_1 = require("./logger.api");
var utils_api_1 = require("./utils.api");
var list_api_1 = require("./list.api");
var jQuery = require("jquery");
if (typeof window != 'undefined') {
    window['spexplorerjs'] = {
        modules: {
            logger: logger_api_1.Logger,
            utils: utils_api_1.funcs,
            listapi: list_api_1.ListApi,
            listdal: list_api_1.ListDal,
            jQuery: jQuery
        }
    };
}
//# sourceMappingURL=def.api.js.map