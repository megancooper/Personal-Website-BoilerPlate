module.exports = {
	entry: './client/index.js',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loaders: ['babel']
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			}
		]
	}
}