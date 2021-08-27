/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const map = new Map();
    const set = new Set();
    
    if (s.length !== t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i]) && !set.has(t[i])) {
            map.set(s[i], t[i]);
            set.add(t[i]);
            continue;
        }
        if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
            return false;
        }
        if (!map.has(s[i]) && set.has(t[i])) {
            return false;
        }        
    }
    return true; 
};