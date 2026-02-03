

/*
Key points about arrow functions:
. For one parameter and one-line body, you can omit parentheses around parameters and curly
braces
. With a one-liner without curly braces, the return is implicit
. For multiple parameters, you need parentheses: (param1, param2) => expression
. For multiple lines of code, you need curly braces and an explicit return statement
. Arrow functions don't have their own this keyword (important for more advanced JavaScript)*/

// Arrow function with one parameter and implicit return
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
// Arrow function with multiple parameters and multiple lines of code
const yearsUntilRetirement = (birthYear, firstName) => {
 const age = 2037 - birthYear;
 const retirement = 65 - age;
 return `${firstName} retires in ${retirement} years!`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
