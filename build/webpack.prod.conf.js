const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: { output: { comments: false } },
    }),
  ],
});
