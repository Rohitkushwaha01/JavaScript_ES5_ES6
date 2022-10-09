// Styles

// Selecting
const header = document.querySelector('.header'); // first Selecting header

// Creating
const message = document.createElement('div'); // Creating a new cookie element  
message.classList.add('cookie-message'); // adding class to the new element
message.innerHTML =
'We use Cookies for imporved functionality and analytics. <button class="btn btn-custom btn--close--cookie">Got it</button>'; // adding content for the new element
header.append(message);

// Deleting
const btncustom = document.querySelector('.btn-custom');

btncustom.addEventListener('click',()=>{
    message.remove();
})

// Applying Styles 
message.style.backgroundColor = '#37834d';

// Getting styles from the Dom
console.log(message.style.backgroundColor);

// use getComputedStyle() to get style
console.log(getComputedStyle(message).color);

// manipulating the height of the created dom element using js.
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 20 + "px";
document.documentElement.style.setProperty('--color-primary', 'lightGreen');

// Attributes.

// Getting attributes
const img = document.querySelector('img');
console.log(img);

console.log(img.src);
console.log(img.getAttribute('src'));

console.log(img.dataset);
console.log(img.dataset.versionNumber);

// Setting Attributes
img.setAttribute("Designer","Rohit");

// Manipulate attributes
img.alt = "Manipulated"

// working on links
const link = document.querySelector('link');
console.log(link)

console.log(link.href);
console.log(link.getAttribute("href"));

// Classess
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();