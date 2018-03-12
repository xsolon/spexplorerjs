var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var chokidar = require("chokidar");
var widgetTransforms = require("./widgettransforms.js");
var files = [
    "./src/components/string/string.js"
    //,"./src/components/loader/loader.js"
    //,"./src/components/logger/logger.js"
    //,"./src/components/datatables/datatables.js"
    //, "./src/components/sp/sp.web.js"
    , "./src/components/mirrors/jseditor.js"
    , "./src/components/mirrors/jsmirror.js"
    //, "./src/components/mirrors/xmleditor.js"
    //, "./src/components/mirrors/xmlmirror.js"
    , "./src/components/sp/treelight.js"
    , "./src/components/sp/list.selector.js"
    , "./src/components/sp/field.selector.js"
    //"./src/pages/index/index.js"
];
var runWebPack = function (debug, filePath) {

    var execPath = process.cwd();
    console.log("Execution path:" + execPath);
    var srcDir = path.resolve(execPath, path.dirname(filePath));
    var publicDir = path.resolve(execPath, srcDir.replace("src", "public"));
    var moduleName = path.basename(filePath);

    var modulePath = path.resolve(execPath, filePath.replace(".js", ".module.js"));
    var template = ``;
    var localTemplatePath = path.resolve(srcDir, "template.html");
    if (fs.existsSync(modulePath)) {
        var module = require(modulePath);
        if (typeof module.sample === "string") {
            localTemplatePath = path.resolve(srcDir, module.sample);
        }
    }

    var outputName = debug ? moduleName : moduleName.replace(".js", ".min.js");
    //var debug = process.env.NODE_ENV !== "production";
    console.log(publicDir);
    console.log("debug: " + debug);
    var HtmlWebpackPlugin = require("html-webpack-plugin");
    //var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
    var prodPlugins = [
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new webpack.LoaderOptionsPlugin({
            //       minimize: true
        })
        //, new HtmlWebpackInlineSourcePlugin()
    ];
    if (fs.existsSync(localTemplatePath)) {
        template = localTemplatePath;
        console.log("template:" + template);
        prodPlugins.push(new HtmlWebpackPlugin({
            template: template,
            inject: false,
            inlineSource: ".(js|css)$",
            filename: path.basename(localTemplatePath)
        }));
    }

    var entry = path.resolve(execPath, filePath);

    if (!fs.existsSync(entry)) {
        throw "entry not found" + entry;
    }
    const compiler = webpack({
        optimization: {
            minimize: debug ? false : true
        },
        context: srcDir,
        mode: debug ? "development" : "production",
        devtool: debug ? false : "sourcemap",
        entry: entry,
        output: {
            path: publicDir,
            filename: outputName
        },
        module: {
            rules: [
                {
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }]
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: false
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        emitError: true,
                        emitWarning: true,
                        fix: true
                    }
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: [
                        'url-loader'
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'url-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            //presets: ['@babel/preset-env'],
                            presets: ["es2015"]
                            //plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                        }
                    }
                }
            ]
        },
        stats: {
            colors: true,
            modules: true,
            reasons: true,
            errorDetails: true
        },
        plugins: prodPlugins
    });

    compiler.run((err, stats) => {
        if (err) {
            console.error(err);
            return;
        } else {

            var samplePath = localTemplatePath.replace("src", "public");
            if (fs.existsSync(samplePath)) {
                widgetTransforms.createWidget(samplePath, execPath);
            }

        }

        console.log(stats.toString({
            chunks: false,  // Makes the build much quieter
            colors: true    // Shows colors in the console
        }));
    });
};

module.exports.watch = function () {

    var watcher = chokidar.watch(files, {
        //ignored: /(^|[\/\\])\../,
        persistent: true
    });

    watcher
        .on("add", path => console.log(`File ${path} has been added`))
        .on("change", path => {
            console.log(path);
            runWebPack(true, path);
            runWebPack(false, path);
        })
        .on("unlink", path => {
            console.log(`File ${path} has been removed`);
            watcher.add(path);
        });

    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Press enter to exit ", (answer) => {
        rl.close();
        watcher.close();
    });

};

module.exports.updateAll = function () {

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        runWebPack(true, file);
        //runWebPack(false, file);
    }
};

module.exports.runWebPack = runWebPack;