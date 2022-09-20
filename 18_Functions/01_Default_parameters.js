// Default parameters is needed when a user did not pass the value for the parameters assigned to the function.

"use strict";

const bookingArray = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = numPassenger * 199
) {
  // old way to achieve Default parameters ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookingArray.push(booking);
};

createBooking("304");
createBooking("304", 2, 500);
createBooking("304", 2);
// createBooking("304", ,2); // cannot do this we can't skip the middle argument what we can do is write undefined at that place.
createBooking("304", undefined, 50);
