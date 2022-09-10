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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu)

for (const item of menu) {
    console.log(item);
}