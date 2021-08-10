/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);  
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();  
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let minElem = this.stack[0];
    for (elem of this.stack) {
        if (elem < minElem) {
            minElem = elem;
        }
    }
    return minElem;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */