
//Revision of Arrays

// Methods that do mutate the orignal Arrays


// 1/ push => it push the element from back into the Arrays

const arr= new Array(5);
arr[4]=5;
arr.push(5);
console.log(arr);

//2 / pop => remove the elements from the end

arr.pop();
console.log(arr);

// 3 / shift=> remove the item from the beginging
arr[0]=1;
const val=arr.shift();
console.log(val);

//4 / unshift => add new element at the start

arr.unshift(2);
console.log(arr);


// 5 / splice = extract values from the orignal Array and replace or add new elements

const arr2=['I','Love ','js','right','Now'];

// syntax

// splice(startIndex,deleteCount,replace1,replaceN);

arr2.splice(1,1);
console.log(arr2); // remove 'love'


// replace
arr2.splice(0,3,'but','also');
console.log(arr2);

//insert without removing 

arr2.splice(2,0,'so');
console.log(arr2);

// adding negative indexs=> traversal start from the back side of the Array


arr2.splice(-1,0,'try that');
console.log(arr2);

//6/ sort() => transform the array

const arr3=['albert','ram','sieve']; //A>a
console.log(arr3.sort());

// sort() do not sort numbers so use camparator use callback function 

const arr4= [1,2,4,9,2,3,8];

// ascending
arr4.sort((a,b)=>a-b);
console.log(arr4);


// descending

arr4.sort((a,b)=>b-a);
console.log(arr4);



// 7 / reverse() => transform the array

arr4.reverse();
console.log(arr4);

//8 / slice(start,end) => create a copy do not mutate the array

const arr6=arr4.slice();
console.log(arr6);
const arr7=arr4.slice(2,3);
console.log(arr7);
// 9/ concat()=>join the two array

const arr5=[4,5,6,7];
console.log(arr4.concat(arr5));



