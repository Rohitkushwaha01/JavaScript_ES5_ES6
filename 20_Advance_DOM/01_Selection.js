// Different ways to selecting elements from the DOM
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Query Selector only one element 
const onlyOneElement = document.querySelector('.header');
console.log(onlyOneElement);

// querySelectorAll returns a nodelist
const allElement = document.querySelectorAll('section');
console.log(allElement);

// getElementById 
const elementById = document.getElementById('section--1');
console.log(elementById)

// getElementByClassName 
const elementByClassName = document.getElementsByClassName('btn');
console.log(elementByClassName)

// getElementByTagName return a HTMl collection
const elementByTagName = document.getElementsByTagName('button');
console.log(elementByTagName);