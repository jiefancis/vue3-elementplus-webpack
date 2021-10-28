/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 14:29:54
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-19 11:24:16
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
