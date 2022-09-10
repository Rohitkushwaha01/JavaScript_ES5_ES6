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

// console.log(restaurant.openingHours.sunday.open); // throws error
// To avoid this error use optional chaining operator.
console.log(restaurant.openingHours.sunday?.open);

// monday exits so it will log monday's opening hour.
console.log(restaurant.openingHours.monday?.open);

const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

for(const day of weekdays){
    console.log(restaurant.openingHours[day]?.open);
}

// optional chaining on functions
console.log(restaurant.order?.(2,1) ?? "function not exits");
console.log(restaurant.orderd?.(2,1) ?? "function not exits");

// optional chaining on Arrays
const users = [{
    name: "rohit",
    email: "rohitkushwaha756@gmail.com"
}]

console.log(users[0]?.name ?? "not exits");