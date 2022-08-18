// Changing HTML elements 

let items = document.querySelectorAll(".items");

console.log(items); // returns nodelist

// used for loop to loop through nodelist to get each item.
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// used for loop to loop through nodelist and get each innerText.
for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerText);
}

// Now changing the text of item

items[0].innerText = "I'm changed";
console.log(items[0]);




