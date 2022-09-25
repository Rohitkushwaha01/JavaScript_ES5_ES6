const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const balance = movements.reduce(function(acc, curr, i, arr){
    console.log(`${i} : ${acc}`)
    return acc + curr;
}, 0)

console.log(balance);

// maximum value 
const max = movements.reduce((acc, mov)=>{
    if(acc>mov)return acc;
    else return mov;
}, movements[0]);

console.log(max)