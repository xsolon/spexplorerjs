var packer  = require('./src/components/packer/packer.js');
var debug=true;
var fs = require('fs');

var file = './src/components/loader/loader.js';
file = './src/components/logger/logger.js';

packer.runWebPack(debug,file);
packer.runWebPack(false,file);
