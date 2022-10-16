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

console.log(rohit.__proto__);
// Object.prototype (top of the prototype chain)
console.log(rohit.__proto__.__proto__);
// End of the prototype chain
console.log(rohit.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1,2,34,5,34,6,7,6,7,9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());