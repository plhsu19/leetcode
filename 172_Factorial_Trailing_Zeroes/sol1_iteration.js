/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    let count = 0;
    let k = 5;
    
    while (Math.floor(n / k) > 0) {
        count += Math.floor(n / k);
        k *= 5;
    }
    
    return count;
};