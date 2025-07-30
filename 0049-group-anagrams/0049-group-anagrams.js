/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for(let i =0; i< strs.length; i++){
        let sortValue = strs[i].split('').sort().join('')
        if(!map[sortValue]){
            map[sortValue] = [];
            map[sortValue].push(strs[i])
        }else {
            map[sortValue].push(strs[i])
        }
    }
    return Object.values(map)
};