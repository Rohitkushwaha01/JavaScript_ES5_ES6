"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Project begins.
// console.log(containerMovements.innerHTML);

const displayMovements = function (movement, sort = false) {
  containerMovements.innerHTML = "";

  
  const mov = sort? movement.slice().sort((a, b)=>a-b) :  movement;

  mov.forEach((money, index) => {
    const type = money > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
            <div class="movements__value">${money}€</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// const userFullName = "Steven Thomas Williams"; // user should be stw
const username = (user) =>
  user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");

accounts.forEach((account) => (account.username = username(account.owner)));
console.log(accounts);

// working on total balance.
const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.innerText = balance + "€";
};

const calcPrintDeposit = function (movements) {
  const balance = movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
    labelSumIn.innerText = balance + "€";
};

const calcPrintWithdrawal = function (movements) {
  const balance = movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => Math.abs(acc + curr), 0);
  labelSumOut.innerText = balance + "€";
};

const calcPrintIntrest = function (movements, interest) {
  const balance = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * interest)/ 100)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.innerText = balance + "€";
};



// Event handler

let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();

  currentAccount = accounts.find(acc=>acc.username === inputLoginUsername.value);
  // console.log(inputLoginUsername.value);

  console.log(currentAccount)
  if(currentAccount?.pin == inputLoginPin.value){
    // Display Login message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner}`

    // Display UI
    containerApp.style.opacity = 100;

    // display movements of current account.
    displayMovements(currentAccount.movements);

    calcPrintBalance(currentAccount.movements);
    calcPrintDeposit(currentAccount.movements);
    calcPrintWithdrawal(currentAccount.movements);
    calcPrintIntrest(currentAccount.movements, currentAccount.interestRate);

    console.log("login");

    // clearing input field
    inputLoginPin.value = inputLoginUsername.value =''
    inputLoginPin.blur()
  }
  else{
    alert("Wrong password")
  }
});

let sorted = false;

btnSort.addEventListener('click', (e)=>{
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})