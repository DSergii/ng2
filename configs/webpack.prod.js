const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const apps = require('./apps');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

// webpack config
module.exports = webpackMerge(commonConfig,
    {
      devtool: 'source-map',

      output: {
        publicPath: '/frontend/'
      },

      htmlLoader: {
        minimize: false // workaround for ng2
      },

      plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
          mangle: {
            keep_fnames: true
          }
        }),
        new webpack.DefinePlugin({
          'process.env.ENV': JSON.stringify(ENV),
          'process.env.APP': JSON.stringify(helpers.getAppEnv('prod')),
        }),
        new HtmlWebpackPlugin({
          chunks: ['marketing', 'common'],
          template: './index_prod.html',
          filename: 'index.html'
        })
      ]
    });
