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
        } else {
            return app.provideInstance[key]
        }
    },
    use(o) {
        // app.use(createPinia())
        o.install(app)
    }
}

function createPinia() {
    const pinia = {
        install(app) {
            app.provide(Symbol, pinia)
            app.$pinia = pinia
        }
    }
    return pinia
}
/**
 * const useStore = defineStore(id, options)
 * const store = useStore()
 */
function reactive(target, key){
    Object.defineProperty(target, key, {
        get(target, key) {
            return typeof target[key] === 'function' ? target[key]() : target[key]
        }
    })
}
function defineStore(id, options) {
    const { state, getters, actions } = options
    function useStore() {
        let localState = typeof state === 'function' ? state() : state
        let retGetter = {}, retAction = {};
        Object.entries(getters).forEach(([prop, fn]) => {
            retGetter[prop] = fn.bind(localState)()
        })
        Object.entries(actions).forEach(([prop, fn]) => {
            let ret = fn.bind(localState)
            retAction[prop] = function(newVal) {
                localState.state = newVal
                ret(newVal)
            }
        })
        const store = assign(
            localState,
            retGetter,
            retAction
        )
        return store
    }
    useStore.$id = id
    return useStore
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

