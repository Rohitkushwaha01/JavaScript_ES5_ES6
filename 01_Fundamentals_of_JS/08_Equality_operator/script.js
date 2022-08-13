let Number = prompt("What is your number?");
// whatever is written in prompt gives string value.

console.log(typeof Number); // string

// == operator does not check data type if the data type is not same it will try to make that data type into similar type.
if(Number == 5){
    console.log("Number is 5, typecoercion")
}
else{
    console.log("Number not matched");
}

// === operator checks the data type and then ouputs the result
if(Number === 5){ // here even if we pass 5 the condition is false
    console.log("Number is 5, typecoercion")
}
else{
    console.log("Number not matched");
}