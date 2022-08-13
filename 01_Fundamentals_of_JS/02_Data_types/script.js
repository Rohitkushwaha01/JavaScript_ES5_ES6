// Data type =  Data type is the type of value which a variable is assigned of.

// There are 7 primitive data types 
// 1) number 2) string 3) boolean 4) undefined 5) null 6) symbol 7) BigInt

let Number = 4;
console.log(typeof(Number));

let string = "I'm a string";
console.log(typeof(string));

let bool = true;
console.log(typeof(bool));

let notDefined;
console.log(notDefined);

let HugeNumber = BigInt(9007199254740991);
console.log(typeof(HugeNumber));

let nullNumber = null;
console.log(typeof(nullNumber)); // returns object 

// Non-primitive data types (object)
// 1) array 2) object 3) function

let arr = [4,5,3,5,3,2,3,3];
console.log(typeof(arr));

let obj = {
    firstName: "rohit",
    lastName: "Kushwaha"
}
console.log(typeof(obj));

