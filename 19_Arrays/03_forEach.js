// You cannot break out through a forEach loop because the continue and break statement do not work in forEach loop
// You can use forEach on maps and sets.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// looping through an array using for of loop
for (const movement of movements) {
    if(movement > 0)console.log(`You deposited ${Math.abs(movement)}`);
    else console.log(`You withdrew ${Math.abs(movement)}`)
}

console.log("--------------------------------------------");

// looping through an array using for of loop and getting index of an element
for (const [index,movement] of movements.entries()) {
    if(movement > 0)console.log(`${index} You deposited ${Math.abs(movement)}`);
    else console.log(`${index} You withdrew ${Math.abs(movement)}`)
}

console.log("--------------------------------------------");

// looping through an array using forEach loop
movements.forEach(function(movement){
    if(movement > 0)console.log(`You deposited ${Math.abs(movement)}`);
    else console.log(`You withdrew ${Math.abs(movement)}`)
});

// 0: function(200);
// 1: function(450);
// 2: function(-400);
// .
// .
// .
// 7: function(1300);

console.log("--------------------------------------------");

// looping through an array using forEach loop and getting index.
movements.forEach(function(movement, index, array){
    if(movement > 0){
        console.log(`${index} You deposited ${Math.abs(movement)}`);
    }
    else{ 
        console.log(`${index} You withdrew ${Math.abs(movement)}`);
    }
});

