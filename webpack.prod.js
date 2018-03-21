const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
	module: {
		rules: [
		    {
				test: /\.css$/,
				include: path.resolve(__dirname, "src"),
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				include: path.resolve(__dirname, "src"),
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-env']
				}
			}
		]
	},
    plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new ExtractTextPlugin("styles.css"),
		new UglifyJSPlugin({
			sourceMap: true,
			exclude: [/\.min\.js$/gi]
		}),
		new CompressionPlugin({
			test: /\.(js|css)$/,
			include: path.resolve(__dirname, "src")
		})
    ]
});
