// Javascript treats functions as "First class function"
// This means that functions are simply just values
// functions are just another type of objects.

// add() is the first-class functions.
// It stores function in variables or properties.
const add = (a, b) => a+b;
console.log(add(4,3));

// pass functions as arguments to other functions
// Here greet function is passed as a another function to the addEventListener function
const greet = () => console.log("hey Rohit");
btnclose.addEventListener("click", greet);




