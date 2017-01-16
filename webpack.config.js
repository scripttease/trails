'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: {
    application: [
      './frontend/application.sass',
      './frontend/application.js',
    ],
  },

 output: {
    path: './public/dist',
    filename: 'application.js',
  },

  resolve: {
    extesions: ['', '.js', '.sass'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-2', 'stage-0'],
        },
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax&includePaths[]=' + __dirname +  '/node_modules'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('css/application.css'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );
}

module.exports = config;
