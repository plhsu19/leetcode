/**
 * @param {string} s
 * @return {number}
 * improved solution
 */
 var romanToInt = function(s) {
    const hash = {
        'I': 1, // string as the instance variable's name (key)?
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        let curNum = hash[s[i]];
        let nextNum = (i === s.length - 1 ? 0 : hash[s[i + 1]]);
        
        sum += curNum;
        if (curNum < nextNum) {
            sum -= 2 * curNum;
        }
    }
    return sum;
};
