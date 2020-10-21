"use strict";
/// <reference types="webpack" />
/// <reference types="@types/node" />
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
//import * as webpack from 'webpack';
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var webpack_1 = __importDefault(require("webpack"));
var myWebPack = require('webpack');
var runFlag = process.argv.indexOf('--run') > -1;
console.log(process.argv);
var args = [];
//#region arguments
(function () {
    var folderPath = process.argv[1];
    var filePath = process.argv[1];
    console.log(filePath + " " + folderPath);
    args = process.argv.slice(2);
    var temp = [];
    args.forEach(function (val, index) {
        temp.push(index + ": " + val);
    });
    var lastModified = fs.statSync(filePath).mtime.toLocaleString();
    console.log("packer v 0.2.7 " + lastModified + " run: " + runFlag + " - " + temp.join(',') + "\r\n");
})();
//#endregion
var getConfig = function (debug) {
    var TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');
    // @ts-ignore
    var bannerOptions = {
        banner: 
        // @ts-ignore
        function (x) {
            return x.filename + " - " + new Date().toLocaleString();
        }
    };
    var config = {
        watch: true,
        entry: './src/index.ts',
        devtool: debug ? 'inline-source-map' : false,
        optimization: {
            minimize: debug ? false : true
        },
        mode: debug ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [{
                            loader: 'html-loader',
                            options: {
                                minimize: false //debug ? false : true
                            }
                        }]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader', options: {} },
                        { loader: 'css-loader', options: {} }
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'url-loader'
                    ]
                },
                {
                    test: /\.(scss)$/,
                    use: [{
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader'
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }, {
                            loader: 'sass-loader' // compiles Sass to CSS
                        }]
                },
                {
                    test: /\.ttf$/,
                    use: [{
                            loader: 'url-loader',
                            options: {}
                        }]
                }
            ]
        },
        plugins: [new webpack_1["default"].BannerPlugin(bannerOptions)],
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: debug ? 'api.pack.js' : 'api.pack.min.js',
            path: path.resolve(__dirname, 'dist/bundles')
        }
    };
    if (!debug)
        config.plugins.push(new TypescriptDeclarationPlugin({ out: 'spexplorerts.d.ts' }));
    return config;
};
var onDone = function (err, stats) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(stats.toString({
            chunks: false,
            colors: true // Shows colors in the console
        }));
        var assets = stats.compilation.assets;
        for (var key in assets) {
            if (Object.prototype.hasOwnProperty.call(stats.compilation.assets, key)) {
                if (key == 'spexplorerts.d.ts') {
                    var htmlPath = path.dirname(assets[key].existsAt) + "/" + path.basename(assets[key].existsAt, '.js') + ".html";
                    fs.copyFile(assets[key].existsAt, htmlPath, function () { });
                }
            }
        }
    }
};
var debugConfig = getConfig(true);
var debugCompiler = myWebPack(debugConfig);
var prodConfig = getConfig(false);
var prodCompiler = myWebPack(prodConfig);
if (runFlag) {
    prodCompiler.run(onDone);
    debugCompiler.run(onDone);
}
else {
    var watchOptions = {};
    console.log('watching for changes');
    debugCompiler.watch(watchOptions, function (err, stats) {
        console.log('debug done');
        if (err) {
            console.error(err);
        }
        prodCompiler.run(onDone);
    });
    var readline = require('readline');
    var rl_1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl_1.question('press any key to exit packer', function (answer) {
        rl_1.close();
    });
}
