﻿import { JsomNode, IJsomNodeSettings, IJsomNodeInitSettings } from 'sp-jsom-node';
import api from './logger';

let settings: any = require('c:\\sc\\irm\\private.json');
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