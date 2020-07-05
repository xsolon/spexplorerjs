import { JsomNode, IJsomNodeContext, IJsomNodeSettings } from 'sp-jsom-node';
import * as backups from './backups/backups.node';
//#region jQuery init
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global['document'] = document;
global['window'] = window;
import jQuery = require('jquery');
var $ = jQuery;//(window) as JQueryStatic;
global['$'] = $;
//#endregion 

//import * as sprequest from 'sp-request';
import 'fs';

console.log('v0.1');
try {
    //#region startup
    var path = 'c:\\sc\\creds_localMartin.json';

    let settings: any = require(path);
    let jsomNodeOptions: IJsomNodeContext = {
        siteUrl: settings.siteUrl,
        authOptions: settings
    };

    const jsomSettings: IJsomNodeSettings = {
        envCode: 'spo',
        modules: ['documentmanagement', 'taxonomy']
    };
    const ctx = new JsomNode(jsomSettings).init(jsomNodeOptions).getContext();
    console.log('init...');
    //#endregion

    if (false)
        (async () => {
            const oListsCollection = ctx.get_web().get_lists();

            ctx.load(oListsCollection, 'Include(Title)');
            await ctx.executeQueryPromise(); // Using JSOM extension

            const listsTitlesArr = oListsCollection.get_data()
                .map((l) => l.get_title());

            console.log('Lists', listsTitlesArr);

        })()
            .catch(console.error);

    var basicTest = function () {
        var web = ctx.get_web();
        web.update();
        ctx.load(web);
        ctx.executeQueryAsync(() => {
            debugger;
            console.log(web.get_title());
        }, (s, e) => {
            console.log(e.get_message());
        });
    };
    // basicTest();

    (async () => {
        console.log('starting');
        await backups.backupNode(ctx, 'Site Assets', settings);
        console.log('done');
    })();
} catch (e) {
    // eslint-disable-next-line no-debugger
    debugger;
    console.log(e);
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});