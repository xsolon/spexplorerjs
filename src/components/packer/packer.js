var fs = require('fs');
var path = require('path');
var webpack  = require('webpack');

module.exports.runWebPack = function(debug, filePath){

    var execPath = process.cwd();
    console.log('Execution path:'+ execPath);
    var srcDir = path.resolve(execPath,path.dirname(filePath)) ;
    var publicDir = path.resolve(execPath, srcDir.replace('src','public'));
    var moduleName = path.basename(filePath);
var outputName = debug ?moduleName :moduleName.replace('.js','.min.js');
//var debug = process.env.NODE_ENV !== "production";
console.log(publicDir);
console.log("debug: " +debug);
    const compiler = webpack({
        optimization: {
            minimize: debug? false:true,
          },
        context: srcDir,
        mode: debug?'development':'production',
        devtool: debug ? false:"sourcemap",
        entry: path.resolve(execPath,filePath),
        output: {
            path: publicDir,
            filename: outputName
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        emitError: true,
                        emitWarning: true,
                        fix:true
                      }
                  },
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    //presets: ['@babel/preset-env'],
                    presets: ['es2015'],
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