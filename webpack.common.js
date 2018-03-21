const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CopyWebpackPlugin([{
            context: path.join(__dirname, 'src'),
            from: './static',
            to: '../dist/static',
        }]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            favicon: path.join(__dirname, 'src/favicon.ico'),
            xhtml: true,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
