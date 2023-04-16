Array.prototype.myMap = function (callback) {
  const res = []
  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not a function')
  }

  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }

  return res
}