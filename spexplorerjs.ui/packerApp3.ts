/// <reference types="webpack" />
/// <reference types="@types/node" />
// @ts-ignore
import webpack from 'webpack';
import * as path from 'path';
const WebpackShellPlugin = require('webpack-shell-plugin');
// const CssnanoPlugin = require('cssnano-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
      page1: './src/app3/page1.ts',
      page2: './src/app3/page2.ts',
      monacoSample: './src/app3/monacoSample.ts',
    },
    devtool: 'source-map',// debug ? 'inline-source-map' : false,// 'inline-source-map''source-map'
    optimization: {
      runtimeChunk: 'single',
      minimizer: [
        // new CssnanoPlugin(),
        // new OptimizeCSSAssetsPlugin({
        //   assetNameRegExp: /\.css$/g,
        //   cssProcessor: require('cssnano'),
        //   cssProcessorPluginOptions: {
        //     preset: ['default', { discardComments: { removeAll: true } }],
        //   },
        //   canPrint: true
        // }),
        new TerserPlugin({ sourceMap: true })
      ],
      minimize: debug ? false : true,
      splitChunks: {
        cacheGroups: {
          baseGroup: {
            test: /(bootstrap\.js|jquery\.js|custom\.scss)/,
            name: 'base',
            chunks: 'all',
            enforce: true
          },
          pnpGroup: {
            test: /(pnp|core-js|es6-map|whatwg-fetch)/, //core-js is for ie11 polyfill https://pnp.github.io/pnpjs/concepts/polyfill/
            name: 'pnp',
            chunks: 'all',
            enforce: true
          },
          monacoGroup: {
            test: /monaco-editor/,
            name: 'monaco',
            chunks: 'all',
            enforce: true
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
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer'),
                    require('cssnano')({
                      preset: 'default',
                    }),
                  ];
                }
              }
            }
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'url-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            // { loader: 'style-loader', // inject CSS to page }, 
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                sourceMap: false,
                map: { inline: false },
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  var temp = [
                    require('precss'),
                    require('autoprefixer'),
                  ];
                  if (debug)
                    temp.push(
                      require('cssnano')({
                        preset: ['default', { discardComments: { removeAll: true } }],
                      })
                    );
                  return temp;
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
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css',
      }),
      new WebpackShellPlugin({
        onBuildStart: ['echo "Starting"'],
        onBuildEnd: ['postcss --dir ./public/app3/css public/app3/css/*.css --map false']
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
      // new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 5, }),
      // new webpack.BannerPlugin({
      //   // @ts-ignore
      //   banner: (/*v: any*/) => {
      //     return ` ${new Date().toLocaleDateString()}`;
      //   }
      // }),
      new MonacoWebpackPlugin1(webpack, {
        languages: ['typescript'],
        // features: ['folding']
      })
    ],
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    output: {
      publicPath: 'https://localhost:8443/app3/',
      filename: debug ? '[name].js' : '[name].[contenthash].min.js',
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