/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-28 09:03:03
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-28 14:22:21
 */
// vars
var piniaSymbol = Symbol('pinia')

// apiInject
var app = {
    provideInstance: {},
    provide(key, value) {
        app.provideInstance[key] = value
    },
    inject(key, defaultValue) {
        if(![null, undefined].includes(defaultValue)) {
            return defaultValue
        }
        return app.provideInstance[key]
    },
    use(o) {
        // app.use(createPinia())
        o.install(app)
    }
}

function createPinia() {
    const pinia = {
        install(app) {
          app._a = app
          app.provide(piniaSymbol, pinia)
          app.$pinia = pinia
        },
        _a: null,
        _s: new Map()
    }
    return pinia
}
/**
 * const useStore = defineStore(id, options)
 * const store = useStore()
 */
function toReactive(target, key, getter) {
    Object.defineProperty(target, key, {
      get() {
        return typeof getter === 'function' ? getter(target) : getter
      }
    })
}
function defineStore(id, options) {
    const { state, getters, actions } = options
    function useStore() {
      const pinia = app.inject(piniaSymbol)
      createOptionsStore(id, options, pinia)
      const store = pinia._s.get(id)
      return store
    }
    useStore.$id = id
    return useStore
}
function createOptionsStore(id, options, pinia) {
  const { state, getters, actions } = options
  const localState = typeof state === 'function' ? state() : state
  // actions set this is localState
  Object.entries(getters).forEach(([key, fn]) => {
    localState[key] = fn
    toReactive(localState, key, fn)
  })
  Object.keys(actions).forEach(key => {
    actions[key] = actions[key].bind(localState)
  })
  const store = assign(localState, actions)
  pinia._s.set(id, store)
}

function assign(source, ...target) {
  return Object.assign(source, ...target)
}


app.use(createPinia())
var useStore = defineStore('car', {
    state: () => {
        return { stone: 10 }
    },
    getters: {
        getStone(state) {
            return state.stone
        }
    },
    actions: {
        setStone(newVal) {
          this.stone = newVal
        }
    }
})
var store = useStore()
store.getStone
store.setStone(100)
console.log(1111111, store.getStone)
