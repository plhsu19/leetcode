/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const set = new Set();
    const missingNums = [];
    
    // add numbers in nums into the set
    for (const num of nums) {
        set.add(num);
    }
    
    // find the missing numbers from the set
    for (let i = 1; i <= nums.length; i++) {
        !set.has(i) && missingNums.push(i);
    }
    
    return missingNums;
};