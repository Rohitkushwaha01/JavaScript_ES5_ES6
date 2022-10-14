// Calculating Square Root
console.log(Math.sqrt(25));
// The Same can be achieved by using '**' operator.
console.log(25 ** (1/2));

// Calculingte Cube root
console.log(8 ** (1/3));

// Calculating Square
console.log(Math.pow(5,2));
// The Same can be achieved by using '**' operator.
console.log(5 ** 2);

// Calculating Cube
console.log(Math.pow(5,3));
// The Same can be achieved by using '**' operator.
console.log(5 ** 3);

// Calculating minimum and maximum

console.log(Math.max(1,23,54,9));
console.log(Math.max(1,23,"54",9)); // Math function do type coercion.

console.log(Math.min(1,23,54,9));
console.log(Math.min(1,23,"54",9)); // Math function do type coercion.

// constant 
console.log(Math.PI);

// Truc and floor
console.log(Math.trunc(23.4));
console.log(Math.floor(23.4));

console.log(Math.trunc(-23.4));
console.log(Math.floor(-23.4));

// 2.4 Round always rounded up, and 2.5 round always rounded down.
console.log(Math.round(23.3));
console.log(Math.round(23.8));

// 2.3, 2.4, 2.5 or 2.6 always rounded up.
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.8));

// Rounding Decimals
console.log((2.7).toFixed(0)); // always returns a string not number
console.log((2.7).toFixed(2)); // always returns a string not number
console.log((2.752).toFixed(2)); // always returns a string not number
console.log((2.75256).toFixed(2)); // always returns a string not number