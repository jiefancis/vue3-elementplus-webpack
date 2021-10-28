/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 14:11:15
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-24 18:31:17
 */
// import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
// import home, { HomeState, HomeMutations } from './home'
import home from './home'
// types
// import HomeState from './types/home'

// type State = HomeState
// export const key: InjectionKey<Store<State>> = Symbol()

// interface State{
//   home: HomeState
// }

export default createStore({
  modules: {
    home
  }
})
