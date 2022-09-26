// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const juliaDogAges = [5, 2, 4, 1, 15, 8, 3];
const kateDogAges = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function(dogAge){
    const HumanAge = dogAge
    .map((age)=>(age<=2)?2*age:16+age*4)
    .filter((age)=>age >= 18)
    .reduce((acc, curr, i, arr)=>(acc+curr)/arr.length, 0);

    console.log(HumanAge);
}

calcAverageHumanAge(juliaDogAges);
calcAverageHumanAge(kateDogAges);