/**
 * loader的集合
 */
const config = require('./config')
const extractTextPlugin = require('extract-text-webpack-plugin')

const createLintingRule = () => ({
  test: /\.(js|vue)$/i,
  exclude: /node_modules/i,
  // include: [CONFIG.SRC, joinPath(__dirname, '../', 'test')],
  enforce: 'pre',
  use: {
    loader: 'eslint-loader',
    options: {
      formatter: require('eslint-friendly-formatter'),
      fix: true
    }
  }
})

const rules = [
  ...(config.useEslint ? [createLintingRule()] : []),
  {
  // test: /\.(js|vue)$/,
  // exclude: /node_modules/,
  // // include: [CONFIG.SRC, joinPath(__dirname, '../', 'test')],
  // enforce: 'pre', // 是为了先将eslint处理之后在交给其他的loader处理；
  // use: {
  //   loader: 'eslint-loader',
  //   options: {
  //     // community formatter
  //     formatter: require('eslint-friendly-formatter')
  // fix: true
  //   }
  // }
  },
  {
    test: /\.(css|scss|sass)$/,
    // 不分离的写法
    // use: ["style-loader", "css-loader",sass-loader"]
    // 使用postcss不分离的写法
    // use: ["style-loader", "css-loader", "sass-loader","postcss-loader"]
    // 此处为分离css的写法
    /* use: extractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"],
			// css中的基础路径
			publicPath: "../"
		})*/
    // 区别开发环境和生成环境
    use: process.env.NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] : extractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader', 'postcss-loader'],
      // css中的基础路径
      publicPath: '../'

    })
  }, {
    test: /\.js$/,
    use: ['babel-loader'],
    // 不检查node_modules下的js文件
    exclude: '/node_modules/'
  }, {
    test: /\.(png|jpg|gif)$/,
    use: [{
    // 需要下载file-loader和url-loader
      loader: 'url-loader',
      options: {
        limit: 5 * 1024, // 小于这个时将会已base64位图片打包处理
        // 图片文件输出的文件夹
        outputPath: 'images'
      }
    }]
  }, {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  }, {
    test: /\.html$/,
    // html中的img标签
    use: ['html-withimg-loader']
  }, {
    test: /\.less$/,
    // 三个loader的顺序不能变
    // 不分离的写法
    // use: ["style-loader", "css-loader", "less-loader"]
    // 区别开发环境和生成环境
    use: process.env.NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'less-loader'] : extractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'less-loader'],
      // css中的基础路径
      publicPath: '../'
    })
  }, {
    test: /\.vue$/,
    loader: 'vue-loader'
  }
]
module.exports = rules
