function shallowClone(target) {
  const result = {}
  for (let key in target) {
    if (target.hasOwnProperty(key))
      result[key] = target[key]
  }
  return result
}