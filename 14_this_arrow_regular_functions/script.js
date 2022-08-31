// never use arrow function in methods. use arrow function within a function if this keyword is needed.
// arrow function did'nt have it's own this keyword it uses this keyword of its parents scope

const details = {
    fname: "Rohit",
    lname: "Kushwaha",
    year: 2003,
    age: function (){
        console.log(2022 - this.year);

        // Arrow function : As arrow function inherits this keyword from its parent scope.
        // Hence Arrow function works here 
        const isMillenial = ()=>{
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial();

        // Regular function : this keyword not works inside the function
        // const isMillenial = ()=>{
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996)
        // }
        // isMillenial();
    },
    greet: ()=>{
        console.log(`Hey there, I'm ${this.fname}`); // this keyword is not defined in arrow function.
    }
}

details.age();
details.greet();


