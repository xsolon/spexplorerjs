
// import { CodeMirrorEditor } from '../components/codemirroreditor';
import { TinyLogger } from '../components/tinylogger';
var $ = require('jquery');
var logger = new TinyLogger();
class Page2 {
    constructor() {

        logger.log('init 0.1');

    }
    buildUI() {

        import('./MyAsyncClass').then((d => {
            debugger;
            var dd = d.MyAsyncClass;
        }));
        logger.log('buildUI');
        logger.log($.fn.jquery);
    }
}

var driver = new Page2();
