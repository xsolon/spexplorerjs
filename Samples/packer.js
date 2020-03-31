//var fs = require("fs");
var path = require("path");
var webpack = require("webpack");

var getConfig = function (debug) {

  var config = {
    entry: {
      main:'./src/codeMirrorSample.ts',
      search:'./src/components/SearchBox.ts'
    },
    devtool:"inline-source-map",
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
          use: [{ loader: "style-loader", options: {  } },
          { loader: "css-loader", options: {  } }]
				}
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: debug ? '[name].js' : '[name].min.js',
      //filename:'[name].js',
      path: path.resolve(__dirname, 'public/javascripts')
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