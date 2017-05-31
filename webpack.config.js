var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');
// require('react-date-picker/index.css');

module.exports = {
  entry: [
    'babel-polyfill',
    './web_app/main'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname + '/public/javascripts/',
    filename: 'bundle.js',
    publicPath: '/javascripts/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=transform-decorators-legacy'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }
    ]
  },
  resolve: {
    extensions: ['', '.json', '.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ]
};
