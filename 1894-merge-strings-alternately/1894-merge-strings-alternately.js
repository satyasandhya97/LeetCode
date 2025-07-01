/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged='';
    let result = word1.length >=  word2.length ? word1.length : word2.length
    for(let i = 0; i < result ; i++){
        if(word1.length-1 < i){
            merged += word2[i];
            continue;
        }
        if(word2.length-1 < i){
            merged += word1[i];
            continue;
        }
        merged += word1[i] + word2[i]
    }
    return merged
};