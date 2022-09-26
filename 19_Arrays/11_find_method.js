// Find methods returns only one first value where the condition match
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstDepoist = movements.find((mov)=>{
    return mov>0;
});

const firstWithdrawal = movements.find((mov)=>{
    return mov<0;
});

console.log(firstDepoist);
console.log(firstWithdrawal);