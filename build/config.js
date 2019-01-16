const path = require('path')
const SRC = process.env.npm_config_src || 'src'

console.log('传递的路径：', path.join(SRC, 'project.js'))
module.exports = {
  entryDir: SRC,
  useEslint: true
}

