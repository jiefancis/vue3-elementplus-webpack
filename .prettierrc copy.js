/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-13 14:30:33
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-06 15:00:15
 */
// .prettierrc.js
module.exports = {
  // printWidth: 100, //单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  tabs: false, // 使用制表符 (tab) 缩进行而不是空格 (space)。
  semi: false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）,
  // 默认false,这里选择>不另起一行
  // htmlWhitespaceSensitivity: 'ignore',
  // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
  trailingComma: 'none', // 去除对象最末尾元素跟随的逗号
  useTabs: false, // 不使用缩进符，而使用空格
  jsxSingleQuote: true, // jsx不使用单引号，而使用双引号
  embeddedLanguageFormatting: 'off',
  endOfLine: 'auto',
}
