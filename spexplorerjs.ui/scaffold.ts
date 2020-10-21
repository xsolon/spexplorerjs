import { Template } from 'webpack';

var glob = require('glob');
import * as path from 'path';
//path.
//var path = require('path');
var options = null;
var getCleanName = (fileName: string) => {
    var name = path.basename(fileName, '.d.ts');
    name = name.replace(/-/g, '');
    return name;
};
var printRef = (files: string[]) => {
    var tmp: string[] = [];
    var dic: { [key: string]: number } = {};
    files.forEach(file => {

        var name = getCleanName(file);
        dic[name] = (dic[name] || 0) + 1;
        name += dic[name];
        var logicalPath = file.replace('./node_modules', 'file:///node_modules');
        tmp.push(`monaco.languages.typescript.typescriptDefaults.addExtraLib(${name}, '${logicalPath}')`);
    });

    return tmp.join('\n');
};
var printImport = (files: string[]) => {
    var tmp: string[] = [];
    var dic: { [key: string]: number } = {};
    files.forEach(file => {

        var name = getCleanName(file);
        dic[name] = (dic[name] || 0) + 1;
        name += dic[name];
        var logicalPath = file.replace('./node_modules/', '');
        tmp.push(`var ${name}= require('${logicalPath}')`);
    });

    return tmp.join('\n');
};
glob('./node_modules/@pnp/**/*.d.ts', options, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    // var temp = JSON.stringify(files);

    var temp = [];
    temp.push(printImport(files));
    temp.push(printRef(files));

    console.log(temp.join('\n'));
});