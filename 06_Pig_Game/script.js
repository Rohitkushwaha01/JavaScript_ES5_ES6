"use strict";

const dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// hiding the dice
dice.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

btnRoll.addEventListener("click", () => {
  if (playing) {
    // Generating a random number for dice.
    const diceNumber = Math.trunc(Math.random() * 6 + 1);

    // when user roll the dice show them the dice
    dice.classList.remove("hidden");

    // Changing the src attribute.
    dice.src = `Images/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to the active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // check if player's score is 100
    // finish the game
    if (score[activePlayer] >= 50) {
        playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      // btnRoll.classList.add('hidden');
      // btnHold.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){
    location.reload();
})
