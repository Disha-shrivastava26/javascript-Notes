//array and objecr Destructuring

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startindex, menuindex) {
    return [this.starterMenu[startindex], this.mainMenu[menuindex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];

//destructuring arrays

let [a, b, c] = arr;
console.log(a, b, c);

// swap the values

[a, c, b] = [a, b, c];
console.log(a, b, c);

//return the array from function and then destructure it
const [x, y] = restaurant.order(1, 2);
console.log(x, y);

// how to destructure a nested array

const ar1 = [2, 3, [5, 6]];

const [i, , [j, k]] = ar1;
console.log(i, j, k);

// object destructure
// before es6 how we destructure the objects in js

let person = {
  firstName: 'disha',
  lastName: 'shrivastava',
};

// now i want any variable to get the properties of the obj

const firstName1 = person.firstName;
const lastName = person.lastName;

console.log(firstName1, lastName);

//destructuring a NULL obj

function nullObject() {
  return null;
}

let { by, la, si } = nullObject() || {};
console.log(by, la, si);

//what is happening here
//here
// nullObject return a falsy value
// there it will return the right hand side of the OR operator
// hence all the varible will be valued as undefined

//Nested  destructure;

let employee = {
  id: 2055,
  name: {
    firstName2: 'disha',
    lastName1: 'shrivastava',
  },
  gender: 'male',
};

//i want to access the nested property

let {
  name: { firstName2, LastName2 },
  gender,
  meal,
} = employee;

console.log(firstName2, LastName2, gender);
