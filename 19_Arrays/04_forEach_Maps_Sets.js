// forEach on map

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// loop through a Map using forEach loop
currencies.forEach(function(value, key, map){
    // console.log(value);
    // console.log(key);
    // console.log(map);
    console.log(`${key}: ${value}`);
})

// Set 
const currenciesUnique = new Set(["USD", "INR", "EUR", "GBP", "USD"]);
console.log(currenciesUnique);

// loop through a Set using forEach loop
currenciesUnique.forEach(function(value, _, map){
    // console.log(value);
    // console.log(key);
    // console.log(map);
    console.log(`${value}: ${value}`);
})