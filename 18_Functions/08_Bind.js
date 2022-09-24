// Bind : The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const IndianPlane = {
    Country: "India",
    code: "IN",
    bookings: [],
    book(flightNum, fname, lname){
        console.log(`${fname} ${lname}, has booked a ticket: '${this.code}${flightNum}'`);
    }
}

const book = IndianPlane.book;

const bookIn = book.bind(IndianPlane);
bookIn(34,"Rohit","Kushwaha");

// with Event listener

IndianPlane.planes = 1;
IndianPlane.buyPlane  = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
console.log(IndianPlane);

document.querySelector('.buy').addEventListener('click', IndianPlane.buyPlane.bind(IndianPlane));

// Patial application

const addTax = (rate,value)=> value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Another way of doing the above example
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVat = addTaxRate(0.23);
console.log(addVat(100));