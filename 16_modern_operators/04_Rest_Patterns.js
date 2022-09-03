// Rest Patterns and Parameters
// Rest elements always be the last element
// Rest is used where we would write variable names separated by a comma.
// Spread is used where we would othrwise write values, separated by a comma.

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
    },
    orderPizza: function(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
}

// SPREAD, because on Right side of = 
const arr = [1,2,3, ...[3,4]];

// REST, because on Left side of = 
const [a, b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza, risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu
]
console.log(pizza, risotto, otherFood)

// objects 
const {saturday, ...weekdays} = restaurant.openingHours;
console.log(saturday, weekdays);

// functions
const add = function(...numbers){
    let sum = 0;
    numbers.forEach(number =>{
        sum = sum + number;
    })
    console.log(sum);
}

add(2,3,5,10);
add(2,3);
add(9,3,41);

const num = [3,42,2];
add(...num);

restaurant.orderPizza("Paneer", "Onion", "tomato")
restaurant.orderPizza("Paneer")// get empty array.