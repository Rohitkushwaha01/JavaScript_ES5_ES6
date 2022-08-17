// Selecting all the Elements from the DOM
const displayMessage = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const scoreElement = document.querySelector(".score");
const again = document.querySelector(".again");

// Generating a random Number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// function to display the message.
function display(message) {
  displayMessage.textContent = message;
}

// handling a click event to the Check button.
checkBtn.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);
  // If user didn't provided any Number.
  if (!guessInput) {
    display("NO NUMBER");
  }
  // If the guessInput is matched with our randomNumber
  else if (guessInput == randomNumber) {
    display("Correct Guess!!");
    document.querySelector("body").style.backgroundColor = "green";
    // If the score goes greater than hightScore then only change the score else don't
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // If the guessInput is smaller than randomNumber
  else if (guessInput < randomNumber) {
    if (score > 0) {
      display(`Too low ${guessInput}`);
      score--;
      scoreElement.textContent = score;
    } else {
      display(`You lost the match To play again tap on Again button`);
    }
  }
  // If the guessInput is greater than randomNumber
  else if (guessInput > randomNumber) {
    if (score > 0) {
      display(`Too High ${guessInput}`);
      score--;
      scoreElement.textContent = score;
    } else {
      display(`You lost the match! To play again tap on Again button`);
    }
  }
});

// Handling again button, resetting all the values to their default except highscore.
again.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  display("Start guessing!!");
  score = 20;
  scoreElement.textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
});
