// setTimeout

setTimeout(()=>console.log(" this message will come after defined time is calculated"),3000);
console.log('waititng');

// passing parameter in setTimeout function 

const parameter=['bread','butter'];

const items=setTimeout((p1,p2)=>console.log(`this is the items we have ${p1}and ${p2}`),3000,...parameter);

console.log('waititng');


if(parameter.includes('milk')) clearTimeout(items);
