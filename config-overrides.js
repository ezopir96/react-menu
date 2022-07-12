// 此文件对于当前项目进行webpack增量配置
// 它是运行在nodejs环境中，模块化使用的是commonjs
const { resolve } = require('path')
const { override, addDecoratorsLegacy, addWebpackAlias, fixBabelImports } = require('customize-cra')

module.exports = override(
  //装饰器
  addDecoratorsLegacy(),
  // 路由别名
  addWebpackAlias({
    '@': resolve('./src')
  }),
  // antd-mobile样式按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
