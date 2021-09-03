/**
 * @param {number} k
 * @param {number[]} nums
 */
 class KthLargest {
    constructor (k, nums) {
        this.heap = [null];
        this.k = k;
    
        // add num into the heap min queue with size of k
        for (const num of nums) {
            this.insert(num); // O(logk)
            // if the size of heap > k, pop the min number
            if (this.heap.length > this.k + 1) {
                this.pop(); // O(logk)
            }
        }
    }
    
    /** 
    * @param {number} val
    * @return {number}
    */
    add(val) {
        this.insert(val);
    
        // if the size of heap > k, pop the min number
        if (this.heap.length > this.k + 1) {
            this.pop();
        }
    
        return this.heap[1];
    };
    
    // implementation of heap queue
    pop() {
        this.exchange(1, this.heap.length - 1);
        let result = this.heap.pop();
        this.sink(1);
        return result;
    }

    insert(num) {
        this.heap.push(num);
        this.swim(this.heap.length - 1);
    }

    sink(i) {
        const n = this.heap.length;
        while (i * 2 < n) {
            let k = i * 2;
            if (k + 1 < n && this.heap[k + 1] < this.heap[k]) {
                k = k + 1;
            }
            if (this.heap[i] > this.heap[k]) {
                this.exchange(i, k);
                i = k;
            } else {
                break;
            }
        }
    }

    swim(i) {
        while(i > 1) {
            let k = Math.floor(i / 2);
            if (this.heap[i] < this.heap[k]) {
                this.exchange(i, k);
                i = k;
            } else {
                break;
            }
        }
    }

    exchange (i, k) {
        const temp = this.heap[k];
        this.heap[k] = this.heap[i];
        this.heap[i] = temp;
    }
    
};
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */