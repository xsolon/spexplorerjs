// import { CodeMirrorEditor } from '../components/codemirroreditor';
import { TinyLogger } from '../components/tinylogger';
var $ = require('jquery');

import 'bootstrap';
import '../custom.scss';
import '../test.css';
var logger = new TinyLogger();

class Page1 {
    constructor() {

        logger.log('init 0.1');

    }
    buildUI() {

        logger.log('buildUI');
        logger.log($.fn.jquery);
    }
}

var driver = new Page1();

driver.buildUI();