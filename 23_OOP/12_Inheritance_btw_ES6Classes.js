class Person{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2022 - this.birthYear;
    }

    set fullName(name){
        if(name.includes(" "))this._fullName = name;
        else alert("Please give full name");
    }

    get fullName(){
        return this._fullName;
    }

    static hello(){
        console.log(`Hello ${this.name}`)
        console.log(this) // this keyword refers to the class itself 
    }
}

class Student extends Person {
    constructor(fullName, birthYear, course){
        super(fullName, birthYear); // This super keyword always need to happen first because this super function have "this" keyword init.
        this.course = course;
    }

    // overriding method 
    calcAge(){
        return 2023 - this.birthYear;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I'm ${this.calcAge()} years old studing ${this.course}`)
    }
}

const rohit = new Student("Rohit Kushwaha", 2003, "ENTC");
console.log(rohit);
console.log(rohit.fullName);
rohit.introduce();