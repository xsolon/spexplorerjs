"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types='spexplorerts' />
require("./init.js");
const Api = require("spexplorerts");
const sp_jsom_node_1 = require("sp-jsom-node");
try {
    //new Api.Logger().
    //import * as Deployment from './deployment';
    var path = '<path>.json';
    var restorePath = '<path>.json';
    //var logger = new Api.Logger("test");
    //var utils = new Api.funcs();
    //logger.log('Hello World');
    let settings = require(path);
    let restoreSettings = require(restorePath);
    let jsomNodeOptions = {
        siteUrl: settings.siteUrl,
        authOptions: settings
    };
    try {
        (new sp_jsom_node_1.JsomNode(jsomNodeOptions)).init();
    }
    catch (e) {
        console.log(e);
    }
    const ctx = SP.ClientContext.get_current();
    console.log('connected...');
    var list = new Api.ListMeta('config');
    Api.backupList(list, ctx, 'c:\\temp\\backuptest', settings).done(function () {
    });
    //Deployment.backupLists(ctx, settings);
    //Deployment.restoreLists(ctx, settings, restoreSettings);
}
catch (e) {
    debugger;
}
//# sourceMappingURL=app.js.map