/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var checkPossibility = function(nums) {
    let modified = false;
    const n = nums.length;
    
    for (let i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            if (modified) return false;
            
            modified = true;
            
            // modify the violation pair after comparing with the i - 1
            if (i === 1 || nums[i] >= nums[i - 2]) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }
    return true; 
};