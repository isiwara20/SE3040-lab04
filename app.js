const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log("Response received:");
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});
