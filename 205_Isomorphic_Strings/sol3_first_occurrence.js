/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    return transform(s) === transform(t);
};

function transform(s) {
    let transformedS = ''
    const mapS = new Map;
    
    for (let i = 0; i < s.length; i++) {
        if (!mapS.has(s[i])) {
            mapS.set(s[i], i);
        }
        transformedS = transformedS + ' ' + mapS.get(s[i]);
    }
    return transformedS;
}