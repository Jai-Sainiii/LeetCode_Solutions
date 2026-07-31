
var MyStack = function() {
    this.que = []
    this.queTemp = []
    this.size = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let size = this.que.length
    this.que.push(x)
    for(let i = 0; i < size; i++){
        this.que.push(this.que.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.que.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.que[0] 
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.que.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */