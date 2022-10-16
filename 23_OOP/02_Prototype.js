// Constructor function

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const rohit = new Person("Rohit", "Kushwaha");
const vishal = new Person("Vishal", "Kushwaha");

// prototype
Person.prototype.country = "India";
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

console.log(rohit);
console.log(rohit.fullName());
console.log(rohit.country);

console.log(vishal);
console.log(vishal.fullName());
console.log(vishal.country);

console.log(rohit.__proto__);

console.log(rohit.__proto__ === Person.prototype);
console.log(vishal.__proto__ === Person.prototype);
console.log(rohit.__proto__ === vishal.__proto__);

console.log(Person.prototype.isPrototypeOf(rohit));
console.log(Person.prototype.isPrototypeOf(vishal));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo sapiens";

console.log(rohit.species, vishal.species);

console.log(rohit.hasOwnProperty("firstName"));
console.log(vishal.hasOwnProperty("species"));
