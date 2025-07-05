/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    totalSum = n * (n + 1) / 2;

    let arrayOfSum = 0;
    for(let i = 0; i < nums.length ; i++){
        arrayOfSum = arrayOfSum + nums[i]
    }
    return totalSum - arrayOfSum;
};