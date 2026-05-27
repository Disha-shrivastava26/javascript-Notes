'use strict';

//default parameter

//example
const bookings = [];

const createBooking = function (name, passengers = 1, seats = 199) {
  //create an object
  const booking = {
    name,
    passengers,
    seats,
  };

  console.log(booking);
  bookings.push(booking);
};

//calling the function

createBooking('Lh123');
createBooking('Lh123', 34, 199);
createBooking('Lh123', 88, 129);
