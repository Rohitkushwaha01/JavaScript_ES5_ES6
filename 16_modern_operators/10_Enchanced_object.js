const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday", "Sunday"];

const openingHours = {
    [weekdays[0]]:{
        open: 12,
        close: 12
    },
    [weekdays[1]]: {
        open: 12,
        close: 12
    },
    [weekdays[2]]:{
        open: 12,
        close: 12
    },
    [weekdays[3]]: {
        open: 12,
        close: 12
    },
    [weekdays[4]]:{
        open: 12,
        close: 12
    },
    [weekdays[5]]: {
        open: 12,
        close: 9
    }
}


const restaurant = {
    name: 'Classico Italino',
    location: "Via Angelo, Italy",
    categories: ["Italian", "Pizzeria", "Organic", "Chinese"],
    starterMenu: ["Garlic Bread", "Manchurian", "Fried Rice", "Salad"],
    mainMenu: ["Pizza", "Risotto", "Pasta"],
    // enhanced function 
    order(startIndex, mainIndex){
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({startIndex, mainIndex, location, time}){
        console.log(`order received ${this.order(startIndex, mainIndex)} and will be delivered to ${location} at ${time}`);
    },
    openingHours //enhanced object literal
}

console.log(restaurant);