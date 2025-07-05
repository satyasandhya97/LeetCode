/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let maxCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            currentCount++;
        }else if(nums[i]===0){
            currentCount =0
        }
        if(maxCount < currentCount){
           maxCount = currentCount;
        }

    }
    return maxCount
};