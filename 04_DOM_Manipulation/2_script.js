// How to Select an Element from the DOM 

// getElementsByTagName() 
// getElementsByClassName() 
// getElementById() 
// querySelector()
// querySelectorAll()

// 1) getElementsByTagName()
const heading = document.getElementsByTagName('h1');
console.log(heading);
console.log(heading[0].innerHTML); // innerHTML allows to extract whatever written inside the tag.

// 2) getElementsByClassName()
const container = document.getElementsByClassName("container");
console.log(container);
console.log(container[0].innerHTML); // returns the HTML TAG inside of the container.
console.log(container[0].innerText); // returns the text inside the tag.

// 3) getElementById()
// When using getElementById remember you don't have to specify array index because Id is one unique identity so only one value will be returned by HTML DOM
const card = document.getElementById("card");
console.log(card);
console.log(card.innerHTML);
console.log(card.innerText);

// 4) querySelector()
// querySelector returns the first element that matched the selector
const onlySelectsOne = document.querySelector('.container');
console.log(onlySelectsOne);

// 5) querySelectorAll()
// querySelectorAll returns the every element that matched the selector in the form of array
const selectsAll = document.querySelectorAll('.items');
console.log(selectsAll) // returns a node list of all the matched element

console.log(selectsAll[0]); // returns the first element of the node list
console.log(selectsAll[1]); // returns the second element of the node list
console.log(selectsAll[2]); // returns the third element of the node list

console.log(selectsAll[0].innerText);// returns the first elements text
console.log(selectsAll[1].innerText);// returns the second elements text
console.log(selectsAll[2].innerText);// returns the third element of the node list