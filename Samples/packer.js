function blah() {
    var MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
    var LZString = require('lz-string');
    var fs = require('fs');
    var path = require('path');
    var webpack = require('webpack');
    var getConfig = function (debug) {
        var config = {
            entry: {
                //main:'./src/codeMirrorSample.ts',
                //search:'./src/components/SearchBox.ts',
                tree: './src/treeSample.ts',
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
                        use: [{ loader: 'style-loader', options: {} },
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
                                loader: 'style-loader',
                            }, {
                                loader: 'css-loader',
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
                                options: {},
                            }]
                    }
                ]
            },
            plugins: [
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 1,
                }),
                new MonacoWebpackPlugin({
                    languages: ['typescript'],
                })
            ],
            resolve: {
                extensions: ['.tsx', '.ts', '.js']
            },
            output: {
                publicPath: '/javascripts/',
                filename: debug ? '[name].js' : '[name].min.js',
                path: path.resolve(__dirname, 'public/javascripts'),
            }
        };
        return config;
    };
    var debugConfig = getConfig(true);
    var compiler = webpack(debugConfig);
    compiler.run(function (err, stats) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            updateTemplate(true);
        }
        console.log(stats.toString({
            chunks: false,
            colors: true // Shows colors in the console
        }));
    });
    var updateTemplate = function (debug) {
        var jsPath = './public/javascripts/tree.js';
        var resPath = './public/spexplorerjs.debug.aspx';
        if (!debug) {
            jsPath = './public/javascripts/tree.min.js';
            resPath = './public/spexplorerjs.aspx';
        }
        var script = fs.readFileSync(jsPath).toString();
        script = LZString.compressToBase64(script);
        var tmpPath = './src/templates/spexplorerjs.aspx';
        var template = fs.readFileSync(tmpPath).toString();
        template = template.replace('{0}', script);
        //   template = template + `${script}</script>
        // </asp:Content>`;
        fs.writeFileSync(resPath, template);
    };
    var prodConfig = getConfig(false);
    var compiler2 = webpack(prodConfig);
    // if (false)
    compiler2.run(function (err, stats) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            updateTemplate(false);
        }
        console.log(stats.toString({
            chunks: false,
            colors: true // Shows colors in the console
        }));
    });
}
//# sourceMappingURL=packer.js.map