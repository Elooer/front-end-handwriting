function throttle(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) return
    const context = this
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    }, delay)
  }
}