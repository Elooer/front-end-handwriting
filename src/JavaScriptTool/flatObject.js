// 对象拍平
function flattenObject(obj, prefix = '') {
  let result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        const flatObject = flattenObject(obj[key], prefix + key + '.');
        result = { ...result, ...flatObject };
      } else {
        result[prefix + key] = obj[key];
      }
    }
  }

  return result;
}
// 使用示例：
javascript
const nestedObject = {
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
// 在上面的示例中， flattenObject 函数将递归地遍历嵌套的对象，并将其扁平化为一个新的对象。每个属性的键将由它们的路径组成，使用 . 作为分隔符。输出结果如下：
let result = {
  name: 'John',
  age: 25,
  'address.street': '123 Main St',
  'address.city': 'New York',
  'address.country': 'USA'
}