// Event propagation : Bubbling and capturing.
// When clicked on navbar the background color changes.

const randomInt = (max) => Math.floor(Math.random() * max);

const randomColor = () =>
    `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log(e.currentTarget === this);
    // e.stopPropagation(); // Stopping propagation (not best practice);
    console.log(e.target);
    console.log(e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget);
});

// Take away from this project

// e.currentTarget === this 
// e.target will be same for parent elements.
// we can stop the propagation using e.stopPropagation();