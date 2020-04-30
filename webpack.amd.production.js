let path = require('path');
let webpack = require('webpack');
let node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.js', '.css'],
    mainFields: [
      'webpack',
      'browser',
      'web',
      'browserify',
      ['jam', 'main'],
      'main',
      'index'
    ]
  },
  entry: ['./src'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ReactGridLayout.js',
    publicPath: '/dist/',
    libraryTarget: 'amd'
  },
  optimization: {
    minimize: false
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /^((?!\.module).)*\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!'
        ]
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')]
      }
    ]
  }
};
