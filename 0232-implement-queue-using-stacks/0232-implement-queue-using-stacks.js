
var MyQueue = function() {
    this.stack = []
    this.tempStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(!this.stack.length) this.stack.push(x)
    else{
        while(this.stack.length){
            this.tempStack.push(this.stack.pop())
        }
        this.stack.push(x)
        while(this.tempStack.length){
            this.stack.push(this.tempStack.pop())
        }
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.tempStack.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */