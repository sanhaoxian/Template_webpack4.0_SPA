# Template_webpack4.0_SPA
Build project structure based on webpack 4.0 and use Vue framework (no scaffolding) for Single page application
###### Illustrate
- 参考资料：
- *基于两位大哥项目源码修改的[Webpack4 搭建 Vue 项目](https://github.com/zxpsuper/createVue)*、
- *[webpack4 多入口，多页面项目构建案例](https://segmentfault.com/a/1190000014984842)，因为它通俗易懂所以拿过来引用*
- *[axios封装的参考资料](https://www.jianshu.com/p/dacbefd62e29)*
- *以及同事前辈的项目源码，给了不少帮助*

- 纯属个人练手学习项目代码，想想日后可以考虑项目开发也可以作为开发模板加以应用。
- 再以后可以作为脱离热门的前端框架，摆脱依赖脚手架编写代码，这里有篇文章推荐[《抛开 Vue、React、JQuery 这类第三方js，我们该怎么写代码？》](https://yalishizhude.github.io/2018/11/14/web-components/),直击菜鸟的痛点。

- 此模板适用于单页面应用，因为入口只预设一个。还有一个多入口的模板（就在隔壁）,整体与此类似。
- 以此作为学习基础的开始，往后不断地根据开发需求可以自行增加扩展；

###### Use
``` javascript
  npm install
  npm run dev
```
###### ChangeLog
> 2018-11-30 添加vue-router

> 2019-01-08 新增加了axios插件并封装成一个请求方式，vue中全局方法的定义，集合base文件中便于统一管理。

> 2019-01-14 新增了根据参数，动态打包编译的功能，通过npm run dev --src=demo，就可以运行demo文件夹下的项目，默认执行src目录下的项目(初步实现，还不严谨)

> 2019-01-16 新增eslint代码监测，(eslint-plugin-vue、eslint-loader等相关简单使用，在运行编译时会触发，同时在vscode编辑的时候也会有所提示)

> 接下来要在项目中添加自定义配置文件project.js， 根据自带的project.js不同配置项，实现根据不同的配置项 区别打包；
