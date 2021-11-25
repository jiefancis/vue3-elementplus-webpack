/*
 * @Descripttion: 测试
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 14:14:04
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:43:58
 */
export default {
  namespaced: true,
  state: {
    tab: false,
    show: true
  },
  mutations: {
    UPDATE_TAB (state, payload) {
      state.tab = payload
    }
  },
  actions: {
    updateTab ({ commit }, payload) {
      commit('UPDATE_TAB', payload)
    }
  }
}
