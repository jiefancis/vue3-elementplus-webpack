/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-30 11:48:55
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 16:33:46
 */

// 泛型函数
const o = {
  a: 1,
  b: {
    c: '2'
  }
}

type typeO = typeof o
function getVal<T, P extends keyof T>(obj: T, key: P): T[P] {
  return obj[key]
}
getVal(o, 'c')


// 表达式类型
const getVal1: <T, P extends keyof T>(obj: T, key: P) => T[P] = function(obj, key) {
  return obj[key]
}
var result = getVal1(o, 'b')
