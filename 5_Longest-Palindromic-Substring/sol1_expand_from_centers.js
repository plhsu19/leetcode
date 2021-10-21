/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    // handle empty input string
    if (s === null || s.length === 0) return "";
    
    let left = 0;
    let right = 0;
    const n = s.length;
    
    // helper function to find the palindrome among substrings ...
    // ... expanded from each mirror center
    function findPalindrome (l, r) {
        while (l - 1 >= 0 && r + 1 < n 
               && s[l - 1] === s[r + 1]) {
            l--;
            r++;
        }
        return [l, r];
    }
    
    for (let i = 0; i < n; i++ ) {
        
        const [l1, r1] = findPalindrome(i, i);
        const [l2, r2] = findPalindrome(i, i - 1);
        
        const len1 = r1 - l1 + 1;
        const len2 = r2 - l2 + 1;
        const len = right - left + 1;
        const maxLen = Math.max(len, len1, len2);
        
        if (len1 === maxLen) {
            left = l1;
            right = r1;
        } else if (len2 === maxLen) {
            left = l2;
            right = r2;
        }
    }
    
    return s.slice(left, right + 1);
};