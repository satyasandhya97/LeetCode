/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filterStr = "";
    let revStr = "";
    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filterStr += s[i];
            revStr = s[i] + revStr;
        }
    }
   
    return filterStr === revStr;

};