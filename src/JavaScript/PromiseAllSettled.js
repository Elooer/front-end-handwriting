function myPromiseAllSettled(arr) {
  return new Promise((resolve, reject) => {
    const len = arr.length
    let result = []
    let num = 0
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then(val => {
          let obj = {
            status: 'fulfilled',
            values: val,
          }
          result[i] = obj
          num++
          if (num === len) {
            return resolve(result)
          }
        })
        .catch(error => {
          let obj = {
            status: 'rejected',
            values: error,
          }
          result[i] = obj
          num++
          if (num === len) {
            return resolve(result)
          }
        })
    }
  })
}