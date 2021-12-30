/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-30 13:33:32
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 14:15:34
 */
interface User<T, P, K> {
  name: T,
  password: P,
  item: K
}

// 变量
const baseUser: User<string, string, string> = {
  name: '12',
  password: '12',
  item: '1'
}

const baseUser1: User<string, string, string> = {
  name: '12',
  password:12,
  item: {
    c: '1'
  }
}


// 函数返回值
function identity<T, P, K>(name: T, password: P, item: K):  User<T,P,K> {
  return {
    name,
    password,
    item
  }
}

var result = identity('1', '2', '3')
