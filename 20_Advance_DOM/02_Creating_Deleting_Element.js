// Creating Elements and inserting Elements.
// .insertAdjacentElement

// Selectin DOM element
const header = document.querySelector('.header'); // first Selecting header

// Creating
const message = document.createElement('div'); // Creating a new cookie element  
message.classList.add('cookie-message'); // adding class to the new element

message.innerHTML =
'We use Cookies for imporved functionality and analytics. <button class="btn btn-custom btn--close--cookie">Got it</button>'; // adding content for the new element

// Adding the created element in the DOM
// prepend add the element as the first child element of the selected element in this case header.
// append add the element as the last child element of the selected element in this case header.
// header.prepend(message);
header.append(message);

// Deleting Elements

const btncustom = document.querySelector('.btn-custom');

btncustom.addEventListener('click',()=>{
    message.remove();
})
