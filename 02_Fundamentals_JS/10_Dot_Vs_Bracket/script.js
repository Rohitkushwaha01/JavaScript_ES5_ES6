const myInfo = {
    firstName: "Rohit",
    lastName: "Kushwaha",
    age: 19,
    collegeName: "Dr. D. Y. Patil institute of technology, Pimpri",
    course:"Electronics and Telecommunication",
    enrollmentYear: 2020,
    passingYear: 2024,
    certificates: ["Complete web Development bootcamp 2022", "Javascript", "Data Analysis"],
    skills: ()=>{
        return "I can build websites(Frontend + Backend)";
    },
    friends: ["Shubham", "Gaurav", "Ajit"]
}


const nameKey = "Name";
// using bracket it's possible to access property of object.
console.log(myInfo['first'+ nameKey]); 
console.log(myInfo['last' + nameKey]); 

// It's not possible to access objects property with dot(.).
// console.log(myInfo.'last' + nameKey);


const intrestedIn = prompt("What do you want to know about Rohit? firstName, lastName, age, collegeName, course, enrollmentYear, passingYear, ceritificates, skills");

console.log(myInfo[intrestedIn]);
// console.log(myInfo.intrestedIn); // invalid

myInfo.gitHubUsername = "rohitkushwaha01";
myInfo.Goals = "Blockchain Developer";

console.log(myInfo);

// challenge: "Rohit has 3 friends, and his college name is Dr. D. Y. Patil institute of technology, pimpri"
// Print the above statements using the above objects.

console.log(`${myInfo.firstName} has ${myInfo.friends.length} friends, and his college name is ${myInfo.collegeName}`)