/**
 * two-pointers solution
 * 21.08.2021
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let fast = nextNumber(n);
    let slow = n;
    
    while (fast !== 1) {
        if (fast === slow) return false;
        fast = nextNumber(nextNumber(fast));
        slow = nextNumber(slow);
    }
    return true;
};

function nextNumber (n) {
    let sum = 0;
    while (n > 0) {
        sum += (n % 10)**2;
        n = Math.floor(n / 10);
    }
    return sum;
}