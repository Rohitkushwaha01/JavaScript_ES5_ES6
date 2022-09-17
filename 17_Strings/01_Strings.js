const thunderClouds = "You're saying those words like you hate me now";
const Audio = "I'm gonna live like tomorrow doesn't exist love me now";

// String always starts with 0 index.
console.log(thunderClouds[0]);
console.log(thunderClouds[3]);
console.log(thunderClouds[8]);

// Some common methods of strings.
console.log(thunderClouds.length); // length is not a method it's an property.
console.log(thunderClouds.indexOf("r"));
console.log(thunderClouds.lastIndexOf("r"));
console.log(thunderClouds.slice(4));
console.log(thunderClouds.slice(3,40));
console.log(thunderClouds.slice(0, thunderClouds.indexOf(' ')));
console.log(thunderClouds.slice(0, thunderClouds.lastIndexOf(' ')));

const checkLyrics = function(song){
    const lyrics = song.includes('hate');
    if (lyrics)console.log("you got the lyrics");
    else console.log("oops you didn't got it.");
}

checkLyrics(thunderClouds);
checkLyrics(Audio);

// String is of object type
console.log(typeof new String("Rohit"));