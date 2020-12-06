const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: {
    vueApp: './src/vue/vue-main.js',
    reactApp: './src/react/react-main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        include: [
          path.resolve(__dirname, "src/vue")
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js(x)?$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, "src/react")
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    hot: true,
    port: 9000,
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '虚拟列表',
      filename: 'index.html',
      template: 'index.html',
    })
  ]
};