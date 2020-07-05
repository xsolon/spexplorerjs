"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <references types="jquery"/>
var logger_1 = require("./logger");
var utils_1 = require("./utils");
var list_1 = require("./list");
if (typeof window !== 'undefined') {
    // @ts-ignore
    var w = window;
    w.spexplorerjs = w.spexplorerjs || {
        version: '1.0.7',
        modules: {
            logger: logger_1.Logger,
            funcs: new utils_1.funcs(),
            utils: utils_1.funcs,
            listapi: list_1.ListApi,
            listdal: list_1.ListDal,
            folderapi: list_1.FolderApi,
            webapi: list_1.WebApi,
            jQuery: require('jquery')
        }
    };
    w.spexplorerts = w.spexplorerts || w.spexplorerjs;
}
//# sourceMappingURL=def.js.map