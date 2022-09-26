const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurtoUsd = 1.1;

// This is called chaining 
const deposited = movements.filter((mov)=>mov>0).map((mov)=>mov*eurtoUsd).reduce((acc,cur)=>Math.trunc(acc+cur))

console.log(deposited);