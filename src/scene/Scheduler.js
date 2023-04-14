/* 
设计Scheduler类，要具有并发数量限制功能，需要定义最大可并发任务数max，从入参中获取。并定义当前并发任务数count，表示正在执行的任务数量。另外，定义一个待执行的任务队列queue。
在添加任务add函数中，首先判断当前正在执行的任务数，若当前正在执行的任务数达到最大容量max，则当前的任务需要阻塞在此处。具体做法为，new一个Promise对象，将resolve函数的引用推入队列queue中。只要resolve函数没有被执行，当前任务就会一直阻塞在这里。
若当前正在执行的任务数没有达到最大容量，那么对count进行加一，执行当前函数fn，并拿到返回值res，执行完毕后count减一。此时若队列queue中有值，说明之前有任务因为并发数量限制而被阻塞，将队头的resolve弹出，并执行。执行resolve之后，之前阻塞的任务就可以正常执行了。
最后返回fn函数执行的结果res。
*/

class Scheduler {
  constructor(max) {
    // 最大可并发任务数
    this.max = max;
    // 当前并发任务数
    this.count = 0;
    // 阻塞的任务队列
    this.queue = [];
  }

  async add(fn) {
    if (this.count >= this.max) {
      // 若当前正在执行的任务，达到最大容量max
      // 阻塞在此处，等待前面的任务执行完毕后将resolve弹出并执行
      await new Promise(resolve => this.queue.push(resolve));
    }
    // 当前并发任务数++
    this.count++;
    // 使用await执行此函数
    const res = await fn();
    // 执行完毕，当前并发任务数--
    this.count--;
    // 若队列中有值，将其resolve弹出，并执行
    // 以便阻塞的任务，可以正常执行
    this.queue.length && this.queue.shift()();
    // 返回函数执行的结果
    return res;
  }
}

// 使用示例
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const scheduler = new Scheduler(2);

const addTask = (time, val) => {
  scheduler.add(() => {
    return sleep(time).then(() => console.log(val));
  });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 2
// 3
// 1
// 4