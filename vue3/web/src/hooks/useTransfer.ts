/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-11 16:32:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-18 19:21:45
 */
import { toRaw } from 'vue'
// interface checkedItem {
//   label: string,
//   checked: boolean
// }
// type checks = Array<checkedItem>
// interface Transfer{
//     checkedList: checks,
//     from: checks,
//     to: checks
// }
export function useTransfer (checkedList: any, from: any, to: any): void {
  checkedList.forEach(item => {
    item = typeof item === 'string' ? item : toRaw(item).label
    console.log('useTransfer', item)
    const index = to.findIndex(({ label }) => label === item)
    if (index === -1) {
      to.push({
        label: item,
        checked: false
      })
    }
    from.forEach(({ label }, index) => { if (label === item) { from.splice(index, 1) } })
  })
  checkedList.length = 0
}
