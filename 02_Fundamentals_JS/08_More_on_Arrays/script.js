// create an function calctip which calculates the tip and store in into an array tips and create another array 'total' to store total amount including tip.

function calcTip(bill){
    let tip = (bill<=300 && bill>=50) ? bill*0.15 : bill*0.2;
    return tip;
}

let tips = [];
let total = [];

tips.push(calcTip(100));
tips.push(calcTip(500));
tips.push(calcTip(1000));

total.push(calcTip(100) + 100);
total.push(calcTip(553) + 500);
total.push(calcTip(1000) + 1000);

console.log(tips);
console.log(total);