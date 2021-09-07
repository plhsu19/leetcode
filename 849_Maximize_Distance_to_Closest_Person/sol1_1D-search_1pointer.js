/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    const len = seats.length;
    let anchor = -1;
    let maxDistance = 1;
    
    for (let i = 0; i < len; i++) {
        // calculate the length of empty seats
        if (seats[i] === 0) {
            if (anchor === -1 || i === len - 1) {
                maxDistance = Math.max(maxDistance, (i - anchor));
            } else {
                const distance = i - anchor;
                maxDistance = Math.max(maxDistance, Math.ceil(distance / 2));
            }
        } else {
            anchor = i;
        }
    }
    return maxDistance;
};