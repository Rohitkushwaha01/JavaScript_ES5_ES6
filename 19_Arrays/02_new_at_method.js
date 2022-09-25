const arr = [23, 11, 64];
console.log(arr[0]);
// at() method;
console.log(arr.at(0));

// getting the last element of array if we don't know the length.
console.log(arr[arr.length - 1]);
// getting the last element of array using slice
console.log(arr.slice(-1)[0]);
//getting the last element of array using at() method
console.log(arr.at(-1));

console.log("Rohit".at(0)); // at can also be used on strings.