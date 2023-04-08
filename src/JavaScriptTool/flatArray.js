Array.prototype.myFlat = function () {
  let arr = [...this]
  let result = []

  for (let item of arr) {
    if (!Array.isArray(item)) {
      result.push(item)
    } else {
      result = result.concat(item.myFlat())
    }
  }
  return result
}