// looping through each array.
const friends = ["Rohit", "Shubham", "Gaurav", "Pooja", "Ajit", "Sayam", "Pankaj", "Darshan", "Sahil"];

for(let i = 0; i < friends.length; i++){
    console.log(friends[i]);
}

// array using new operator.
const years = new Array(2003,2002,2003,2000,2001,2002,2001,2003,2001);

for(let i = 0; i < years.length; i++){
    console.log(years[i]);
}

// getting each type of array element using for loop 
const multipleTypedArray = ["Rohit", "Kushwaha", 19, 2003, true, ["Sayam", "Pankaj", "Darshan", "Sahil"]];
const type = []


for (let i = 0; i < multipleTypedArray.length; i++) {
    // Two ways to push elements in an array.
    // type[i] = typeof(multipleTypedArray[i]);
    type.push(typeof(multipleTypedArray[i]));
}

console.log(type);


const birthyears = [2003,2002,2003,2000,2001,2002,2001,2003,2001];
const age = []


for (let i = 0; i < birthyears.length; i++) {
    // const calcAge = 2022 - birthyears[i];
    // age.push(calcAge);
    age.push(2022 - birthyears[i]);
}

console.log(birthyears)
console.log(age)
