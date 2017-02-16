const path = require('path');
const webpack = require('webpack');
const WebpackStrip = require('strip-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /(node_modules|dist)/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: WebpackStrip.loader('console.log')
      },
      {
        test: /\.html$/,
        exclude: /(node_modules|dist)/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap'
        })
      }, 
      {
        test: /\.woff$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      }, 
      {
        test: /\.woff2$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      },
      {
        test: /\.(eot|ttf|svg|gif|png|jpg)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true}),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      test: /\.js$/
    })
  ]
};