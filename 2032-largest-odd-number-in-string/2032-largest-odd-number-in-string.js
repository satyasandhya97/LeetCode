/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let largest = "";
    for(let i = num.length; i > 0; i--){
      let odd = num.slice(0,i);
       if(Number(odd[i -1]) % 2 !== 0){
        largest = odd;
        break
       }
    }
    return largest;
};