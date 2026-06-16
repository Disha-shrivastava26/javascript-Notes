/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {

    // loop the string 
    // read each char 
    // if statisfy the condition apply the string methods
    let result='';


    for(const ch of s){
        
        if(ch>='a' && ch<='z'){
          result+=ch;
          console.log(`${result}`);
        }else if(ch==='#'){
            
            result+=result;
            console.log(`${result}`);
        }else if(ch==='%'){
           
            result=result.split('').reverse().join('');
             console.log(`${result}`);
        }else{
            // remove the last char

            result=result.slice(0,-1);
            console.log(`${result}`);
        }
    }

    return result;
    
};
