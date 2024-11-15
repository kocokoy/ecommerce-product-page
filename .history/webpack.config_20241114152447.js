// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // Use 'production' for production builds
    entry: './src/javascripts/index.js', // Entry point
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean 'dist' folder before each build
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML file
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Images
                type: 'asset/resource',
            },
        ],
    }
};
