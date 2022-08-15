// focused on functions in an object.
// function declaration is not executed into object but function expression can execute in objects.

const myInfo = {
    firstName: "Rohit",
    lastName: "Kushwaha",
    birthYear: 2003,
    age: function(){
        return 2022 - this.birthYear;
    },
    hasDriversLicense: false,
    friends: ["Shubham", "Gaurav", "Ajit"],
    collegeName: "Dr. D. Y. Patil institute of technology,Pimpri",
    course:"Electronics and Telecommunication",
    enrollmentYear: 2020,
    passingYear: 2024,
    certificates: ["Complete web Development bootcamp 2022", "Javascript", "Data Analysis"],
    skills: function(){
        return "I can build websites(Frontend + Backend)";
    },
    Bio:function(){
        return `Hi, I’m ${this.firstName} ${this.lastName} a web Enthusiast. Currently Doing My Engineering from ${this.collegeName}. Exploring web developmentI’m currently learning Backend. Feels good when my fingers hit keyboard!! ${(this.hasDriversLicense)?"I have licenses":"I don't have licenses"}`
    }
}

console.log(myInfo.age());
// console.log(myInfo[age]); //  not allowed

console.log(myInfo.Bio());

