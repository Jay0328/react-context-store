const merge = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.common.js');

const BUILD_DIR = resolve(__dirname, 'public/build');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: BUILD_DIR,
    inline: true,
    port: 8080,
    watchOptions: {
      poll: true
    },
    watchContentBase: true
  },
  devtool: 'inline-source-map'
});