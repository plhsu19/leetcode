/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let lo = 0;
    let hi = arr.length - 2;
    while (hi > lo) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] < arr[mid + 1]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};