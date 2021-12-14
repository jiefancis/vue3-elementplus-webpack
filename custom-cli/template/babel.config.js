/*
 * @Descripttion: 
 * @version: 
 * @Author: sea
 * @Date: 2021-07-23 14:32:15
 * @LastEditors: sea
 * @LastEditTime: 2021-07-26 13:33:27
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'bbbui',
        style: (name) => {
          return `${name}/index.css`;
        },
        camel2DashComponentName: false, // 是否需要驼峰转短线
        camel2UnderlineComponentName: false // 是否需要驼峰转下划线
      }
    ]
  ]
}
