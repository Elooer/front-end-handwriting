function red() {
  console.log('red')
}

function green() {
  console.log('green')
}

function yellow() {
  console.log('yellow')
}

const light = (timer, color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (color === 'red') {
        red()
      } else if (color === 'green') {
        green()
      } else if (color === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  })
}

// 使用示例
const run = async () => {
  while (true) {
    await light(3000, 'red')
    await light(1000, 'green')
    await light(2000, 'yellow')
  }
}
run()