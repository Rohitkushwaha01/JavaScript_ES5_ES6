"use strict";

// Constructor Function
// The first letter of the Object Constructor Function is uppercase.

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const Rohit = new Person("Rohit", "Kushwaha");
const Vishal = new Person("Vishal", "Kushwaha");

// 1. New {} "Empty object" is Created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically retrun {}

console.log(Rohit);
console.log(Vishal);

// Adding property to an object contructor function
Rohit.birthYear = 2003; // You cannot add new property to an existing object constructor.
Vishal.birthYear = 2005;

Rohit.fullName = function () {
  return this.firstName + " " + this.lastName;
};

Rohit.calcAge = function () {
  return 2022 - this.birthYear;
};

console.log(Rohit.fullName());
console.log(Rohit.calcAge());
