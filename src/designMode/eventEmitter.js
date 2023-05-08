class EventEmitter {
  constructor() {
    this.handlers = {};
  }

  // 注册事件监听器
  on(event, callback) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(callback);
  }

  // 移除某个事件回调队列里的指定回调函数
  off(event, callback) {
    const callbacks = this.handlers[event],
      index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  }

  // 触发目标事件
  emit(event, ...params) {
    if (this.handlers[event]) {
      this.handlers[event].forEach((callback) => {
        callback(...params);
      });
    }
  }

  // 为事件注册单次监听器
  once(event, callback) {
    // 对回调函数进行包装，使其执行完毕自动被移除
    const wrapper = (...params) => {
      callback(...params);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}