/// <reference types="webpack" />
/// <reference types="@types/node" />

//import * as webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';
import webpack from 'webpack';

var myWebPack = require('webpack');
var runFlag = process.argv.indexOf('--run') > -1;
console.log(process.argv);
var args = [];
//#region arguments
(() => {

    var folderPath = process.argv[1];
    var filePath = process.argv[1];
    console.log(`${filePath} ${folderPath}`);
    args = process.argv.slice(2);
    var temp = [];

    args.forEach((val, index) => {
        temp.push(`${index}: ${val}`);
    });

    var lastModified = fs.statSync(filePath).mtime.toLocaleString();
    console.log(`packer v 0.2.7 ${lastModified} run: ${runFlag} - ${temp.join(',')}\r\n`);
})();
//#endregion

var getConfig = function (debug) {
    const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

    // @ts-ignore
    var bannerOptions: webpack.BannerPlugin.Options = {
        banner:
            // @ts-ignore
            (x: { filename: string }) => {
                return `${x.filename} - ${new Date().toLocaleString()}`;
            }
    };
    var config: webpack.Configuration =
    {
        watch: true,
        entry: './src/api/def.ts',
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
                            minimize: false//debug ? false : true
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
                        { loader: 'css-loader', options: {} }]
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
                        loader: 'style-loader', // inject CSS to page
                    }, {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
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
                        options: {},
                    }]
                }
            ]
        },
        plugins: [new webpack.BannerPlugin(bannerOptions)],
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: debug ? 'api.pack.js' : 'api.pack.min.js',
            path: path.resolve(__dirname, 'dist/bundles')
        },
    };

    if (!debug)
        config.plugins.push(new TypescriptDeclarationPlugin({ out: 'spexplorerts.d.ts' }));

    return config;
};

var onDone = (err: Error, stats: webpack.Stats) => {
    if (err) {
        console.error(err);
    } else {
        console.log(stats.toString({
            chunks: false, // Makes the build much quieter
            colors: true // Shows colors in the console
        }));
        var assets: { [key: string]: { emitted: boolean, existsAt: string } } = stats.compilation.assets;
        for (const key in assets) {
            if (Object.prototype.hasOwnProperty.call(stats.compilation.assets, key)) {
                if (key == 'spexplorerts.d.ts') {
                    var htmlPath = `${path.dirname(assets[key].existsAt)}/${path.basename(assets[key].existsAt, '.js')}.html`;
                    fs.copyFile(assets[key].existsAt, htmlPath, () => { });
                }
            }
        }
    }
};

var debugConfig = getConfig(true);
var debugCompiler: webpack.Compiler = myWebPack(debugConfig);

var prodConfig = getConfig(false);
var prodCompiler: webpack.Compiler = myWebPack(prodConfig);

if (runFlag) {
    prodCompiler.run(onDone);
    debugCompiler.run(onDone);
}
else {
    var watchOptions: webpack.Compiler.WatchOptions = {};
    console.log('watching for changes');
    debugCompiler.watch(watchOptions, (err: Error, stats: webpack.Stats) => {
        console.log('debug done');
        if (err) {
            console.error(err);
        }
        prodCompiler.run(onDone);
    });

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('press any key to exit packer', (answer) => {
        rl.close();
    })
}