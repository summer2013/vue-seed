var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //启用source-map
	entry: APP_PATH + '/main.js',
	output: {
		path: "./build",
		publicPath: "/build/",
		filename: "build.js"
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
      {
        test: /\.json$/,
        loader: 'json'
      },
			{
				test: /\.html$/,
				loader: 'vue-html'
		  },
			{
				test: /\.js$/,
				loader: 'babel',
				include: APP_PATH,
				query: {
					presets: ['es2015']
				}
			}
		]
	},
  vue: {
    loaders: {
      'scss': 'vue-style!css!sass'
    }
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './app/main.html',
      inject: 'body'
    })
  ]
}
