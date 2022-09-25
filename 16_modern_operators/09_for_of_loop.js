// In for of loop continue and break statement work but in forEach loop continue and break does not work, forEach loop loop through the entire array at once.

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
    }
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) {
    console.log(item);
}

for(const item of menu.entries()){
    console.log(item); // returns a new array with index and element.
}

// Destructured item
for(const [index, item] of menu.entries()){
    console.log(index, item); // returns value with index and element
}