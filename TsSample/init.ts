// init window asap

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global['document'] = document;
global['window'] = window;
import jQuery = require('jquery');

if (jQuery.Deferred == null) { // lets check jQuery is working
	throw 'no deferred'
}