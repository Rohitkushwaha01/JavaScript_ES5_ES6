const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurtoUsd = 1.1;

// const converted = movements.map(function(movement){
//    return movement*eurtoUsd;
// }) 

const converted = movements.map(movement => movement*eurtoUsd);
console.log(converted);

// for of will result the same as map method.
const movementsUsd = []
for (const mov of  movements) {
    movementsUsd.push(mov*eurtoUsd); 
}
console.log(movementsUsd); 

// another example
// const movementsDes = movements.map((mov, i, arr)=>{
//     if(mov>0){
//         return `movements ${i + 1}: you deposited ${mov}`;
//     }
//     else{
//         return `movements ${i + 1}: you Withdrew ${Math.abs(mov)}`;
//     }
// });

// reduce version of the above code.
const movementsDes = movements.map((mov, i)=>
    `movements ${i + 1}: you ${mov>0?"Deposited":"Withdrew"} ${Math.abs(mov)}`
);

console.log(movementsDes);