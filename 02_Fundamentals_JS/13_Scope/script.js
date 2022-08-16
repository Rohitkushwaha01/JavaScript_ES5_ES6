// var is globally scoped (i.e it can be used anywhere in the file such as in objects, function, array, etc.)

// let is blocked scoped (i.e it is only accessible in a particular block where they are declared such as function block, if-else block, etc.)

// const is also a blocked scoped (i.e it is only accessible in a particular block where they are declared such as function block, if-else block, etc.)

var numberOne = 30;
var num2;
console.log(numberOne);
console.log(numberOne + num2); // NaN

const PI = 3.142;
console.log(PI);


function add(){
    let numberTwo = 4; // not accessible outside the function 
    const squareOfTwo = 4; //not accessible outside the function
    // console.log(numberTwo); // accessible 
    // console.log(squareOfTwo); // accessbile
    return numberOne + numberTwo; // var is accessible anywhere
}
// console.log(numberTwo); // not accessible 
// console.log(squareOfTwo); // not accessbile
console.log(add());

let object  = {
    num1 : numberOne,
    // num2 : numberTwo // not accessible 
}
console.log(object.num1);




