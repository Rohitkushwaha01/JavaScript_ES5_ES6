'use strict';

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const activePlayer = document.querySelector('.player--active');

let userOnesScore = 0;
let userTwosScore = 0;

// hiding the dice 
dice.classList.add('hidden');


btnRoll.addEventListener('click', ()=>{
    // Generating a random number for dice.
    let diceNumber = Math.trunc((Math.random()*6)+1);

    // when user roll the dice show them the dice 
    dice.classList.remove('hidden');

    // Changing the src attribute.
    dice.src = `Images/dice-${diceNumber}.png`;

    // Incrementing the score 
    userOnesScore += diceNumber;
    // displaying this number as a current score.

    if(diceNumber == 1){
        player0.classList.toggle('player--active');
        // player1.classList.add('player--active');
        currentScore0El.textContent = 0;
    }
    else{
        currentScore0El.textContent = userOnesScore;
        userTwosScore += diceNumber;
        currentScore1El.textContent = userTwosScore;
    }
});