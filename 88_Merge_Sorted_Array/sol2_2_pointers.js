/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // edge case handling
    if (n === 0) return;
    
    let current = m + n - 1;
    m -= 1;
    n -= 1;
    
    while (current >= 0) {
        // run out of elements in the original nums1, inserts remaining nums2 elements
        if (m < 0) {
            nums1[current--] = nums2[n--];
            continue;
        }
        // runout of elements in the nums2, inserts remaining nums1's elements
        
        if (n < 0) {
            nums1[current--] = nums1[m--];
            continue;
        }
        
        // compare the elements from 2 arrays, insert the larger one
        if (nums1[m] >= nums2[n]) {
            nums1[current--] = nums1[m--];
        } else {
            nums1[current--] = nums2[n--];
        }
    }
};