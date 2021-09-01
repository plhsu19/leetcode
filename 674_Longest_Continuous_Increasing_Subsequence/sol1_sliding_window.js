/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let maxLength = 0;
    let anchor = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] >= nums[i]) {
            anchor = i;
        }
        maxLength = Math.max((i - anchor + 1), maxLength);
    }
    return maxLength;
};