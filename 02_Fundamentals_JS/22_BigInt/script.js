console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 3); //wrong output
console.log(2 ** 53 + 5); 

console.log(4539452934852809345903845928349058942439n);
console.log(BigInt(453945293)); // BitInt works for small values use n at the end of the BigInt integer.

// operations
console.log(10000n + 10000n);
console.log(343434389573872897n * 1000000n);

const huge = 357438572843975827583758n;
const num = 23;
// console.log(huge * num) // cannot mix BigInt and other types
console.log(huge * BigInt(num));

// Exception
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + " is Really big!!"); // BigInt gets converted into string

// Division 
console.log(11n/ 3n);
console.log(10 / 3);

