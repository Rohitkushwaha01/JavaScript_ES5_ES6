// Example 1;

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 77;
    f = function(){
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);


//Reassigning f function.
h();
f();

console.dir(f);

// Example 2;

const boardPassengers = function(n, wait){
    const perGroup = n/3;
    
    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 group, each with ${perGroup} passengers`);
    }, 1000);

    console.log(`Will start boarding in ${wait} second`)
}

boardPassengers(180, 3);