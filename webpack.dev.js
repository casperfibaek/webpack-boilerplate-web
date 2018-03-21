const path = require('path');
const webpack = require('webpack');     // eslint-disable-line
const merge = require('webpack-merge'); // eslint-disable-line
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'file-loader',
                    options: {},
                }],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
