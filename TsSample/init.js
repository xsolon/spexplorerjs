"use strict";
// init window asap
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global['document'] = document;
global['window'] = window;
const jQuery = require("jquery");
if (jQuery.Deferred == null) { // lets check jQuery is working
    throw 'no deferred';
}
//# sourceMappingURL=init.js.map