/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 14:14:04
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-24 18:31:03
 */
// export interface HomeState{
//   tabs: boolean
// }
// export interface HomeMutations{
//   UPDATE_TAB: (tab: boolean) => void
// }

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
