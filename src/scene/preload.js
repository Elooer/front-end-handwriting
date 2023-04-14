/*
对于一批请求，写一个preload函数实现：并行发送不超过5个请求，成功渲染，失败则再次请求，若对于单个请求失败了3次，则退出并取消处理后续请求
*/

// 使用示例
preload(arr).then(() => {
  // 请求成功
}).catch(() => {
  // 请求失败
})

function preload(arr) {
  let completedCount = 0;
  let failedCount = 0;

  return new Promise((resolve, reject) => {
    function sendRequest(url, retryCount) {
      if (retryCount >= 3) {
        failedCount++;
        if (failedCount === arr.length) {
          reject('All requests failed');
        }
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        completedCount++;
        if (completedCount === arr.length) {
          if (failedCount > 0) {
            reject(`Some of the ${arr.length} requests failed`);
          } else {
            resolve();
          }
        }
      };

      xhr.onerror = function () {
        sendRequest(url, retryCount + 1);
      };

      xhr.open('GET', url);
      xhr.send();
    }

    let activeCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (activeCount >= 5) {
        break;
      }
      activeCount++;
      sendRequest(arr[i], 0);
    }
  });
}