/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    function PSE(nums){
        let ans = []
        let stack = []
        for(let i = 0; i < nums.length; i++){
            while(stack.length && nums[stack[stack.length-1]] >= nums[i]){
                stack.pop()
            }

            ans[i] = stack.length ? stack[stack.length-1] : -1
            stack.push(i)
        }
        return ans
    }

    function NSE(nums){
        let ans = []
        let stack = []
        for(let i = nums.length-1; i >= 0; i--){
            while(stack.length && nums[stack[stack.length-1]] > nums[i]){
                stack.pop()
            }

            ans[i] = stack.length ? stack[stack.length-1] : nums.length
            stack.push(i)
        }
        return ans
    }

    let pse = PSE(heights)
    let nse = NSE(heights)

    let max = 0
    for(let i = 0; i < heights.length; i++){
        let ele = heights[i]

        max = Math.max(max, (ele * (nse[i] - pse[i] - 1)))
    }

    return max
};