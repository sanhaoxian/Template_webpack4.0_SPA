# Template_webpack4.0_SPA
Build project structure based on webpack 4.0 and use Vue framework (no scaffolding) for Single page application
###### illustrate
- *基于两位大哥项目源码修改的[Webpack4 搭建 Vue 项目](https://github.com/zxpsuper/createVue)、[webpack4 多入口，多页面项目构建案例](https://segmentfault.com/a/1190000014984842)，因为它通俗易懂所以拿过来引用*
- 纯属于个人练手学习项目代码，想想日后可以考虑项目开发也可以作为底层脚手架加以应用。
- 再以后可以作为脱离热门的前端框架，摆脱依赖编写代码，这里有篇文章推荐[《抛开 Vue、React、JQuery 这类第三方js，我们该怎么写代码？》](https://yalishizhude.github.io/2018/11/14/web-components/),直击菜鸟的痛点。
- 此模板适用于单页面应用，因为入口只预设一个。还有一个多入口的模板（就在隔壁）,整体与此类似。
- 以此作为学习基础的开始，往后不断地根据开发需求可以自行增加扩展

###### use
> npm install
  npm run dev

*因为当前最新的webpack是4.20.+,当运行项目是可能会报错：TypeError: Cannot read property 'properties' of undefined；然后需要注意的是要将webpack-cli版本升级至3.1.1+,然后就可以run dev了*

2019.01.08
[+] 新增加了axios插件并封装成一个请求方式[参考资料](https://www.jianshu.com/p/dacbefd62e29)，vue中全局方法的定义，集合base文件中便于统一管理。

