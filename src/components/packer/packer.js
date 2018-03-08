var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var chokidar = require('chokidar');

var files = [
    //"./src/components/string/string.js",
    //"./src/components/loader/loader.js",
    //"./src/components/logger/logger.js",
    "./src/components/datatables/datatables.js",
    //"./src/pages/index/index.js"
];
var runWebPack = function (debug, filePath) {

    var execPath = process.cwd();
    console.log("Execution path:" + execPath);
    var srcDir = path.resolve(execPath, path.dirname(filePath));
    var publicDir = path.resolve(execPath, srcDir.replace("src", "public"));
    var moduleName = path.basename(filePath);
    var outputName = debug ? moduleName : moduleName.replace(".js", ".min.js");
    //var debug = process.env.NODE_ENV !== "production";
    console.log(publicDir);
    console.log("debug: " + debug);
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
    var template = ``;
    var localTemplatePath = path.resolve(srcDir, "widget.html");
    if (fs.existsSync(localTemplatePath)) {
        template = localTemplatePath;
    }

    const compiler = webpack({
        optimization: {
            minimize: debug ? false : true
        },
        context: srcDir,
        mode: debug ? "development" : "production",
        devtool: debug ? false : "sourcemap",
        entry: path.resolve(execPath, filePath),
        output: {
            path: publicDir,
            filename: outputName
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['css-loader']
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
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            //presets: ['@babel/preset-env'],
                            presets: ["es2015"],
                            //plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                        }
                    }
                }
            ]
        },
        plugins: debug ? [] : [
            // new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
            new webpack.LoaderOptionsPlugin({
                //       minimize: true
            })
            , new HtmlWebpackPlugin({ template: template, appMountId: 'moduledef', inject: true, inlineSource: '.(js|css)$' })
            //, new HtmlWebpackInlineSourcePlugin()
        ]
    });

    compiler.run((err, stats) => {
        if (err) {
            console.error(err);
            return;
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
        .on('add', path => console.log(`File ${path} has been added`))
        .on('change', path => {
            console.log(path);
            runWebPack(true, path);
            runWebPack(false, path);
        })
        .on('unlink', path => {
            console.log(`File ${path} has been removed`);
            watcher.add(path);
        });

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Press enter to exit ', (answer) => {
        rl.close();
        watcher.close();
    });



};

module.exports.updateAll = function () {

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        runWebPack(true, file);
        runWebPack(false, file);
    }
};

module.exports.runWebPack = runWebPack;