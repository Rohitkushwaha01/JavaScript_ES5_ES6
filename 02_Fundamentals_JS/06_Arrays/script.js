// Array is a non-primitive type so we can replace a value even if it has const.

// Declaring and assigning values to array.
const friends = ["Rohit", "Shubham", "Gaurav", "Pooja", "Ajit", "Sayam", "Pankaj", "Darshan", "Sahil"];

// another method to use array
const years = new Array(2003,2002,2003,2000,2001,2002,2001,2003,2001);

console.log(friends);
console.log(years);

// chaning values of array 

friends[0] = "Rohit Kushwaha";
console.log(friends);


//Exercise to loop through an Array.

const calcAge = (birthYear)=>{
    return 2022 - birthYear;
}

for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}