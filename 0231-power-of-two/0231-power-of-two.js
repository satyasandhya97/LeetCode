/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    //solve it without loops/recursion?
    //using bitwise operator n= 16(10000) & n-1=15(01111) = 00000 then its return true
    return n > 0 && (n & (n-1))===0;
};