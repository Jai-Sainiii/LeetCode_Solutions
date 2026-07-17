/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = []
    let max = 0
    for(let i = 0; i < heights.length; i++){
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]){
            let ele = stack.pop()
            let nse = i
            let pse = stack.length ? stack[stack.length-1] : -1

            max = Math.max(max, heights[ele] * (nse - pse - 1))
        }
        stack.push(i)
    }

    while(stack.length){
        let ele = stack.pop()
        let pse = stack.length ? stack[stack.length-1] : -1
        let nse = heights.length

        max = Math.max(max, heights[ele] * (nse - pse - 1))
    }

    return max
};