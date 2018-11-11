var fs = require("fs");
var path = require("path");
var webpack = require("webpack");

var debug = true;

var config = {
	entry: './src/api/def.api.ts',
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
		filename: 'api.pack.js',
		path: path.resolve(__dirname, 'dist/bundles')
	}
};

const compiler = webpack(config);

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