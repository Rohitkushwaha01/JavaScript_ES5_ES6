// objects : objects are the non-primitive data type which holds dissimilar data 

// Making objects
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
    }
}

// reading each objects property

// reading using dot(.) operator.
console.log(myInfo);
console.log(myInfo.firstName);
console.log(myInfo.lastName);
console.log(myInfo.age);
console.log(myInfo.collegeName);
console.log(myInfo.course);
console.log(myInfo.enrollmentYear);
console.log(myInfo.passingYear);
console.log(myInfo.certificates);
console.log(myInfo.skills());

// reading using brackets.
console.log(myInfo);
console.log(myInfo["firstName"]);
console.log(myInfo["lastName"]);
console.log(myInfo["age"]);
console.log(myInfo["collegeName"]);
console.log(myInfo["course"]);
console.log(myInfo["enrollmentYear"]);
console.log(myInfo["passingYear"]);
console.log(myInfo["certificates"]);
// console.log(myInfo["skills()"]); // not accessible using brackets.