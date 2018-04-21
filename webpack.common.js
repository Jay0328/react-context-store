const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const BUILD_DIR = resolve(__dirname, 'build');
const APP_DIR = resolve(__dirname, 'src');

module.exports = {
  entry: {
    react: ['react', 'react-dom', 'prop-types'],
    router: ['react-router-dom', 'history'],
    app: ['babel-polyfill', `${APP_DIR}/index.jsx`]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        include: APP_DIR,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        react: {
          test: 'react',
          name: 'react',
          chunks: 'initial',
          enforce: true
        },
        router: {
          test: 'router',
          name: 'router',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};