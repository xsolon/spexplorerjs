/// <reference path="src/defs/sharepoint/index.d.ts" />

import { JsomNode, IJsomNodeSettings, IJsomNodeInitSettings } from 'sp-jsom-node';
//import api from './logger';

import { Logger } from './Logger';

var logger = new Logger('test');

logger.log('init');

let settings: any = require('c:\\sc\\sample\\private.json');
let jsomNodeOptions: IJsomNodeInitSettings = {
    siteUrl: settings.siteUrl,
    authOptions: settings
};

try {
    (new JsomNode(jsomNodeOptions)).init();
} catch (e) {
    console.log(e);
}

(async () => {

    const ctx = SP.ClientContext.get_current();
    let oListsCollection = ctx.get_web().get_lists();

    ctx.load(oListsCollection, 'Include(Title)');
    await ctx.executeQueryPromise(); // Using JSOM extension

    let listsTitlesArr = oListsCollection.get_data()
        .map(l => l.get_title());

    console.log('Lists', listsTitlesArr);

})();

import './logger.js';
debugger;
console.log('Hello world');