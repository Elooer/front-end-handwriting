// 单例
class Singleton {
  constructor(name, age) {
    this.name = name
    this.age = age
    if (!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
}

let s1 = new Singleton('zs', 18)
let s2 = new Singleton('ls', 19)
console.log(s1 === s2) // true