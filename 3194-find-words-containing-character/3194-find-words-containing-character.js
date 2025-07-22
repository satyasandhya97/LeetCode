/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    words.map((val, index) => {
        if(val.includes(x)){
            result.push(index)
        }
    })
    return result;
};