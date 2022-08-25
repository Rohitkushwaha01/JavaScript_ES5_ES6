// Selecting HTML object from the DOM
let timeEl = document.querySelector('.time');
let dayEl = document.querySelector('.day');
let dateEl = document.querySelector('.date');
let btn = document.querySelector('button');
let body = document.querySelector('body');
let h1 = document.querySelectorAll('h1');

let date = new Date();

// Array list of days of Week
let day = ["Sunday","Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"];

// used setInterval to repeat the function again and again so that the times keep updating in one Second.
setInterval(() => {
    date = new Date();
    timeEl.textContent = date.toLocaleTimeString();
}, 1000);

// setting currentDate
dateEl.textContent = date.toLocaleDateString();

//setting currentDay
let currentDay = date.getDay();
// eg: Thursday
// charAt(0) : first-letter of string  // returns captial "T"
// slice(1): it starts from the index 1 // returns "hurshday"
// and both will get added with + operator // got Thursday.
dayEl.textContent = day[currentDay].charAt(0).toUpperCase() + day[currentDay].slice(1);

// toggling dark-mode
btn.addEventListener('click', ()=>{
    body.classList.toggle('white-body');

    for (let i = 0; i < h1.length; i++) {
        h1[i].classList.toggle('border');
    }
})