var fs = require('fs');
var path = require('path');
var webpack  = require('webpack');
var moduleName = 'loader.js';
var deploymentPath = path.resolve(__dirname, "../../../public/components/loader/");
module.exports.runWebPack = function(debug){
    
//var debug = process.env.NODE_ENV !== "production";
console.log(deploymentPath);
console.log("debug: " +debug);
    const compiler = webpack({
        optimization: {
            minimize: debug? false:true,
          },
        context: __dirname,
        mode: debug?'development':'production',
        devtool: debug ? false:"source-map",
        entry: "./" + moduleName,
        output: {
            path: deploymentPath,
            filename: debug ? "loader.js" : 'loader.min.js'
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
module.exports.definition = function () {
 var code = fs.readFileSync(__dirname + '/loader.js',"utf-8");
 return code;
};
module.exports.dependencies = ["public/components/logger/logger.js"];

module.exports.runWebPack(true);
module.exports.runWebPack(false);