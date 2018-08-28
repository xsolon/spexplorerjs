var ug = require("uglify-js");
var fs = require("fs");
var path = require("path");
var Linter = require("eslint").Linter;
var linter = new Linter();

var myUglify = function (jsSourcePath) {
    console.log('simple uglify ' + jsSourcePath);
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

    var minPath = jsSourcePath.replace(fileName, minFileName);
    console.log('minPath:' + minPath);
    fs.writeFileSync(minPath, result.code, "utf8");
    fs.writeFileSync(jsSourcePath.replace(fileName, sourceFileName), result.map, "utf8");

    if (result.error)
        console.log(result.error);    // runtime error, `undefined` in this case

    if (result.warnings)
        console.log(result.warnings); // [ 'Dropping unused variable u [0:1,18]' ]

};

var sourceUglify = function (files, destFile) {
    var fileName = path.basename(destFile);
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

    var opts = {};
    var sourceMapReplace = [];
    for (var i = 0; i < files.length; i++) {
        var fullUrl = files[i].replace("src/", "/").replace("public/", "/");

        var ifileName = path.basename(files[i]);
        opts[ifileName] = fs.readFileSync(files[i], "utf8");

        sourceMapReplace.push({ fileName: ifileName, siteRelativeUrl: fullUrl });
    }
    var result = ug.minify(opts, options);

    fs.writeFileSync(destFile.replace(fileName, minFileName), result.code, "utf8");

    // update map to reference files by server relative url ---------------------------------------
    // changing sources":["logger.js","loader.js"]
    // to : sources":["/components/logger/logger.js","/components/loader/loader.js"]
    var map = result.map;
    for (var j = 0; j < sourceMapReplace.length; j++) {
        var kv = sourceMapReplace[j];
        map = map.replace('"' + kv.fileName + '"', '"' + kv.siteRelativeUrl + '"');
    }
    // --------------------------------------------------------------------------------------------
    fs.writeFileSync(destFile.replace(fileName, sourceFileName), map, "utf8");

    if (result.error)
        console.log(result.error);    // runtime error, `undefined` in this case

    if (result.warnings)
        console.log(result.warnings); // [ 'Dropping unused variable u [0:1,18]' ]

};

var compileModules = function (files) {

};
var lintFix = function (src) {
    console.log(src);
    var source = fs.readFileSync(src, "utf8");
    console.log(source);
    var fileName = path.basename(src);
    var result = linter.verifyAndFix(source, {
        "env": {
            "browser": true,
            "es6": false
        },
        "extends": "eslint:recommended",
        "parserOptions": {
            "sourceType": "script"
        },
        "rules": {
            "indent": [
                "error",
                "tab"
            ],
            "linebreak-style": [
                "error",
                "windows"
            ],
            "quotes": [
                "error",
                "double"
            ],
            "semi": [
                "error",
                "always"
            ],
            strict: ["error", "global"],
            "no-console": ["error", { allow: ["warn", "error", "log"] }]

        }
    }, { filename: fileName });

    if (result.fixed) {
        fs.writeFileSync(src, result.output, "utf8");
    } else
        console.log(result);
};
var srcToPublic = function (src) {

    var fileName = path.basename(src);
    var moduleDir = path.dirname(src);
    var moduleFilePath = path.resolve(moduleDir,"module.js");
    console.log(moduleFilePath);
    var compiledDir = "public/components/" + fileName.replace(".js", "") + "/";
    var destFile = compiledDir + fileName;
    var module = require(moduleFilePath);
    var definition = module.definition();

    console.log(module.definition());
    var concatOptions = {
        warnings: true,
        toplevel: false,
        mangle: false, compress: false
        , output: {
            beautify: false,
            preamble: "/* " + new Date() + "*/"
        }
    };

    return;
    var opts = {};
    var files = module.dependencies;
    console.log(files);
    for (var i = 0; i < files.length; i++) {
        var ifileName = path.basename(files[i]);

        opts[ifileName] = fs.readFileSync(files[i], "utf8");
    }
    opts[fileName] = definition;
    var result = ug.minify(opts, concatOptions);

    fs.writeFileSync(destFile, result.code, "utf8");

    lintFix(destFile);
    myUglify(destFile);
};
var compileModule = function (file) {
    lintFix(file);
    var fileName = path.basename(file);
    var minFileName = fileName.replace(".js", ".min.js");
    var sourceFileName = minFileName + ".map";

    var compiledPath = "public/components/" + fileName.replace(".js", "") + "/";
    var destFile = compiledPath + fileName;
    var module = require("./" + file);

    var definition = module.definition.toString();
    definition = definition.substring(definition.indexOf("{") + 1, definition.lastIndexOf("}")).trim();
    fs.writeFileSync(destFile, definition, "utf8");

    lintFix(destFile);

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

    var opts = {};
    var sourceMapReplace = [];
    module.dependencies.push(destFile);
    var files = module.dependencies;
    console.log(files);
    for (var i = 0; i < files.length; i++) {
        var ifileName = path.basename(files[i]);
        try {
            var fullUrl = files[i].replace("src/", "/").replace("public/", "/");

            opts[ifileName] = fs.readFileSync(files[i], "utf8");

            sourceMapReplace.push({ fileName: ifileName, siteRelativeUrl: fullUrl });
        } catch (e) {
            console.error('Error for ' + ifileName);
            console.error(e.toString());
        }
    }
    var result = ug.minify(opts, options);

    fs.writeFileSync(destFile.replace(fileName, minFileName), result.code, "utf8");

    // update map to reference files by server relative url ---------------------------------------
    // changing sources":["logger.js","loader.js"]
    // to : sources":["/components/logger/logger.js","/components/loader/loader.js"]
    var map = result.map;
    for (var j = 0; j < sourceMapReplace.length; j++) {
        var kv = sourceMapReplace[j];
        map = map.replace('"' + kv.fileName + '"', '"' + kv.siteRelativeUrl + '"');
    }
    // --------------------------------------------------------------------------------------------
    fs.writeFileSync(destFile.replace(fileName, sourceFileName), map, "utf8");

    if (result.error)
        console.log(result.error);    // runtime error, `undefined` in this case

    if (result.warnings)
        console.log(result.warnings); // [ 'Dropping unused variable u [0:1,18]' ]

};
srcToPublic("src/components/loader/loader.js");
//sourceUglify(["public/components/logger/logger.js",
//    "src/components/loader/loader.js"],
//    "public/components/loader/loader.js");
//myUglify('public/components/logger/logger.js');
//myUglify('public/components/loader/loader.js');