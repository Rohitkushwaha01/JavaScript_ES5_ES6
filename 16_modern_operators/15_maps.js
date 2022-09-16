// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

let restuarant = new Map();

restuarant.set("Name", "Krishna Hotel");
restuarant.set("1", "Mohanagar");
restuarant.set("2", "Ramnagar");

restuarant.set("Categories", ["Pizza", "Burger", "Shake"]);

console.log(restuarant);

// Accessing each data
console.log(restuarant.get("Name"));
console.log(restuarant.get("1"));
console.log(restuarant.get("2"));
console.log(restuarant.get("Categories"));
console.log(restuarant.get("Categories")[0]);
console.log(restuarant.get("Categories")[1]);
console.log(restuarant.get("Categories")[2]);

// map.size: returns the size of map
console.log(restuarant.size);

// map.delete: deletes an existing record(returns true or false)
console.log(restuarant.delete('Categories'));
// map gets updated when we delete a particular record.
console.log(restuarant);

// map.has: checks whether a given key is present or not. It returns true or flase.

console.log(restuarant.has('Categories'));
console.log(restuarant.has('Name'));
console.log(restuarant.has('Rohit'));

for (const [key, value] of restuarant) {
    console.log("Key:", key, "Values:", value)
}