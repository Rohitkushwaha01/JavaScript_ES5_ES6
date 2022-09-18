const Audio = "I'm gonna live like tomorrow doesn't exist love me now";

console.log(Audio.toUpperCase());
console.log(Audio.toLowerCase());

// Capitalizing string.
const Capitalize = function(fname){
    const fnameLower = fname.toLowerCase();
    const fnameFinal = fnameLower[0].toUpperCase() + fnameLower.slice(1);
    return fnameFinal;
};

console.log(Capitalize("roHIt Kushwaha"));

// Check email
const loginEmail = "  Rohitkushwahac@gmail.com";

// const lowerEmail = loginEmail.toLowerCase();
// const whiteSpaceEmail = lowerEmail.trim();
// console.log(whiteSpaceEmail);

const checkEmail = function(loginEmail){
    const normalizedEmail = loginEmail.toLowerCase().trim();
    console.log(normalizedEmail);    
}

checkEmail(loginEmail);

// Replacing 
const price = "434,97pound";
const priceUs = price.replace(",", ".").replace("pound", "$");
console.log(priceUs);

const announcement = "All students should come to school for your school practicals and lecture";
// replace(oldString, newString) : it only replace the first occurrence
const correctAnnouncement = announcement.replace('school', 'college');
// replaceAll(oldString, newString) : it replaces all occurrence of the oldstring.
console.log(correctAnnouncement);

// String method which returns boolean.
const plane = 'Airbus A23neo';
console.log(plane.includes('A23neo'));
console.log(plane.includes('Rohit'));
console.log(plane.startsWith('A'));
console.log(plane.endsWith('o'));

if(plane.startsWith('Airbus') && plane.endsWith("neo"))
console.log("Part of the NEW family Airbus");
else console.log("Not part of the NEW  family airbus");

const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('guns') || baggage.includes('knife'))console.log("You are not allowed in the plane");
    else console.log("Welcome sir onboard");
}

checkBaggage("I have Guns and knife");
checkBaggage("I have some food and a phone");
checkBaggage("I brought my laptop");
checkBaggage("I brought a small knife");
checkBaggage("I'm a terrorist I got knife all the time");