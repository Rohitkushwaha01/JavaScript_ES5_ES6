// ES6 class

// set property needs atleast one property.

class Person{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get age(){
        return 2022 - this.birthYear;
    }
    set fullName(name){
        console.log(name);
        if(name.includes(" "))this._fullName = name;
        else alert("Please give full name");
    }
    get fullName(){
        return this._fullName;
    }
}

const rohit = new Person("Rohit Kushwaha", 2003);
console.log(rohit.age);
console.log(rohit.fullName);
console.log(rohit._fullName);

const vishal = new Person("Vishal Kushwaha", 2005);
console.log(vishal.age);
console.log(vishal.fullName);
console.log(vishal._fullName);