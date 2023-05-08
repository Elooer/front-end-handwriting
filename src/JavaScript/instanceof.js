function myInstanceof(current, target) {
  let obj = current
  if (!['function', 'object'].includes(typeof obj) || obj === null) { return false }

  while (obj) {
    if (obj.__proto__ === target.prototype) {
      return true
    }
    obj = obj.__proto__
  }
  return false
}