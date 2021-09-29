/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const map = new Map(),
          n = s.length;
    let maxLen = 0,
        start = 0;
    
    
    for (let i = 0; i < n; i++ ) {
        const char = s[i];
        
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }
        maxLen = Math.max(maxLen, i - start + 1);
        map.set(char, i);
    }
    return maxLen;
};