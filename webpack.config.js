var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');


module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
		{ test: /\.styl$/, loader: "style!css!stylus" },
		{ test: /\.html$/, loader: "html" },
		{
			test: /\.jsx?$/,
			loader: 'babel',
			include: APP_PATH,
			query: {
				presets: ['es2015']
			}
		},
		{ test: /\.vue$/, loader: 'vue'}
    ]
  }
}
