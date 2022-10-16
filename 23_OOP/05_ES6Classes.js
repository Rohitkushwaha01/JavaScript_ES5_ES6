// ES6 Classes

// 1. Classes are NOT Hoisted
// 2. Classes are first-class citizens
// 3. classes are executed in strict mode even if the mode is not strict.

// Class Expression
// const PersonClass = class{

// }

// Class declaration
class PersonClass{
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    // These method will be added to .prototype property
    calcAge(){
        console.log(2022 - this.birthYear);
    }
}

const Rohit = new PersonClass("Rohit", "Kushwaha", 2003);
console.log(Rohit);

console.log(Rohit.__proto__ === PersonClass.prototype);

PersonClass.prototype.greet = function(){
    console.log(`Good morning, ${this.firstName + " " + this.lastName}`);
}

Rohit.greet();