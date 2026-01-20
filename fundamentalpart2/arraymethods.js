// Arrays Methods in js

const years = [11, 22, 33];

// 1 to add the element into the array

// to push from back
years.push(44);
console.log(years);

// push() return the length of the new array

const newLen = years.push(44);
console.log(years);

// unshift(): to add element from the front

years.unshift(123);
console.log(years); // also return the length of new array

// to remove elements
// to remove from the back

years.pop();

// return the element removed
const val = years.pop();
console.log(years);

// to remove from the front
// shift()

const val1 = years.shift();
console.log(years);

// to identify whether the value is presenmt or not
// using includes()
// follow strict equality
//.. to do not allow type coresion

if (years.includes(33)) {
  console.log(" this is the number we have in the data");
}

// to find the position

console.log(years.indexOf(44));
