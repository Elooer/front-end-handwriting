function myPromiseAny(arr) {
  return new Promise((resolve, reject) => {
    const len = arr.length
    let result = []
    let num = 0
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then(val => {
          return resolve(val)
        })
        .catch(error => {
          result[i] = val
          num++
          if (num === len) {
            return reject(error)
          }
        })
    }
  })
}