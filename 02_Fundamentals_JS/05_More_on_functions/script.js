'use strict'

let calcAverage = (fScore, sScore, tScore)=>{
    const totalScore = (fScore + sScore + tScore);
    const averageScore = (totalScore*100)/300;
    return averageScore;
}

let Scores = ()=>{
    let Score = Number(prompt("Enter Score"));
    return Score;
}

console.log("Team Dolphins");
let dolphins = calcAverage(Scores(), Scores(), Scores());
console.log(dolphins);

console.log("Team Kolas");
let kolas = calcAverage(Scores(), Scores(), Scores());
console.log(kolas);


let checkWinner = (dolphins, kolas)=>{
    if(dolphins > 2*(kolas)){
        console.log("Dolphins wins");
    }
    else if(kolas > 2*(dolphins)){
        console.log("kolas wins");
    }
    else{
        console.log("Match Draw");
    }
}

checkWinner(dolphins, kolas);