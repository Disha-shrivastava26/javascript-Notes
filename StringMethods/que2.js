/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    s.reverse();

    console.log(s);
    
};

// 2 manually 
var reverseString=function(s){

  let left=0;
  let right=s.length-1;

  while(left<right){
    [s[left],s[rightt]]=[s[right],s[left]];
    left++;
    right--;
  }

  console.log(s);
}
  
