// Hoisting with variables

console.log(fname); // undefined
console.log(job); // cannot access job before initialization
console.log(year);

var fname = "Rohit";
let job = "blockchain";
const year = 2022;

// Hoisting with functions
console.log(add(2, 2));
console.log(addExp);
console.log(addArrow);

function add(a, b) {
  return a + b;
}

var addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b)=>{
  return a + b;
};
