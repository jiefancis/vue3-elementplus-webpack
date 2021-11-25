/*
 * @Descripttion: indexedDB数据库存储
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-07 13:47:33
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 17:37:45
 */
let instance = null
let db = null
class Store {
  constructor (dbname, version) {
    // if (instance && (instance.dbname !== dbname || instance.version !== version)) {
    //   this.dbname = dbname
    //   this.version = version
    // } else {
    //   return instance
    // }
    if (instance) {
      return instance
    }
    this.dbname = dbname
    this.version = version
  }
  async create (dbname, version) {
    return new Promise((resolve, reject) => {
      const indexedDB = window.indexedDB
      const req = indexedDB.open(dbname, version)

      req.onupgradeneeded = function (e) {
        db = db || e.target.result
        if (!db.objectStoreNames.contains(instance.dbname)) {
          db.createObjectStore(instance.dbname, { autoIncrement: true })
        }
        resolve(e)
      }
      req.onsuccess = function (e) {
        db = db || e.target.result
        resolve(e)
      }
      req.onerror = function (e) {
        reject(e)
      }
    }).catch(err => {
      console.trace('catch ', err)
    })
  }
  openObjectStore (dbname = instance.dbname, mode = 'readwrite') {
    return db.transaction([dbname], mode).objectStore(dbname)
  }
  // 创建表
  createObjectStore (storeName = instance.dbname) {
    return db.createObjectStore(storeName, { autoIncrement: true })
  }
  async add (data, key) {
    const objectStore = this.openObjectStore()
    const request = objectStore.add(data, key)
    const { resolve, reject, promise } = usePromise()

    request.onsuccess = function (e) {
      resolve(e)
    }
    request.onerror = function (e) {
      reject(e.srcElement.error)
    }

    return promise
  }
  async delete (key) {
    const objectStore = this.openObjectStore()
    const request = objectStore.delete(key)
    const { resolve, reject, promise } = usePromise()

    request.onsuccess = function (e) {
      resolve({ status: true, e })
    }
    request.onerror = function (e) {
      reject(e)
    }

    return promise
  }
  async put (data, key) {
    const objectStore = this.openObjectStore()
    const { resolve, reject, promise } = usePromise()
    try {
      const res = objectStore.put(data, key)
      resolve(res)
    } catch (e) {
      reject(e)
    }
    return promise
  }

  async get (key) {
    const objectStore = this.openObjectStore()
    const { resolve, reject, promise } = usePromise()
    try {
      const res = objectStore.get(key)
      resolve(res)
    } catch (e) {
      reject(e)
    }
    return promise
  }
  async getAll () {
    const objectStore = this.openObjectStore()
    const { resolve, reject, promise } = usePromise()
    const list = objectStore.getAll()
    try {
      resolve(list)
    } catch (e) {
      reject(e)
    }
    return promise
  }
  async clear () {
    const objectStore = this.openObjectStore()
    const { resolve, reject, promise } = usePromise()
    try {
      const res = objectStore.clear()
      resolve(res)
    } catch (e) {
      reject(e)
    }
    return promise
  }
}

export function usePromise () {
  let resolve = null
  let reject = null
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  return {
    resolve,
    reject,
    promise
  }
}


export default async function useIndexedDB (dbname = 'zhqc', version = 1) {
  if (!instance) {
    instance = new Store(dbname, version)
    await instance.create(instance.dbname, instance.version)
  }
  return {
    db: instance
  }
}

