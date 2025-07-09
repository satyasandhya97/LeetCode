/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    if(nums.length === 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return mergeArray(left, right) 
};

function mergeArray(left, right){
    let i =0;
    let j =0;
    let arr = [];

    for(let k =0; k < left.length + right.length ; k++){  
        if(left.length <= i){
            arr.push(right[j])
            j++;
            continue;
        }
        if(right.length <= j){
            arr.push(left[i]);
            i++;
            continue;
        }
        if(left[i] < right[j]){
            arr.push(left[i]);
            i++;
        }else {
            arr.push(right[j]);
            j++;
        }
    }
    return arr;
}