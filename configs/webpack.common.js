const webpack = require('webpack');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// webpack config
module.exports = {
  entry: {
    /* COMMON */
    'common': [
      /* Polyfills */
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone',

    ],
    /* Apps */
    'project1': [
      './app/main.ts',
      './app/app.styles.scss'
    ]
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.coffee'],
    alias: {
      'jquery': 'jquery/dist/jquery',
      'medium-editor-js': 'medium-editor/dist/js/medium-editor'
    }
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript', 'angular2-template', 'angular-router']
      },
      {
        test: /\.coffee$/,
        loaders: ['coffee']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        include: /component/,
        loaders: ['raw', 'sass']
      },
      {
        test: /\.scss$/,
        exclude: /component/,
        loader: ExtractTextPlugin.extract('style', 'css?sourseMap!sass')
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};
