const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

// It will returns the whole function of the greet function.
// Hence, Function returning Function.
console.log(greet("HELLO"));

greet("Good Morning")("Rohit")
// Or we can do 
const greeterGM = greet("Good Morning");
greeterGM("Rohit")

// Function returning function using arrow functioin
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow("Hello")("Rohit");