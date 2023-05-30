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

// 基于Date实现
function sleep(time) {
  var timeStamp = new Date().getTime();
  var endTime = timeStamp + time;
  while (true) {
    if (new Date().getTime() > endTime) {
      return
    }
  }
}

// 使用案例
sleep(1000)
console.log('hello')