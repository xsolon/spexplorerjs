// import { CodeMirrorEditor } from '../components/codemirroreditor';
import { TinyLogger } from '../components/tinylogger';
import '@pnp/polyfill-ie11';
import 'core-js/fn/object/assign';
require('../../node_modules/proxy-polyfill/proxy.min.js');
// import 'proxy-polyfill';
//import 'core-js';
// import { sp, Web } from '@pnp/sp/presets/all';
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

        import('./MyAsyncClass').then((d => {
            debugger;
            var dd = d.MyAsyncClass;
        }));
        // sp.setup({
        //     ie11: true,
        // });
        // var lists = await sp.web.lists.select('Title', 'ID').get();
        // lists.forEach(list => {
        //     logger.log(list.Title);
        // });
        // var title = (await sp.web()).Title;
        // logger.log(title);
    }
}

var driver = new Page1();

driver.buildUI();