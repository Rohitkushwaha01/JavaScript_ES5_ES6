// Destructuring Objects
// When destructuring objects there's no need to access code in sequence. We can access any data first which is last in object.

const restaurant = {
    name: 'Classico Italino',
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
    }
}


let {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// new variable names to the existed object (its possible)
let {name:restaurantName, openingHours: hours} = restaurant
console.log(restaurantName, hours);

// setting default value: here we setted array as a default value for menu.
let {menu = [], starterMenu: staters} = restaurant
console.log(menu, staters);

// mutating variables 
let a = 333;
let b = 302;
let obj = {a:1, b:2, c:3};
// {a, b} = obj; // Will not work
({a,b} = obj);
console.log(a,b);

// ({openingHours} = restaurant);
// console.log(openingHours.friday);

// Nested Objects
const {friday} = openingHours;
console.log(friday);

const {saturday: {open, close}} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
    time:"22:30",
    location: "Ramnagar",
    mainIndex: 2,
    startIndex: 2
});

restaurant.orderDelivery({
    time:"9:30",
    location: "Mohanagar",
    mainIndex: 1,
    startIndex: 3
})

