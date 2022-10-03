let fname = "malayalam";
let splitName = fname.split(""); // [ 't', 'i', 'h', 'o', 'R' ]

let reverseString = splitName.reverse().join(""); // tihor;

if(fname == reverseString){
    console.log("Palindrome : " + reverseString);
}
else{
    console.log("Not Palindrome : " + reverseString);
}