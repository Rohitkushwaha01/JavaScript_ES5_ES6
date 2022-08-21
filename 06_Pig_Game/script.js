'use strict';

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

score0.textContent = 0;
score1.textContent = 0;


function rolldice(){
    // Generating a random number for dice.
    let randomNumber = Math.trunc((Math.random()*6)+1);

    // Changing the src attribute.
    dice.src = `Images/dice-${randomNumber}.png`;

    // displaying this number as a current score.
    score0.textContent = randomNumber;

}

rollBtn.addEventListener('click', rolldice);