/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-23 20:39:47
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 20:44:24
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    node: {name: 'top'}
  },
  mutations: {
    SET_NODE(state, payload) {
      state.node = payload
    }
  },
  actions: {
    addNode({ commit }, payload ) {
      commit('SET_NODE', payload)
    }
  }
})
