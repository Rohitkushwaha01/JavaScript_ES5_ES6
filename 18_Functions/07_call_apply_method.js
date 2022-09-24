'use strict'

const India = {
    name: "IndiaArilines",
    iataCode: "IN",
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.name} flight ${this.iataCode} ${flightNum}`);
    }
}

India.book(393, "Rohit");
India.book(303, "Pooja");

const Eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings :[],
}

const book = India.book;

// book(23, "Rohit kushwaha"); // does not work.

book.call(Eurowings, 23, "Rohit");

const flightData = ["534", "Pooja Kushwaha"];

// Not used in modern javascript.
book.apply(Eurowings, flightData);
book.apply(India, flightData);;

// new method to use this method is
book.call(Eurowings, ...flightData);


// Bind method 

const bookIndia = book.bind(India);
const bookEurowings = book.bind(Eurowings);
bookIndia(32, "Gaurav");
bookEurowings(425, "Gaurav");