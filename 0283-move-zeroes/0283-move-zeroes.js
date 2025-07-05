/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j]){
            nums[x] = nums[j]
            x++
        }
    }
    for(let i = x; i < nums.length; i++){
        nums[i] = 0
    }
};