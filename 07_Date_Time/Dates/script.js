let date = new Date();
console.log(date);

console.log(new Date("Aug 02 2022"));
console.log(new Date("January 02 2003"));
console.log(new Date(2003, 01, 07, 13, 4, 59));

const future = new Date(2003, 01, 07, 15, 6, 5);

// console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
