/// <reference types="webpack" />
/// <reference types="@types/node" />
// @ts-ignore
import webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';

var args = [];
//#region arguments
(() => {
  var folderPath = process.argv[1];
  var itemPath = process.argv[0];
  console.log(`${folderPath} ${itemPath}`);
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
  var MonacoWebpackPlugin1 = require('monaco-editor-webpack-plugin');

  var config: webpack.Configuration =
  {
    watch: true,
    entry: {
      //main:'./src/codeMirrorSample.ts',
      //search:'./src/components/SearchBox.ts',
      filesystem: './src/drivers/filesystem.ts',
      //monaco: './src/monacoSample.ts',
    },
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
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1, }),
      new webpack.BannerPlugin({
        // @ts-ignore
        banner: (/*v: any*/) => {
          return ` ${new Date().toLocaleDateString()}`;
        }
      }),
      new MonacoWebpackPlugin1({
        languages: ['typescript'],
        // features: ['folding']
      })
    ],
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    output: {
      publicPath: '/js/',
      filename: debug ? '[name].js' : '[name].min.js',
      path: path.resolve(__dirname, 'public/js'),
    }
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
        if (key != 'editor.worker.js' && key != 'ts.worker.js') {
          buildStandaloneTestPage(key, assets[key].existsAt);
          buildLocalSpPage(key, assets[key].existsAt);
        }
      }
    }
    console.log(new Date().toLocaleTimeString());
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