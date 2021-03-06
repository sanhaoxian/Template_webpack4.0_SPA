/**
 * 此文件是在开发环境的相应配置
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.conf')
const config = require('./config')
const webpackConfigDev = {
  mode: 'development', // 通过 mode 声明开发环境
  output: {
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: config.entryDir === 'src' ? path.join(__dirname, '../src') : ('../' + config.entryDir),
    publicPath: '/',
    host: '127.0.0.1',
    port: '8089',
    overlay: true, // 浏览器页面上显示错误
    // open: true, // 开启浏览器
    // stats: "errors-only", //stats: "errors-only"表示只打印错误：
    hot: true // 开启热更新
    // 这里添加了代理配置
    // proxy: {
    //     '/api/*': {
    //             target: 'http://192.168.1.211:88/',
    //             secure: false,
    //             changeOrigin:true
    //     }
    // }
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin()
  ],
  // devtool: "source-map",  // 开启调试模式
  module: {
    rules: []
  }
}
// console.log('传入参数', config.entryDir)
module.exports = merge(webpackConfigBase, webpackConfigDev)
