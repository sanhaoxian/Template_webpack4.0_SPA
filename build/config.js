/*
 * @Author: chenyong
 * @Date: 2019-01-17 10:33:11
 * @Last Modified by: chenyong
 * @Last Modified time: 2019-01-17 15:09:10
 */
const path = require('path')
const SRC = process.env.npm_config_src || 'src'
const fs = require('fs')
console.log('判断是不是一个目录', fs.lstatSync(SRC).isDirectory())
if (!fs.existsSync(SRC)) throw new Error('Not found file!')
const config = require(path.join(__dirname, '../' + SRC, 'project.js'))
module.exports = {
  entryDir: SRC,
  useEslint: config.useEslint,
  port: config.port
}

