/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-30 16:28:22
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:10:49
 */
import { ref } from 'vue'
export default (...arg) => {
  const state = ref(0)
  function setState (newVal) {
    state.value = newVal
  }
  return {
    state,
    setState
  }
}
