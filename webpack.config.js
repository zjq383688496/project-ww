const path = require('path')
const webpack = require('webpack')
module.exports = {
	context: path.resolve(__dirname, './src'),
		entry: {
		app: [
			'./js/jweixin-1.0.0.js',
			'./js/jquery.min.1.9.1.js',
			'./js/jschannel.js',
			'./js/sdk.js'
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	}
}