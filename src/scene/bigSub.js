function subtract(num1, num2) {
  // 将两个大数转换为字符串，并将它们的长度补齐
  num1 = num1.padStart(Math.max(num1.length, num2.length), '0')
  num2 = num2.padStart(Math.max(num1.length, num2.length), '0')

  let result = ''
  let borrow = 0

  // 从两个字符串的末尾开始，依次取出每一位数字进行相减，并记录借位
  for (let i = num1.length - 1; i >= 0; i--) {
    let digit1 = parseInt(num1.charAt(i))
    let digit2 = parseInt(num2.charAt(i))
    let diff = digit1 - digit2 - borrow

    // 如果被减数的某一位小于减数的对应位，则需要向高位借位
    if (diff < 0) {
      diff += 10
      borrow = 1
    } else {
      borrow = 0
    }

    result = diff.toString() + result
  }

  // 去掉前导零
  while (result.charAt(0) === '0' && result.length > 1) {
    result = result.substring(1)
  }

  return result
}
