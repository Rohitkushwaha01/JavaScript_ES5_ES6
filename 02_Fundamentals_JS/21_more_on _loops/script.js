// create a bills array, and calculate tip and totalBill of each element of bills array using for loops.

let bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totalBill = [];

for (let i = 0; i < bills.length; i++) {
    const tip = ()=>bills[i]<=300 && bills[i]>=50?bills[i]*0.15:bills[i]*0.2;
    tips.push(tip());
    totalBill.push(tip()+bills[i]);
}

console.log("The array of bills is : "+ bills);
console.log("The array of tips is : "+ tips);
console.log("The array of total is : "+ totalBill);

// create a function which takes an array and calculate average of that array.

function calcAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];
    }
    console.log("The sum of Totalbill Array is : " + sum);
    return sum/arr.length;
}

console.log("The Average of totalBill is : "+calcAverage([60,90,70]));
