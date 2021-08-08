/**
 * @param {string} s
 * @return {number}
 * first shoot solution
 */

 var romanToInt = function(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let sum = 0;
    
    // loop through string to calculate the number
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
            sum -= 1;
        } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
            sum -= 10;
        } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
            sum -= 100;
        } else {
            sum += map.get(s[i]);
        }
    }
    sum += map.get(s[s.length - 1]);
    return sum;
};






















