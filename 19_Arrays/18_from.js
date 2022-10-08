// Array.from() method creates a new array.
// use Array.from() method to convert a node list selected using querySelectorAll to an new array
// nodelist don't have map and filter method and to use those method we need to convert the nodelist into an array. 
// Array.from() method will come in handy while using this.
const y = Array.from({length:10}, () => 1);
console.log(y);

const z = Array.from({length: 10}, (_, i) => i+1);
console.log(z);