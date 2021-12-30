/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-29 17:31:44
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 17:14:24
 */
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

// keyof type 。获取对象键 keyof 操作符可以用于获取某种类型的所有键，其返回类型是联合类型 与typeof 联合使用：

type layoutType = typeof layout
type sstring = keyof typeof layout

const lay: layoutType = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const span = lay.labelCol.span

// enum

enum Test {
  color,
  page
}

type test = keyof typeof Test
var t: test  = 'color'




// & intersection

const a = {
  a: 1
}
const b = {
  b: 2
}
// 必须含有a &b所有成员
type typeA = typeof a // Readonly<Partial<typeof a>>
type typeB = typeof b // Readonly<Partial<typeof b>>
const c : typeA & typeB = {
  a: 3,
  b: 6
}
// 成员属性可选
type typeA1 = Partial<typeof a> // Readonly<Partial<typeof a>>
type typeB1 = Partial<typeof b> // Readonly<Partial<typeof b>>

const c1 : typeA1 & typeB1 = {
  a: 3,
  b: 6
}

// 成员属性可选
type typeA2 = Readonly<Partial<typeof a>>
type typeB2 = Readonly<Partial<typeof b>>

const c2 : typeA2 & typeB2 = {
  a: 3,
  b: 6
}
c2.a = 10

// pick
const c3: Pick<typeA2 & typeB2, 'a'> = {
  b: 1
}



// ReturnType<type> 返回函数返回值内容
// ReturnTyep<typeof value> 通过typeof将数据转换成type

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

type T02 = Exclude<string | number | (() => void), Function>;  // string | number
type T03 = Extract<string | number | (() => void), Function>;  // () => void

type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

function f1(s: string) {
    return { a: 1, b: s };
}

class C {
    x = 0;
    y = 0;
}
function f2(){}

const v1 = 1
const typeF1 = typeof f1
type typeF2 = typeof 1

const aaa: typeF2 = 10

type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // any
type T17 = ReturnType<string>;  // Error
type T18 = ReturnType<Function>;  // Error

type T20 = InstanceType<typeof C>;  // C
type T21 = InstanceType<any>;  // any
type T22 = InstanceType<never>;  // any
type T23 = InstanceType<string>;  // Error
type T24 = InstanceType<Function>;  // Error
