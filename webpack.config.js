var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  devtool: 'eval',
  entry: ['webpack/hot/dev-server', './src/client/app/index.js'],
  resolve: { alias: {} },
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    noParse: [],
    loaders: [
       // { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath] },
       { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin('main', null, false)]
};

module.exports = config;
