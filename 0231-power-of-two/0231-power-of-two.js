/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    //solve it without loops/recursion?
    return n > 0 && (n & (n-1))===0;
};