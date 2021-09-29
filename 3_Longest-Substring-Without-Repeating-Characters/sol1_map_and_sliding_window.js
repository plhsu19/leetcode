/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let maxLen = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char) && map.get(char) >= start) {
            maxLen = Math.max( i - start, maxLen);
            start = map.get(char) + 1;
        }
        map.set(char, i);

    }
    return Math.max(s.length - start, maxLen);
};