"use strict";
exports.__esModule = true;
var TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');
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
    plugins: [new webpack.BannerPlugin(bannerOptions)],
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
module.exports = config;
