// Higher-order functions: A function that receives another function as a argument that returns a new function or both are called Higher-order function
// This is only possible because of first class function.

// functions that receives another function
// Here addEventListener function is receiving greet as a another function.
const greet = () => console.log("hey Rohit");
btnclose.addEventListener("click", greet);
