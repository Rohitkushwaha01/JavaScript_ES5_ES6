const arr = [2,3,4,32,21,4,3,2];
console.log(arr);
console.log(new Array(2,3,4,32,21,4,3,2));

// Created a empty array 
const x = new Array(7);
console.log(x);
// After creating empty array we inserted(filled) elements in it
// fill() method takes first argument as a entity which is to be inserted and second argument as start index(from where to start) and third argument as end index(where to stop); 
x.fill(4, 3, 5)
console.log(x);

