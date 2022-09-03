// Spread Operator: The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// The spread operator is often used in combination with destructuring.

// notes = Iterables: strings, array, maps are iterable but objects are not iterable.

const restaurant = {
    name: "Classico Italino",
    location: "Via Angelo, Italy",
    categories: ["Italian", "Pizzeria", "Organic", "Chinese"],
    starterMenu: ["Garlic Bread", "Manchurian", "Fried Rice", "Salad"],
    mainMenu: ["Pizza", "Risotto", "Pasta"],
    openingHours: {
        monday:{
            open: 12,
            close: 12
        },
        tuesday: {
            open: 12,
            close: 12
        },
        wednesday:{
            open: 12,
            close: 12
        },
        thursday: {
            open: 12,
            close: 12
        },
        friday:{
            open: 12,
            close: 12
        },
        saturday: {
            open: 12,
            close: 9
        }
    },
    order: function(startIndex, mainIndex){
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({startIndex, mainIndex, location, time}){
        console.log(`order received ${this.order(startIndex, mainIndex)} and will be delivered to ${location} at ${time}`);
    },
    orderPasto: function(ing1,ing2,ing3){
        if(ing1 & ing2 & ing3 == null){
            console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
        }
        else{
            console.log("Data is missing!")
        }
    }
}

let arr = [1,2,3,4];
let badArray = [-4, -3, -2, -1, 0, arr[0], arr[1], arr[2], arr[3]];
console.log(badArray);

let newArray = [-4, -3, -2, -1, 0, ...arr]
console.log(newArray);

let newMenu = [...restaurant.mainMenu, "Noodles"]
console.log(newMenu);

// merge two arrays
let mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// join two arrays
let menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu);

let str = "Rohit";
const letters = [...str];
console.log(letters);

const ingredients = [prompt("let\'s make pasta! Ingredient 1?"), prompt("let\'s make pasta! Ingredient 2?"), prompt("let\'s make pasta! Ingredient 3?")];
console.log(ingredients)

restaurant.orderPasto(...ingredients);

// objects (spread Operator)
const newRestaurant = {
    ...restaurant,
    founder: "Rohit Kushwaha",
    founded: 2022
}

console.log(newRestaurant);

console.log(newRestaurant.founded, newRestaurant.founder);