const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
  	app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  plugins: [
  	new CleanWebpackPlugin(['dist']),
  	new HtmlWebpackPlugin({
  		title: 'Kristoffer Karlsson',
  		template: './src/index.ejs'
  	}),
    new webpack.DefinePlugin({
      DEV: true
    })
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
