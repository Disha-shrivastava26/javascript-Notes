
'use strict';

//constructor function

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const jonas = new Person('disha', '2004');
console.log(jonas);

// prototype

console.log(Person.prototype);

Person.prototype.caleAge = function () {
  console.log(2026 - this.birthYear);
};

console.log(Person.prototype);

// the new object created by the constructor function now access the
// it can acess the methods and properties of the prototype

jonas.caleAge();

// we

console.log(jonas.__proto__ === Person.prototype);

//  new object only show its own properties rather than the access properties

Person.prototype.species = function () {
  console.log('homosepians');
};

console.log(jonas.__proto__);
