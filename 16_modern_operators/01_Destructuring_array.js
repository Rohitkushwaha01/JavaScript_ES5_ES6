// An advance way to get elements using array.
// Structuring and Destructuring Array.
'use strict'

let arr = [3,5,3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// instead of declaring multiple values use the below once
let [a1,b1,c1] = arr;
console.log(a1,b1,c1);

const object = {
    Name: "Rohit",
    age: 19,
    skills: ["HTML", "CSS"],
    education: function(){
        return [10, 12];
    }

}

let [a, b] = object.skills;
console.log(a, b);

let [ssc, hsc] = object.education();
console.log(ssc, hsc);

// Nested Array Destructuring 
const nestedArray = [3,4,[9,2]];
let [i, , k] = nestedArray;
console.log(i,k)

// Default values
const [p = 1, q = 3, r = 2] = [5];
console.log(p, q, r);