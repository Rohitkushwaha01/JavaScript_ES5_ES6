console.log(this);

function message(){
    console.log("Hii there!!");
}

this.message();

const details = {
    fname: "Rohit",
    lname: "Kushwaha",
    year:2003,
    age: function(){
        return 2022 - this.year;
    }
}

console.log(details.age());

const rohit = {
    college: "Dr.D.Y.Patil institute of technology",
    year: 2000
}

rohit.age = details.age;

console.log(rohit.college);
console.log(rohit.age());

const f = details.age;
console.log(f);

