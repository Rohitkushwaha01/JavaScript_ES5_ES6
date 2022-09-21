const flight = "LH403";
const Rohit = {
    name: "Rohit Kushwaha",
    passport: 4030380202
}

const checkIn = function(flightNum, passenger){
    flightNum ="GH304",
    passenger.name = "Mr." + passenger.name;

    if (passenger.passport === 4030380202)
        console.log("checked In");
    else
        console.log("Wrong Passport!")
}

checkIn(flight, Rohit);
console.log(flight, Rohit);

// Is the same as doing....
// passing a copy of flight not address
// const flightNum = flight;
// In javascript, object is stored in heap so that if in any function the object that we passed is changed then it will affect the object outside the function too as object has only one copy.
// const passenger = Rohit;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*1034305633);
    console.log(person.passport);
}

newPassport(Rohit);
checkIn(flight,Rohit)