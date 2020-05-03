/// <reference types="webpack" />
/// <reference types="@types/node" />

// @ts-ignore
import webpack from 'webpack';
import path from 'path';

var args = [];
//#region arguments
(() => {
    var folderPath = process.argv[1];
    console.log(folderPath);
    args = process.argv.slice(2);
    var temp = [];

    args.forEach((val, index) => {
        temp.push(`${index}: ${val}`);
    });

    console.log(`packer v 0.2.2: ${temp.join(',')}\r\n`);
})();
//#endregion

var buildLocalSpPage = function (entryname: string, resPath: string) {
    buildStandaloneTestPage(entryname, resPath, true);
};
var buildStandaloneTestPage = function (entryname: string, resPath: string, local = false) {
    var LZString = require('lz-string');
    var fs = require('fs');
    var filename = path.basename(entryname, '.js');

    var suffix = '';
    var tmpPath = './src/templates/spexplorerjs.aspx';
    var script = '';
    if (local) {
        tmpPath = './src/templates/spexplorerjs.local.aspx';
        script = path.basename(entryname);
        suffix = '.local';
    } else {
        script = fs.readFileSync(resPath).toString();
        script = LZString.compressToBase64(script);
    }
    var template = fs.readFileSync(tmpPath).toString();
    template = template.replace('{0}', script);

    var destPath = `./public/standalone/${filename}${suffix}.aspx`;
    fs.writeFileSync(destPath, template);

};

// @ts-ignore - ugh
webpack = webpack || require('webpack');
var getConfig = function (debug = true) {
    const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

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
        plugins: [
            new TypescriptDeclarationPlugin({
                out: 'spexplorerts.d.ts'
            })
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: debug ? 'api.pack.js' : 'api.pack.min.js',
            path: path.resolve(__dirname, 'dist/bundles')
        },
    };

    return config;
};
var debugConfig = getConfig(true);
var compiler = webpack(debugConfig);

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
                console.log(key);
                if (key != 'editor.worker.js' && key != 'ts.worker.js') {
                    buildStandaloneTestPage(key, assets[key].existsAt);
                    buildLocalSpPage(key, assets[key].existsAt);
                }
            }
        }
    }
};
var watch = () => {
    var watchOptions: webpack.Compiler.WatchOptions = {};
    console.log('watching for changes');
    compiler.watch(watchOptions, onDone);
};
var run = () => {
    compiler.run((err: Error, stats: webpack.Stats) => {
        onDone(err, stats);
        watch();
    });
};

if (args.length > 0 && args[0] == 'run') {
    run();
} else
    watch();