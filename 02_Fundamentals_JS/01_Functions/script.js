// Function is a piece of code that we can use over and over again whenever needed.
// Function allow us to use DRY principle.

"use strict"

// Declaring and intializing a function named logger 
function logger(){
    console.log("My name is Rohit kushwaha!")
}

// Calling/running/invoking the functions
// we can call function multiple time 
logger();
logger();
logger();

// We can pass data in function and a function can return data back too.

// passing data and returing the data
function fruitProccessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleAndOrangeJucie = fruitProccessor(5,4);
console.log(appleAndOrangeJucie);

const appleJuice = fruitProccessor(2,0);
console.log(appleJuice);