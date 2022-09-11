const restaurant = {
    name: 'Classico Italino',
    location: "Via Angelo, Italy",
    categories: ["Italian", "Pizzeria", "Organic", "Chinese"],
    starterMenu: ["Garlic Bread", "Manchurian", "Fried Rice", "Salad"],
    mainMenu: ["Pizza", "Risotto", "Pasta"],
    openingHours: {
        monday:{
            open: 12,
            close: 10
        },
        tuesday: {
            open: 12,
            close: 1
        },
        wednesday:{
            open: 12,
            close: 12
        },
        thursday: {
            open: 12,
            close: 24
        },
        friday:{
            open: 12,
            close: 18
        },
        saturday: {
            open: 12,
            close: 0
        }
    },
    order: function(startIndex, mainIndex){
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({startIndex, mainIndex, location, time}){
        console.log(`order received ${this.order(startIndex, mainIndex)} and will be delivered to ${location} at ${time}`);
    }
}

// use Object.keys() method to loop through objects
// pass the your object as a parameter to the Object.keys() method
for(const day of Object.keys(restaurant)){
    // console.log(day)
}

for(const day of Object.keys(restaurant.openingHours)){
    // console.log(day)
} 

// Object.values(object) returns all object value in form of array.
const objProperties = Object.values(restaurant)
// console.log(objProperties)

// looping to get entire object with keys and values.

for(const entries of Object.entries(restaurant)){
    console.log(entries);
}

for(const [key, {open, close}] of Object.entries(restaurant.openingHours)){
    console.log(`On ${key} we open at ${open} and close ${close}`);
}