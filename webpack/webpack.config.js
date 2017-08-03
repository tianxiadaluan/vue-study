const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  plugins: [
    // 清空dist文件夹
    new CleanWebpackPlugin(['dist']),
    // 生成打包的文件
    new HtmlWebpackPlugin({
      title: 'hahaha'
    })
  ]
}