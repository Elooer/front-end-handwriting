function myInstanceof(current, target) {
  let obj = current
  while (obj) {
    if (obj.__proto__ === target.prototype) {
      return true
    }
    obj = obj.__proto__
  }
  return false
}