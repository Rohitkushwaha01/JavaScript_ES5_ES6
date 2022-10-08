// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
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
  interestRate: 5.0,
  pin: 5555,
};

const account6 = {
  owner: "Gaurav Datir",
  movements: [800, 550, 900, 5000, 650, -130, 50, 7300],
  interestRate: 6.9,
  pin: 6666,
};

const accounts = [account1, account2, account3, account4, account5, account6];

// 1
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

// 2
const count = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc >= 1000).length;
console.log(count);

// const numOfDeposit = accounts.flatMap(acc=>acc.movements).reduce((sum, cur)=> cur>=1000 ? sum + 1: sum ,0);
// console.log(numOfDeposit)

// 3
let withdrawal = [];
let deposit = [];
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, curr) => (curr > 0 ? deposit.push(curr) : withdrawal.push(curr)),
    0
  );
console.log(withdrawal);
console.log(deposit);

// 4 convert into titleCase
const convertTitleCase = function (title) {
    const exception = ["a", "an", "and", "for", "is", "the", "but", "on", "or", "with", "but"]
    const capitalize = function(word){
        return word[0].toUpperCase() + word.slice(1);
    }
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map(word => exception.includes(word)? word: capitalize(word))
    .join(' ');

  return titleCase;
};

console.log(convertTitleCase("This is a nice title"));
console.log(convertTitleCase("and is a nice WORD"));
