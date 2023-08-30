// 封装fetch，实现超时重新发起请求，并规定重复请求次数
function fetchWithRetry(url, options, maxRetries) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok && maxRetries > 0) {
        return fetchWithRetry(url, options, maxRetries - 1);
      }
      return response;
    });
}

// 使用
const url = 'https://api.example.com/data';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};
const maxRetries = 3;

fetchWithRetry(url, options, maxRetries)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });