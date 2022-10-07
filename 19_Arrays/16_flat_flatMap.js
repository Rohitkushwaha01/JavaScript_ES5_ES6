const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: "Rohit Kushwaha",
  movements: [800, 550, -900, 35000, 650, -130, 50, 7300],
  interestRate: 5.0, // %
  pin: 5555,
};

const account6 = {
  owner: "Gaurav Datir",
  movements: [800, 550, 900, 5000, 650, -130, 50, 7300],
  interestRate: 6.9, // %
  pin: 6666,
};

const accounts = [account1, account2, account3, account4, account5, account6];

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr = [1, 2, 3, [3, 32, 1], 5, 3, 29, 9, 80, [4, 3, 43]];
console.log(arr.flat());

// By default depth is one means only one nested array is converted into a flat array.
const arrDepth = [1, 2, 3, [3, [2, 1]], 5, 3, [29, [9, 80, 4, 3], 43]];
console.log(arrDepth.flat());
// To go more deeper into the nested array use the depth parameter in flat(depth) method.
console.log(arrDepth.flat(2));

// flat()
const overAllBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(overAllBalance);

// flatMap() : only one level deep it can go.
const overAllBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(overAllBalance2);