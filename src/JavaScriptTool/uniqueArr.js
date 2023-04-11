function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

function uniqueArr(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

function uniqueArr(arr) {
  const newArr = []
  arr.forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  })
  return newArr
}