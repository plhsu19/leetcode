/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let missingNums = [];
    
    // loop through nums to in-place record appeared numbers
    for (const num of nums) {
        const index = Math.abs(num) - 1;
        if (nums[index] > 0) nums[index] *= -1;
    }
    
    // loop through the nums again to find missing numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) missingNums.push(i + 1);
    }
    return missingNums;
};