function myPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    const len = arr.length
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then(val => {
          return resolve(val)
        })
        .catch(error => {
          return reject(error)
        })
    }
  })
}