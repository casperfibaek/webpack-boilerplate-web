const path = require('path');
const webpack = require('webpack');                               // eslint-disable-line
const merge = require('webpack-merge');                           // eslint-disable-line
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');        // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin');       // eslint-disable-line
const CompressionPlugin = require("compression-webpack-plugin");  // eslint-disable-line
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // eslint-disable-line

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/env',
                            {
                                browsers: [
                                    'ie >= 10',
                                ],
                                modules: false,
                            },
                        ],
                    ],
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin('styles.css'),
        new UglifyJSPlugin({
            sourceMap: true,
            exclude: [/\.min\.js$/gi],
        }),
        new CompressionPlugin({
            test: /\.(js|css)$/,
            include: path.resolve(__dirname, 'src'),
        }),
    ],
});
