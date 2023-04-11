// 用于实现指定时间后执行函数
function delay(fun, seconds, ...args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Promise.resolve(fun(...args))
        .then(resolve)
        .catch(reject);
    }, seconds);
  });
}

// 使用案例
await delay((...arg) => { console.log(arg) }, 1000, '嘻嘻嘻')