var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

var htmlWebpackPluginConfig = {
  template: './index.html',
  filename: 'index.html',
  inject:true 
}

var publicPath = '/'

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/build.js',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10*1024,
          outputPath: 'static/images/',
          name: '[name].[hash:10].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'www.henyulee.com',
    port: 80,
    inline: true,
    stats: "errors-only" // 表示只打印错误 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin(htmlWebpackPluginConfig)
  ]
}