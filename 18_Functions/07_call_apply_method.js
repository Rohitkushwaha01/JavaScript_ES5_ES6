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

}
