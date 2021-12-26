
var PENDING = 'pending'
var FULLFILLED = 'fullfilled'
var REJECTED = 'rejected'

function MPromise(execute) {
    this.state = PENDING
    this.value = null
    this.reason = null
    this.resolveQueue = []
    this.rejectQueue = new Set()

    const resolve = val => {
        if(this.state === PENDING) {
            this.state = FULLFILLED
            this.value = val
            let curVal = val
            let curF = null
            if(this.resolveQueue.length) {
                this.resolveQueue.reduce((p,n) => {
                    curVal = n(curVal)
                    p.then(res => n(res))
                    

                }, MPromise.resolve(curVal))
            }
        }
    }
    
    const reject = reason => {
        if(this.state === PENDING) {
            this.state = REJECTED
            this.reason = reason
            if(this.rejectQueue.size) {
                this.rejectQueue.forEach(fn => fn(val))
            }
        }
    }
    execute(resolve, reject)
}
MPromise.prototype.then = function(resolve, reject = null) {
    if(this.state === FULLFILLED) {
        let res = resolve(this.value)
        if(res && typeof res.then === 'function') {
            return res
        } else {
            return MPromise.resolve(res)
        }
    }
    this.resolveQueue.push(resolve)
    reject && this.rejectQueue.add(reject)
    return this
}
MPromise.prototype.catch = function(reject) {
    if(this.state === REJECTED) {
        reject(this.reason)
        return
    }
    this.rejectQueue.add(reject)
    return this
}

MPromise.resolve = function(val) {
    if(val instanceof MPromise) {
        return val
    } else if (val && typeof val.then === 'function') {
        return val
    } else {
        return new MPromise((resolve, reject) => {
            resolve(val)
        })
    }
}

var p = new MPromise((resolve, reject) => {
    console.log('new MPromise')
    setTimeout( () => resolve('resolve'), 2000)
    
})
p.then(res => {
    console.log('then ', res)
    return 1
}).then(res => {
    console.log('then 2', res)
    return 2
}).then(res => {
    console.log('then 3', res)
    return 3
})
p.catch(err => {
    console.log('err ', err)
})

