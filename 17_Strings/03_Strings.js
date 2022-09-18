// split method
console.log("a+very+nice+string".split("+")) // split up and store every thing in an array.{
const [firstname, lastname] = "Rohit kushwaha".split(" ");
console.log(firstname, lastname);


const capitalizeName = function(name){
    const splitName = name.split(' ');
    const newArray = [];
    for (let item of splitName) {
        item = item.toLowerCase();
        newArray.push(item.slice(0,1).toUpperCase() + item.slice(1))
    }
    const finalName = newArray.join(" ");
    return finalName;
}

console.log(capitalizeName('Rohit kushwaha'));
console.log(capitalizeName('Rohit chotelal kushwaha'));
console.log(capitalizeName('RoHit choTelal kusHwaha'));
console.log(capitalizeName("ROHIT KUshwahA ChoTELAL"));

// Padding strings
const message = "Go to gate 23!";
console.log(message.padStart('25',"$"));
console.log(message.padEnd('25',"+"));
console.log(message.padStart('25', "$").padEnd('35',"+"));

const maskPhoneNumber = function(number){
    const numberIntoString = number + ''
    const lastThreeDigits = numberIntoString.slice(-4);
    return lastThreeDigits.padStart(numberIntoString.length, "*")
}

console.log(maskPhoneNumber(9503588850));
console.log(maskPhoneNumber(9921460252));

const maskEmail = function(email){
    const splitEmail = email.split('@');
    if(splitEmail[1] == "gmail.com"){
        const lastFiveLetters = splitEmail[0].slice(-5);
        return lastFiveLetters.padStart(splitEmail[0].length, '*');
    }
    else if(splitEmail[1] == "dypvp.edu.in"){
        const splitDot = splitEmail[0].split('.')
        const lastFiveLetters = splitDot[0].slice(-5)
        return lastFiveLetters.padStart(splitEmail[0].length, '*');
    }
    
}

console.log(maskEmail("rohitkushwahac@gmail.com"));
console.log(maskEmail("rohitkushwaha756@gmail.com"));
console.log(maskEmail("therohitkushwaha07@gmail.com"));
console.log(maskEmail("20510560.dypit@dypvp.edu.in"));

// Repeat method
const messageRepeat = "Bad Weather...all Departures Delayed";
console.log(messageRepeat.repeat(5));

const planInLine = function(n){
    console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
}
planInLine(4);
planInLine(40);
planInLine(2);