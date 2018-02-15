const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let config = {
   entry: {
     app: './src/index.js',
     home: './src/home.js',
     login: './src/login.js',
   },
   plugins: [
     new CleanWebpackPlugin(['public/*']),
     new HtmlWebpackPlugin({
        title : 'Login',
        excludeChunks: ['home'],
        filename: 'index.html',
        template: './src/index.html'
      }),
      new HtmlWebpackPlugin({
        title: 'Home',
        excludeChunks: ['login'],
        filename: 'home.html',
        template: './src/home.html'
      }),
     new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: "commons.js"
    }),
   ],
   output: {
     filename: 'assets/js/[name].bundle.js',
     path: path.resolve(__dirname, 'public')
   },
   module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015']]
                }
            },
            {
               test: /\.less$/,
               loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
              test: /\.(woff|woff2|ttf|svg|eot)$/,
              loader: 'url-loader'
            }
        ]
    }
};

module.exports = config;
