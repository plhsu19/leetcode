/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    const map_s_t = new Map();
          map_t_s = new Map();
    
    if (s.length !== t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        const si = s[i];
        const ti = t[i];
        if (!map_s_t.has(si) && !map_t_s.has(ti)) {
            map_s_t.set(si, ti);
            map_t_s.set(ti, si);
        } else if (map_s_t.get(si) !== ti || map_t_s.get(ti) !== si) {
            return false;
        }
    } 
    return true;
};