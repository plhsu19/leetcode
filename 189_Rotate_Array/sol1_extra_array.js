/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    
    // handling k > nums' length
    const n = nums.length
    k = k % n;
    if (k === 0) return;
    
    // sol1: slice, splice
    let array1 = nums.slice(n-k, );
    for (let i = n - k - 1; i >= 0; i --) {
        nums[i + k] = nums[i];
    }
    nums.splice(0, k, ...array1);  
};

// more concise form
var rotate = function(nums, k) {
    // handling k > nums' length
    const n = nums.length
    k = k % n;
    if (k === 0) return;
    
    let array1 = nums.slice(n - k, );
    nums.splice(n - k, k);
    nums.splice(0, 0, ...array1);
};