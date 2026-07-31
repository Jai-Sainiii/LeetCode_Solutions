
var MyQueue = function() {
    this.stack = []
    this.tempStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.tempStack.length && !this.stack.length){
        return null
    }
    if(this.tempStack.length){
        return this.tempStack.pop()
    }
    while(this.stack.length){
        this.tempStack.push(this.stack.pop())
    }
    return this.tempStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.tempStack.length){
        return this.tempStack[this.tempStack.length-1]
    }
    else if(this.stack.length){
        while(this.stack.length){
            this.tempStack.push(this.stack.pop())
        }
        return this.tempStack[this.tempStack.length-1]
    }
    else{
        return null
    }
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