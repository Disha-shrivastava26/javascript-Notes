// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//problem 1 to find the max and min from the array
// subtract the value
// avoid mistype values

//example

const temperature = [3, 6, 23, 1, "error", 4, 7];

//function to calculate the max
// min
// subtract
// return the amplitude

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  return max - min;
};

const temp = calcTemp(temperature);
console.log(temp);

//problem 2 to merge two arrays // arr1.concat(arr2)

const calcTemp2 = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  return max - min;
};

const temps = calcTemp2([1, 3, 4], [2, 5, 7]);
console.log(temps);
