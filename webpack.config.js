const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv')
const env = dotenv.config().parsed;

module.exports = {

  entry: {
    'js/app': ['./src/App.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: ['/node_modules/'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    })
  ]
}
