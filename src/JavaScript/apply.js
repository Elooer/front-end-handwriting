Function.prototype.myApply = function (context, args) {
  context = context == null ? window : context
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}