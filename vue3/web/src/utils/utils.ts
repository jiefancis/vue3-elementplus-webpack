/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-13 09:09:56
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-22 15:08:23
 */
interface DeepCloneObject {
  // [key: string]: DeepCloneObject | undefined;
  hasOwnProperty?: (string) => boolean
}
function deepClone (o: any) {
  if (typeof o === 'object') {
    const clone = Array.isArray(o) ? [] : {}
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        clone[key] = deepClone(o[key])
      }
    }
    return clone
  } else {
    return o
  }
}

