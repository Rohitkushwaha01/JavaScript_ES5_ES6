// You cannot call a static method on an object, only on an object class.

const Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const rohit = new Person("Rohit", "Kushwaha");

Person.hey = function(){
    console.log("Hey There")
}

console.log(rohit); 
Person.hey(); // can call a static method on object class.
// rohit.hey(); // cannot call a static method on an object 


// Static keyword on Classes

class Student{
    constructor(name, rollno){
        this.name = name;
        this.rollno = rollno;
    }
    static hello(){
        console.log(`Hello ${this.name}`)
        console.log(this) // this keyword refers to the class itself 
    }
}

const vishal = new Student("Vishal kushwaha", 40);
Student.hello();
// vishal.hello(); // cannot call a static method on an object.

