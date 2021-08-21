/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const set = new Set();
    
    while (n !== 1 & !set.has(n)) {
        set.add(n);
        n = calculateSum(n);
    }
    return n === 1;
};

function calculateSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += (n % 10)**2;
        n = Math.floor(n / 10);
    }
    
    return sum;
}