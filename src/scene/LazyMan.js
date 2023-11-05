class LazyManClass {
  constructor(name) {
    this.tasks = [];
    this.name = name;
    console.log(`Hi, I am ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift();
    task && task();
  }

  sleep(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}ms`);
        this.next();
      }, time);
    };
    this.tasks.push(task);
    return this;
  }

  eat(food) {
    const task = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }

  sleepFirst(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}ms`);
        this.next();
      }, time);
    };
    this.tasks.unshift(task);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}