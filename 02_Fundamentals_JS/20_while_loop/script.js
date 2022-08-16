const myInfo = ["Rohit", "Kushwaha", 19, 2003, true, ["Sayam", "Pankaj", "Darshan", "Sahil"]];

let i = 0;
while (i < myInfo.length) {
    console.log(myInfo[i]);
    i++;
}

// Roll a dice till its equal to six.
let dice;
let count = 0;
while(dice !== 6){
    dice = Math.trunc((Math.random()*6)+1);
    dice == 6?console.log(`YaY!! You got the number ${dice}`):console.log(`You rolled a dice ${dice}`);
    count++;
}

console.log(`The dice rolled ${count} time`);
