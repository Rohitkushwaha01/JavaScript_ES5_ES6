console.log("Guess My Number!!");

// Selecting all the Elements from the DOM
const displayMessage = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const scoreElement = document.querySelector(".score");
const again = document.querySelector(".again");

// Generating a random Number 
let randomNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

// function to display the message.
function display(message){
    displayMessage.textContent = message;
}


// handling a click event to the Check button.
checkBtn.addEventListener('click', function(){
    const guessInput = Number(document.querySelector(".guess").value);
    if(!guessInput){
        display("NO NUMBER");
    }
    else if (guessInput == randomNumber) {
        display("Correct Guess!!");
        document.querySelector('body').style.backgroundColor = "green";
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    }
    else if(guessInput < randomNumber){
        if (score > 0) {
            display(`Too low ${guessInput}`);
            score--;
            scoreElement.textContent = score;
        }
    }
    else if(guessInput > randomNumber){
        display(`Too High ${guessInput}`);
        score--;
        scoreElement.textContent = score;
    }
});

again.addEventListener('click', ()=>{
    display("Start guessing!!");
    scoreElement.textContent = 20;
    document.querySelector('body').style.backgroundColor = "black";
    Number(document.querySelector(".guess").value) = 0; 
})
