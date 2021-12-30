/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-30 17:06:22
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 17:51:44
 */
/**
 * type Type = typeof value
 * let Type  = typeof value = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"。且Type只能被赋这些值
 */
// const 对typeof的影响。_a1只能为1
const _a = 1
type typaA_ = typeof _a
const _a1: typaA_ = 1

// let
let aa = 1
type typaA = typeof aa
let a1: typaA = 10


// 将数据转换成对应的类型
const oo = {
  a: 1,
  b: '2',
  c: true,
  d: undefined,
  e: {
    e: null
  },
  f: [],
  g: {},
  h: function(){}
}
type typeOO = typeof oo


/**
 * type 与 typeof
 *
 * 1、 let obb = typeof {}。 obb = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
 *
 * /
function f() {}
type ob = typeof f
/**ob = () => void */
let obb = typeof {}
obb = "object"

let tt = typeof oo.a
tt = "number"
