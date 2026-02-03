`use strict`

// objects in javascript

// object in js is to data which is not structured
// means they can be accessible at any order
// are accessed through key-value pair


// create an object

const disha = {
  firstName: "Disha",
  lastName: "shrivastava",
  hobby: "dance",
  job: "developer",
};

// how to access the objects property

// dot notation
// bracket notation

console.log(disha.lastName); // it will search the property with same name

console.log(disha["lastName"]); // it will the compute the value hold by the expression

// how to add the value

disha.location = "indore";
disha[location] = "indore";

console.log(
  `${disha.firstName} has hobby ${disha.hobby} but she is in ${disha.location}`,
);
