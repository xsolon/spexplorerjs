/// <reference types="webpack" />
/// <reference types="@types/node" />
// @ts-ignore
import webpack from 'webpack';
import * as path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var MonacoWebpackPlugin1 = require('monaco-editor-webpack-plugin');
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

  console.log(`packerApp3 v 0.2.3: ${temp.join(',')}\r\n`);
})();
//#endregion

// @ts-ignore - ugh
webpack = webpack || require('webpack');
var getConfig = function (debug = true) {

  var config: webpack.Configuration =
  {
    watch: true,
    entry: {
      ui: ['jquery', 'bootstrap'],//, './src/components/myMonacoEditor.ts'],
      page1: './src/app3/page1.ts',
      page2: './src/app3/page2.ts',
      monacoSample: './src/app3/monacoSample.ts',
    },
    devtool: debug ? 'source-map' : false,// 'inline-source-map'
    optimization: {
      minimizer: [new TerserPlugin()],
      minimize: true,// debug ? false : true,
      // splitChunks: { chunks: 'all', name: 'vendor' }
      splitChunks: {
        cacheGroups: {
          // match the entry point and spit out the file named here
          ui: {
            chunks: 'initial',
            name: 'ui',
            test: 'ui',
            enforce: true,
          },
          basecss: { // bootstrap
            chunks: 'initial',
            name: 'basecss',
            test: /custom\.scss$/,
            enforce: true,
          }
        }
      }
    },
    mode: debug ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.handlebar$/i,
          use: 'handlebars-loader',
        },
        {
          test: /\.aspx$/i,
          use: 'handlebars-loader',
        },
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
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
              },
            },
            'css-loader'
            // { loader: 'style-loader', options: {} },
            // { loader: 'css-loader', options: {} }
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
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // publicPath: (resourcePath, context) => {
                //   // publicPath is the relative path of the resource to the context
                //   // e.g. for ./css/admin/main.css the publicPath will be ../../
                //   // while for ./css/main.css the publicPath will be ../
                //   console.log('test: ' + resourcePath);
                //   console.log('test: ' + context);
                //   var result = path.relative(path.dirname(resourcePath), context) + '/';
                //   console.log('test: ' + result);
                //   return '/app3/css/';
                // },
              }
            },
            // { loader: 'style-loader', // inject CSS to page }, 
            { loader: 'css-loader' }, // translates CSS into CommonJS modules }, 
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            { loader: 'sass-loader' } // compiles Sass to CSS }
          ]
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
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css',
      }),

      new HtmlWebpackPlugin({
        inject: true,
        chunks: ['monacoSample'],
        template: './src/templates/MonacoSample.handlebar',
        filename: 'monacoSample.html'
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ['page2'],
        template: './src/templates/pageTemplate.handlebar',
        filename: 'page2.html'
      }),
      new HtmlWebpackPlugin({
        chunks: ['page1'],
        filename: 'page1.aspx',
        template: path.resolve(__dirname, './src/templates/pageTemplate.aspx'),
        inject: false,
        templateParameters: function (compilation, assets, options) {
          console.log(JSON.stringify(assets));
          return {
            title: 'Document title',
            files: assets,
            options: options,
            webpackConfig: compilation.options
            // webpack: compilation.getStats().toJson()
          };
        },
      }),
      new HtmlWebpackPlugin({
        inject: false,
        templateParameters: function (compilation, assets: { css: string[], js: string[] }, options) {
          // assets.js = assets.js.filter(x => x.search('basecss.js') == -1);
          console.log(JSON.stringify(assets));
          return {
            title: 'Document title',
            files: assets,
            begins: (x: string, y: string) => {
              return x.search(y) == 0;
            },
            options: options,
            webpackConfig: compilation.options
            // webpack: compilation.getStats().toJson()
          };
        },
        chunks: ['page1'],
        template: './src/templates/pageTemplate.handlebar',
        title: 'Page1', filename: 'page1.html'
      }),
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 5, }),
      new webpack.BannerPlugin({
        // @ts-ignore
        banner: (/*v: any*/) => {
          return ` ${new Date().toLocaleDateString()}`;
        }
      }),
      new MonacoWebpackPlugin1(webpack, {
        languages: ['typescript'],
        // features: ['folding']
      })
    ],
    resolve: { extensions: ['.tsx', '.ts', '.js'] },

    output: {
      publicPath: '/app3/',
      filename: debug ? '[name].js' : '[name].min.js',
      path: path.resolve(__dirname, 'public/app3'),
      sourceMapFilename: '[name].js.map'
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
          //
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