const someMovements = [-200, 450, 400, 3000, 650, -130, -70, 1300];
const everyMovements = [-200, -450, -400, -3000, -650, -130, -70, -1300];

// includes only check for equality not conditions
console.log(someMovements.includes(-400));

// use some when you need to check some condition 
// some returns the value in boolean format either true or false.
// some only checks for both equality and conditions
console.log(someMovements.some(mov => mov > 5000));

// Every 
// if all the movments in an array passed the condition then only it returns true.
console.log(everyMovements.every(mov => mov < 0));