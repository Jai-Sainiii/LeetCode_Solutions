
var MyQueue = function() {
        this.items = []
        this.front = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.items.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.items[this.front++]
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.items[this.front]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.front >= this.items.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */