/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-08 10:01:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:47:22
 */
let dbname
let version
let db

function usePromise () {
  let resolve, reject
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

export async function openDB (_dbname, _version, name) {
  dbname = _dbname
  version = _version
  const request = window.indexedDB.open(dbname, version)
  const { resolve, reject, promise } = usePromise()
  if (!db) {
    try {
      request.onupdategradeneed = async function (e) {
        db = e.target.result
        console.log(db.objectStoreNames.contains(name), db, '创建数据表成功', e.target.result)
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { autoIncrement: true })
          resolve(db)
        }
      }
    } catch (e) {
      reject(e)
    }
  }
  return promise
}

export function openObjectStore (dbname, storeName, mode = 'readwrite') {
  console.trace(123456789, db)
  if (!storeName) {
    storeName = dbname
  }
  return db.transaction([dbname], mode).objectStore(storeName)
}

async function dbAdd (data, key) {
  const objectStore = openObjectStore('person')
  objectStore.add(data, key)
}

async function dbDelete (key) {
  const objectStore = openObjectStore('person')
  objectStore.delete(key)
}

async function dbPut (data, key) {
  const objectStore = openObjectStore('person')
  objectStore.put(data, key)
}

async function dbGet (data, key) {
  const objectStore = openObjectStore('person')
  objectStore.get(key)
}


async function dbGetAll () {
  const objectStore = openObjectStore('person')
  objectStore.getAll()
}
// const useDB = (async function () {
//   // await openDB('zhqc', 1, 'zhqc')
//   console.log('export default ', db)
//   return function () {
//     return {
//       dbAdd,
//       dbDelete,
//       dbPut,
//       dbGet,
//       dbGetAll,
//       db
//     }
//   }
// })()

// export default useDB
export default function useIndexedDB () {
  return {
    dbAdd,
    dbDelete,
    dbPut,
    dbGet,
    dbGetAll,
    db
  }
}
