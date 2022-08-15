// Array methods and opertion

const friends = ["Rohit", "Shubham", "Gaurav", "Pooja", "Ajit", "Sayam", "Pankaj", "Darshan", "Sahil"];
console.log(friends);

// length method.
console.log(friends.length);

// get the last value of Array using length.
console.log(friends[friends.length - 1])

// push method : add a element at the end of the array.
friends.push("Ajinkya");
console.log(friends);

// unshift method : add a element at the start of the array.
friends.unshift("Rahul");

// pop method : removes the element of the end.
console.log(friends.pop())
console.log(friends);

// shift method :removes the element from the start.
console.log(friends.shift());
console.log(friends);

// indexOf : return the index number
console.log(friends.indexOf("Rohit"));
console.log(friends.indexOf("sahil")); // if not present return -1

// inclues : return true if the element exist and false if it not exist.
console.log(friends.includes("Rohit"));
console.log(friends.includes("sahil"));