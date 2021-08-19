/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    
    k = k % nums.length;
    reverse(nums, 0, nums.length);
    
    reverse(nums, 0, k);
    reverse(nums, k, nums.length);  
};


function reverse(array, start, end) {
    while (end > start) {
        let temp = array[end - 1];
        array[end - 1] = array[start];
        array[start] = temp;
        start++;
        end--;
    }
}