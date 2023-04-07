function jsonp(url, data, callback) {
  // 创建script标签
  const script = document.createElement('script');
  // 格式化请求参数
  const params = new URLSearchParams(data).toString();
  // 设置请求地址
  script.src = `${url}?${params}&callback=${callback}`;
  // 将script标签添加到页面中
  document.body.appendChild(script);
  // 定义回调函数
  window[callback] = function (response) {
    // 处理响应数据
    console.log(response);
    // 移除script标签
    script.parentNode.removeChild(script);
    // 删除全局回调函数
    delete window[callback];
  };
}