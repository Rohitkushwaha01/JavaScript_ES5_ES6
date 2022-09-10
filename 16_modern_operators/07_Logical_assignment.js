// Logical assignment operator.

const rest1 = {
    name: "Rohit",
    numGuests: 5
}

const rest2 = {
    name: "Gaurav",
    owner: "Datir patil"
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; 
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;  // logical nullish operator
// rest2.numGuests ??= 10;  // logical nullish operator

// And assignment operator
rest1.owner &&= "Unknown";
// rest1.owner = rest1.owner && "Unknown"
rest2.owner &&= "Unknown";
// rest2.owner = rest1.owner && "Unknown"

console.log(rest1);
console.log(rest2);