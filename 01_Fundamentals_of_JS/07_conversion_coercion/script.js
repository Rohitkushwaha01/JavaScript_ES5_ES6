// Type conversion = converting a data type into another data type(manually)
// Type coercion = converting a data type into another data type(automatically by the browser)

// Type conversion
const year = "2022";
console.log(year+5); // here 2022 is concatenated with number 5.

console.log(Number(year) + 5); // here 2022 is added with number 5 (achieved by using type conversion)

const string = "hello";
console.log(Number(string)); // Note = You can't convert every string into number(if you pass a string "hello", the output will be NaN(not a number))

const no = 5;
console.log(String(no)); // A number can be converted into string.

//Type coercion

console.log("I'm " + 19 + " years old");
console.log("4" + "5" + "4"); 
console.log("4" - "5");
console.log("4" * "5");
console.log("4" / "2");
console.log("dfjkds" / "2"); // NaN
console.log("dfjkds" * "2"); // NaN
console.log("dfjkds" - "2"); // NaN
console.log("dfjkds" + "2"); // concatenate.

// only the "+" operator will concatenate two number and rest of the operators works exactly same as in mathematics.