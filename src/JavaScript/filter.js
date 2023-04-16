Array.prototype.myFilter = function (callback) {
  const res = []

  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not a function')
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && res.push(this[i])
  }

  return res
}