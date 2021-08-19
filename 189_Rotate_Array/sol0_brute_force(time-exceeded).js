/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // handling k > nums' length
    k = k % nums.length;
    
    const half = Math.floor(nums.length/2); 
    if (k <= half) {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
    } else {
        for (let i = 0; i < (nums.length - k); i++) {
            nums.push(nums.shift());
        }
    }
    return nums;
};