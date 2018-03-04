var ug = require("uglify-js");
var fs = require("fs");
var path = require('path');

var myUglify = function (jsSourcePath) {
    var fileName = path.basename(jsSourcePath);
    var minFileName = fileName.replace(".js", ".min.js");
    var sourceFileName = minFileName + ".map";

    var options = {
        warnings: true,
        toplevel: false,
        mangle: {
            properties: { keep_quoted: true }
            , keep_fnames: true
        }
        , sourceMap: {
            filename: minFileName
            , url: sourceFileName
            //root: "http://localhost:3000/components",
        }
        , compress: false// { global_defs: { //"@console.log": "alert" }, //passes: 2 },
        , output: {
            beautify: false,
            preamble: "/* uglified */"
        }
    };

    var source = fs.readFileSync(jsSourcePath, "utf8");
    var opts = {};
    opts[fileName] = source;
    var result = ug.minify(opts, options);

    fs.writeFileSync(jsSourcePath.replace(fileName, minFileName), result.code, "utf8");
    fs.writeFileSync(jsSourcePath.replace(fileName, sourceFileName), result.map, "utf8");

    if (result.error)
        console.log(result.error);    // runtime error, `undefined` in this case

    if (result.warnings)
        console.log(result.warnings); // [ 'Dropping unused variable u [0:1,18]' ]

};

myUglify('public/components/logger/logger.js');
myUglify('public/components/loader/loader.js');