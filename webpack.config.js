const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.[contenthash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            }
        }, {
            // test: /\.(scss)$/,
            // loader: [MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin(),
    ],
}