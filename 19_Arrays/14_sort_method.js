// sorting: Sorting means arranging string, arrays, numbers in ascending order or in descendin order.
// Sorting usually works on string only but we can use sorting method for number by passing some callback function.
// Sorting method is mutated.

// Strings
const Names = ["Rohit", "Pooja", "Soniya", "Sahil", "Ankit", "Tejal", "Darshan", "Shubham", "Gaurav", "Anushka", "Aditya", "Aayush", "Pankaj", "Rahul", "Shanti", "Ajit", "Sayam", "Ajinkya"];

Names.sort();
console.log(Names);

// Numbers
const movements = [200, -200, 340, -300, -20, 50, 400, -460];
movements.sort();
console.log("Not sorted", movements);

// For sorting numbers in ascending order use the below code
// Return < 0, currentNumber, nextNumber (keep order)
// Return > 0, nextNumber, currentNumber (switch order)
movements.sort((currentNumber, nextNumber)=>{
    if(currentNumber>nextNumber) return 1; // keep order
    if(currentNumber<nextNumber) return -1; // switch order
})

// movements.sort((currentNumber, nextNumber)=> currentNumber-nextNumber)

console.log(movements);

// For sorting numbers in descending order use the below code
movements.sort((currentNumber, nextNumber)=>{
    if(currentNumber>nextNumber) return -1;
    if(currentNumber<nextNumber) return 1;
})

// movements.sort((currentNumber, nextNumber)=> nextNumber-currentNumber)

console.log(movements);
