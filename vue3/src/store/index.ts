/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 14:11:15
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-27 15:03:01
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

const context = require.context('./modules', true, /\.ts$/)
const namespaced = {}
context.keys().forEach((filePath) => {
  const moduleName = filePath.split('/').pop()?.split('.')[0] as string
  const def = context(filePath).default
  namespaced[moduleName] = def
  console.log(def, 'namespacednamespacednamespaced', filePath)
})

export default createStore({
  modules: {
    home
  }
})
