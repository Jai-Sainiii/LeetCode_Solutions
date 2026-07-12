
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.stack.length === 0){
        this.stack.push([value, value])
        return
    }else{
        this.stack.push([value, Math.min(value, this.stack[this.stack.length-1][1])])
        return
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    return
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1]
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */