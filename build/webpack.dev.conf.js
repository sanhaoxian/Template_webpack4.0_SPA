const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
	mode: 'development', // 通过 mode 声明开发环境
	output: {
		filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
        path: path.resolve(__dirname, '../dist')
	},
	devServer: {
		contentBase: path.join(__dirname, "../src"),
		publicPath:'/',
		host: "127.0.0.1",
		port: "8089",
		overlay: true, // 浏览器页面上显示错误
		// open: true, // 开启浏览器
		// stats: "errors-only", //stats: "errors-only"表示只打印错误：
		hot: true // 开启热更新
	},
	plugins: [
		//热更新
		new webpack.HotModuleReplacementPlugin(),
	],
	// devtool: "source-map",  // 开启调试模式
	module: {
		rules: []
	},
}
module.exports = merge(webpackConfigBase, webpackConfigDev);