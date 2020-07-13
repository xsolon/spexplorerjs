// import { CodeMirrorEditor } from '../components/codemirroreditor';
import { TinyLogger } from '../components/tinylogger';
import '@pnp/polyfill-ie11';
import 'core-js/fn/object/assign';
//import 'core-js';
import { sp, Web } from '@pnp/sp/presets/all';
var $ = require('jquery');

import 'bootstrap';
import '../custom.scss';
import '../test.css';
var logger = new TinyLogger();

class Page1 {
    constructor() {

        logger.log('init 0.2');

    }
    async buildUI() {

        logger.log('buildUI');
        logger.log($.fn.jquery);

        sp.setup({
            // set ie 11 mode
            ie11: true,
            // only needed when working within SharePoint Framework
            // spfxContext: this.context
        });
        //var web = await sp.web();
        var lists = await sp.web.lists.select('Title', 'ID').get();
        lists.forEach(list => {
            logger.log(list.Title);
        });
        var title = (await sp.web()).Title;
        // const w = Web(_spPageContextInfo.webAbsoluteUrl);
        // const r = await w();
        logger.log(title);
        // var config  :SPConfiguration={

        // };
        // sp.setup()
    }
}

var driver = new Page1();

driver.buildUI();