// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// Sets are similar to array but it treats duplicate element as only one
// Set can be converted to array

const orderSets = new Set(["pizza", "chole", "Burger", "pizza", "chole"]);

for(const order of orderSets){
    console.log(order)
}

// Some methods of Set
orderSets.add("Shake");
orderSets.delete("chole");
// console.log(orderSets.has("chole"));
// orderSets.clear();
console.log(orderSets);

const orderArray = [...orderSets];
console.log(orderArray);

// old way of looping through array
// for (let i = 0; i < orderArray.length; i++) {
//     console.log(orderArray[i])
// }

for(const array of orderArray){
    console.log(array);
}


const letters = new Set();

letters.add("R");
letters.add("O");
letters.add("H");
letters.add("I");
letters.add("T");

letters.add({"fname": "Rohit", "lname":"Kushwaha"})

console.log(letters);

for (const letter of letters)console.log(letter, typeof(letter));