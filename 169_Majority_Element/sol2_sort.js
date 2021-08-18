// intuitive
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let count = 0;
    let majorNum = null;
    let half = Math.floor(nums.length/2);
    let preNum = null;
    
    nums.sort((a, b) => a - b);
    
    for (n of nums) {
        if (n !== preNum) {
            count = 1;
            preNum = n;
        } else {
            count++;
        }
        if (count > half) {
            majorNum = n;
            break;
        }
    }
    return majorNum;
};


// improved sort
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    const half = Math.floor(nums.length/2);
    
    return nums[half];
};