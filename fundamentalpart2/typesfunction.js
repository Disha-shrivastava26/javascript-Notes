//types of functions

// function decalaration
// function expression
// arrow function

function calcAge1(birthyear) {
  return 2037 - birthyear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression

// here we take function as expression

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};

const age2 = calcAge2(1991);
console.log(age2);

// arrow function
// for one line of code

const calcAge3 = (birthyear) => 2037 - birthyear;

const age3 = calcAge3(1991);

// for multiple line and parameter

const calcAge4 = (birthyear, firstname) => {
  const currentage = 2037 - birthyear;
  const retirementage = 65 - currentage;

  return `${retirementage} name of the person ${firstname}`;
};

const age4 = calcAge4(1991, "disha");
console.log(age4);
