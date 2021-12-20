/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-15 16:02:41
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-15 16:05:27
 */
export function createDep(effects?: any) {
  const dep = new Set(effects) as any
  dep.n = 0
  dep.w = 0
  return dep
}
