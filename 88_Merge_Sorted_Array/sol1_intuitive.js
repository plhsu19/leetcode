/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    if (n === 0) return nums1;
    
    // merge 2 arrays
    nums1.length = m;
    
    nums2.forEach(num => {
        nums1.push(num);
    })
    
    // sort the nums1 with ascending order
    nums1.sort((a, b) => {
        return a - b;
    });
    
    return nums1;
};