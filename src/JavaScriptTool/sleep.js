// 用于实现休眠几秒再执行后续代码的功能
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// 使用案例
await sleep(1000)