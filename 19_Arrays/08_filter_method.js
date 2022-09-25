const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// filter that element which is greater than 0 i.e money only deposited using filter method of array
const deposit = movements.filter(function(mov){
    return mov > 0;
})
console.log(deposit);

// filtering using for of loop
const depostfor = []
for (const mov of movements) {
    if(mov>0){
        depostfor.push(mov);
    }
}
console.log(depostfor);

// filtering that element which is smaller than 0 i.e withdrawed money using filter method of array
const Withdrawals = movements.filter(function(mov){
    return mov<0;
})
console.log(Withdrawals)

// filtering using for of loop 
const Withdrawalfor = []
for (const mov of movements) {
    if(mov<0){
        Withdrawalfor.push(mov);
    }
}
console.log(Withdrawalfor);
