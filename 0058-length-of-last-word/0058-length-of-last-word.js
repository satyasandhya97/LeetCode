/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimValue = s.trim();
    let count=0;
    for(let i = trimValue.length-1; i>= 0; i--){
        if(trimValue[i] == ' '){
            break;
        }
        count++;
    }
    return count;
};