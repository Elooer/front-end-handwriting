function myPromiseAll(arr) {
  return new Promise((resolve, reject) => {
    const len = arr.length
    let result = []
    let num = 0
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then(val => {
          result[i] = val
          num++
          if (num === len) {
            return resolve(result)
          }
        })
        .catch(error => {
          return reject(error)
        })
    }
  })
}