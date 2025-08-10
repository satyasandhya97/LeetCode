/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let stack = [];

    let n = nums2.length;

    stack.push(nums2[n-1]);
    map[nums2[n-1]] = -1;

    for(let i = n-2 ; i >= 0; i--){
        while(stack.length){
            if(stack[stack.length - 1] < nums2[i]){
                stack.pop()
            }else{
                map[nums2[i]] = stack[stack.length - 1]
                break;
            }
        }
        if(stack.length === 0){
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    return nums1.map( x => map[x]);
};