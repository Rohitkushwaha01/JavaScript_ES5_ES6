"use strict"

// function Declaration
function calcAge1(birthYear){
    return 2022 - birthYear;
}

const age1 = calcAge1(2003)
console.log(age1);                                                  

// function expression
const calcAge2 = function(birthYear){
    return 2022 - birthYear;
}

console.log(calcAge2(2003));