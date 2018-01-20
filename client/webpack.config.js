const path = require('path');
const textExtractPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

const extractPlugin = new textExtractPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [["env"], 'react'],
                    compact: true
                }
            }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractPlugin,
    new webpack.optimize.UglifyJsPlugin({

    })
  ]
}