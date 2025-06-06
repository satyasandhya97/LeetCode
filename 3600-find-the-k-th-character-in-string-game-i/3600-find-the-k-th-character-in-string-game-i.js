/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = "a";
    while(true){
        let generateString = "";

        if(word.length >= k){
            return word[k-1];
        }
        for(let i =0; i<word.length; i++){
          generateString += String.fromCharCode(word.charCodeAt(i) + 1 )  
        }
        word += generateString;
    }
};