// Arguments keyword exist only in regular functions not in arrow functions

const addExp = function(a, b){
    console.log(arguments);
    return a + b;
}

addExp(5,6);
addExp(5,8,9,7);

// Arrow functions
var addArrow = (a, b)=>{
    // console.log(arguments); // not available in arrow functions
    return a + b;
}

addArrow(3,4)