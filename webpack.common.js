const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                context: path.join(__dirname, 'src'),
                from: './static',
                to: '../dist/static',
            },
        ]),
        new HtmlWebpackPlugin({
            title: 'Boilerplate CFI',
            // favicon: './dist/static/favicon.ico'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
