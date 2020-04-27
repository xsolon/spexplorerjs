//var fs = require("fs");
var path = require("path");
var webpack = require("webpack");

var getConfig = function (debug) {

  var config = {
    entry: './src/api/def.ts',
    optimization: {
      minimize: debug ? false : true
    },
    mode: debug ? "development" : "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: debug ? 'api.pack.js' : 'api.pack.min.js',
      path: path.resolve(__dirname, 'dist/bundles')
    }
  };

  return config;

};
var debugConfig = getConfig(true);
const compiler = webpack(debugConfig);

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

var prodConfig = getConfig(false);
const compiler2 = webpack(prodConfig);

compiler2.run((err, stats) => {
	if (err) {
		console.error(err);
		return;
	} 

	console.log(stats.toString({
		chunks: false,  // Makes the build much quieter
		colors: true    // Shows colors in the console
	}));
});