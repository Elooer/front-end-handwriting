Array.prototype.myReduce = function (callback) {
  let result = initValue === undefined ? this[1] : initValue
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this)
  }
  return result
}