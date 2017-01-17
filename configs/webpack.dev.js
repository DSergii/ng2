const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const apps = require('./apps');

// webpack config
module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    publicPath: ''
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP': JSON.stringify(helpers.getAppEnv('dev')),
    }),
    new HtmlWebpackPlugin({
      chunks: ['project1', 'common'],
      template: './index.html',
      filename: 'index.html'
    })
  ]
});
