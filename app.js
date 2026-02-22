const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Async Success!');
  } else {
    reject('Async Failure!');
  }
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
console.log("Server running on http://localhost:8080");
const myModule = require('./my-module.js');

console.log(myModule.myFunction());
