/// <reference types='webpack' />
import webpack from 'webpack';

var folderPath = process.argv[1];
(() => { // init
  const args = process.argv.slice(2);
  var temp = [];
  var folderPath = process.argv[1];
  args.forEach((val, index) => {
    temp.push(`${index}: ${val}`);
  });

  console.log(`packer v 0.2.2: ${temp.join(',')}\r\n`);
})();

var MonacoWebpackPlugin1 = require('monaco-editor-webpack-plugin');
var LZString = require('lz-string');
var fs = require("fs");
var path = require("path");
// @ts-ignore - ugh
webpack = webpack || require("webpack");
var getConfig = function (debug = true) {

  var config: webpack.Configuration =
  {
    watch: true,
    entry: {
      //main:'./src/codeMirrorSample.ts',
      //search:'./src/components/SearchBox.ts',
      filesystem: './src/drivers/filesystem.ts',
      //monaco: './src/monacoSample.ts',
    },
    devtool: debug ? "inline-source-map" : false,
    optimization: {
      minimize: debug ? false : true
    },
    mode: debug ? "development" : "production",
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [{
            loader: "html-loader",
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
          use: [{ loader: "style-loader", options: {} },
          { loader: "css-loader", options: {} }]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            "url-loader"
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
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new MonacoWebpackPlugin1({
        languages: ['typescript'],
        // features: ['folding']
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
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

compiler.run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  } else {
    var watchOptions: webpack.Compiler.WatchOptions
      = {};
    console.log('watching for changes');
    compiler.watch(watchOptions, (err: Error, stats: any) => {
      if (err) {
        console.error(err);
      }
      console.log('updated...');
      // console.log(stats.toString({
      //   chunks: false,  // Makes the build much quieter
      //   colors: true    // Shows colors in the console
      // }));

    });
    // updateTemplate(true);
  }

  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }));
});