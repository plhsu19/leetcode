/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const map = {};
    let majority;
    
    for (n of nums) {
        if (!map[n]) {
            map[n] = 1;
        } else {
            map[n]++;
        }
        if (map[n] > nums.length/2) {
            majority = n;
            break;            
        }
    }
    return majority;
};