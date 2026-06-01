// arrays methods

const arr=['a','b','c','d'];

// slice
// splice
// reverse
// concate
//join
// arr.at()

//slice(p1,p2)
console.log(arr.slice(2));
console.log(arr.slice(1,2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-1));

//splice(p1,number of ele)
// change the orignal array
console.log(arr.splice(2,2));

//concat
const arr2=['e','f','g'];

console.log(arr.concat(arr2));

//reverse()
console.log(arr2.reverse());

// join

console.log(arr.join('_'))
