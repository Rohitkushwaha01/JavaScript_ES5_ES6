'use strict'

/////////////////////////////////////////////////

// Slice method: cuts the element the return as an array.
let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));
// console.log(arr.slice(0,1)); // get the First element of an array.
// console.log(arr.slice(-1)); // get the last element of an array.
// console.log(arr.slice(0, -2));
// console.log(arr.slice(1,-1));
// console.log(arr.slice(1,2));

// splice method: splice deletes the element 
// console.log(arr.splice(3));
// console.log(arr.splice(1,4));
// console.log(arr.splice(-1));
// console.log(arr.splice(1));

// Reverse.
const arr2 = ['c', 'j', 'd', 'e'];
console.log(arr2.reverse());

// Sort the array.
console.log(arr2.sort());

// concat
console.log(arr.concat(arr2));
// or
console.log([...arr, ...arr2])

// Join
console.log(arr.join('-'));