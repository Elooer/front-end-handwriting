Function.prototype.myBind = function (context, ...args1) {
  context = context == null ? window : context
  if (typeof this !== 'function') throw new Error('not function')
  let _this = this
  return function (...args2) {
    context.fn = _this
    const result = context.fn(...args1, ...args2)
    delete context.fn
    return result
  }
}