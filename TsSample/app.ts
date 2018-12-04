﻿import './init.js';
import * as Api from 'spexplorerts';
import { JsomNode, IJsomNodeSettings, IJsomNodeInitSettings } from 'sp-jsom-node';
try {

//import * as Deployment from './deployment';

var path = '<path>.json';
var restorePath = '<path>.json';

//var logger = new Api.Logger("test");
//var utils = new Api.funcs();
//logger.log('Hello World');

let settings: any = require(path);
let restoreSettings: any = require(restorePath);

let jsomNodeOptions: IJsomNodeInitSettings = {
	siteUrl: settings.siteUrl,
	authOptions: settings
};

try {
	(new JsomNode(jsomNodeOptions)).init();
} catch (e) {
	console.log(e);
}

const ctx = SP.ClientContext.get_current();
console.log('connected...');

var list: Api.ListMeta = new Api.ListMeta('config');

Api.backupList(list, ctx, 'c:\\temp\\backuptest', settings).done(function () {

});
	//Deployment.backupLists(ctx, settings);
	//Deployment.restoreLists(ctx, settings, restoreSettings);
} catch (e) {
	debugger;
}