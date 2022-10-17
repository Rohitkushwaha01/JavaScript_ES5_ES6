const Person = function(firstName, lastName, birthYear){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2022 - this.birthYear);
}

const Student = function(firstName, lastName, birthYear, course){
    Person.call(this, firstName, lastName, birthYear); // Inheriting from Person constructor function
    // Person(firstName, lastName, birthYear); // Normal function call does not work here because normal function does not include this keyword. so to use this keyword we use call method. 
    this.course = course;
}

// linking prototype

Student.prototype = Object.create(Person.prototype); // By doing this we can use Person constructor function methods and properties.

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
}

const rohit = new Student("Rohit", "Kushwaha", 2003, "ENTC");
console.log(rohit);
rohit.introduce();
rohit.calcAge(); // This only works when student and person prototype are link together.

console.log(rohit.__proto__);
console.log(rohit.__proto__.__proto__);
console.log(rohit.__proto__.__proto__.__proto__);
console.log(rohit.__proto__.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor); // Student prototype is pointing to Person's Constructor function it should point to Student's Constructor function

console.log(rohit instanceof Student);
console.log(rohit instanceof Person);
console.log(rohit instanceof Object);

// making student Prototype point to Student Constructor function.
Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor); // Now it points to Student Constructor function.

console.log(rohit instanceof Student);
console.log(rohit instanceof Person);
console.log(rohit instanceof Object);