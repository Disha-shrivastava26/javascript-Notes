// value vs reference parameter
// primitive data type act as pass by value
// object acts as reference but pass by value

const Name = 'disha';
const info = {
  age: 22,
  study: 'cs',
};

const student = function (firstname, infomation) {
  firstname = 'Miss' + firstname;
  infomation.study = 'os';
  if (infomation.age >= 18) {
    alert('Eligible to vote');
  } else {
    alert('Not eligible');
  }
};

student(Name, info);

console.log(Name); // primitive disha
console.log(info); // 22 and os
