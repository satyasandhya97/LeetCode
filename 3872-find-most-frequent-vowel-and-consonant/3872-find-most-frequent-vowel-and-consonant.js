/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let newMap = {};

    for(let i =0; i < s.length; i++){
       if(!newMap[s[i]]){
        newMap[s[i]] = 1;
       }else {
        ++newMap[s[i]];
       }
    }
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowel = 0;
    let maxConst = 0;
    for(let j = 0; j < s.length; j++){
        if(vowels.includes(s[j])){
            if(newMap[s[j]] > maxVowel){
                maxVowel = newMap[s[j]];
            }
        }else {
            if(newMap[s[j]] > maxConst){
                maxConst = newMap[s[j]];
            }
        }
    }
    return  maxConst + maxVowel;
};