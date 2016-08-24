var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');


module.exports = {
	devtool: 'eval-source-map', //启用source-map
	entry: "./src/main.js",
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
				test: /\.scss$/,
				loaders:['style', 'css?sourceMap', 'sass?sourceMap'] //处理顺序由右到左
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
			},
			{ test: /\.vue$/, loader: 'vue'}
		]
	}
}
