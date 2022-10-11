// DOM Traversing

const h1 = document.querySelector('h1');

// Going Downwards: child
console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.childElementCount);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going Upward: parent
console.log(h1.parentElement);
console.log(h1.parentNode);

h1.closest('.header').style.background = "var(--gradient-secondary)";

// Going sideways: Siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);