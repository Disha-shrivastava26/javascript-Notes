"use stict";

let nameFirst = "disha";
console.log(nameFirst);

//void function

// function as keyword

function logger() {
  console.log(" this is an empty function it will not return any value");
}

logger(); // calling the function

// function with return
// parameters: variables that are specify to any function
// arguments: variables that are passed during the invoking of the function

function placeholder(firstName, lastName) {
  const fullname = console.log(`my full name is ${firstName} ${lastName}`);
  return fullname;
}

const finalName = placeholder("disha", "shrivastava");
console.log(finalName);
