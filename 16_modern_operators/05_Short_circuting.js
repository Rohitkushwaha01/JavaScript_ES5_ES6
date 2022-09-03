// Use ANY data type, return ANY data type, short-circuiting.


console.log("-------------OR---------------")
console.log(0 || 1);
console.log(0 || 0);
console.log(1 || 1);
console.log(3 || 'Rohit');
console.log("" || 'Rohit');
console.log(undefined || null);
console.log(undefined || null || 0 || "Rohit I'm turthy values" || "")

let guests = 70;
const guests1 = guests ? guests:10;
console.log(guests1)

const guest2 = guests || 10;
console.log(guest2);

console.log("-------------AND---------------")
console.log(0 && 1);
console.log(1 && 0);
console.log(0 && 0);
console.log(1 && 1);
console.log(3 && 'Rohit');
console.log("" && 'Rohit');
console.log(undefined && null);
console.log("true" && null && 0 && "Rohit I'm turthy values" && "")