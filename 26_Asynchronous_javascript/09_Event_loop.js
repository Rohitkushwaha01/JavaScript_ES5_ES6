// Event loop 

console.log('Test start');
setTimeout(() => console.log("O sec timer"), 0);
Promise.resolve("Resolved promise 1").then(res => console.log(res));
console.log('Test End');