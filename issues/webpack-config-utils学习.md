## getIfUtils(env:Object|Array,vars?: Array) : Object

- 参数：

  1. env: Object | Array, 环境变量 webpack 的 env 参数或者 process.env.NODE_ENV,
  2. vars: Array 非必填，默认值为`['production', 'prod', 'test', 'development', 'dev']`

- 返回值：

  1. 根据 vars 的值进行返回，不传 vars 返回 `{ifProduction,ifNotProduction,ifProd,ifNotProd,ifTest,ifNotTest,ifDevelopment,ifNotDevelopment,ifDev,ifNotDev}`

  2. getIfUtils 内部对 vars 参数进行了处理，例如传入`["watch"]`,则返回`{ifWatch,ifNotWatch}` ifWatch 及 ifNotWatch 为两个函数，ifWatch 判断当前环境为 watch 返回第一个参数，否则返回第二个参数

## removeEmpty
  作用： 移除数组或者对象中value为undefined的元素
