/**
 * Initialize your data structure here.
 */
 var MyHashSet = function() {
    this.set = [];
    this.M = 64;
    
};

/** 
 * @param {number} key
 * @return {number} index
 * trivial hash function without converting integer key into positive value
 */
MyHashSet.prototype.hash = function (key) {
    return key % this.M;
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const idx = this.hash(key);
    
    // if set already has the key
    if (this.contains(key)) return;
    
    // if key has not been inserted into the set
    if (!this.set[idx]) {
        this.set[idx] = [key];
    } else {
        this.set[idx].push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this.hash(key);
    
    if (!this.contains(key)) return;
    
    for (let i = 0; i < this.set[idx].length; i++) {
        if (key === this.set[idx][i]) {
            this.set[idx].splice(i, 1);
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const idx = this.hash(key);
    // if already a key/keys with this index is inserted:
    if (this.set[idx]) {
        for (n of this.set[idx]) {
            if (key === n) return true;
        }
    }
    
    return false;
};