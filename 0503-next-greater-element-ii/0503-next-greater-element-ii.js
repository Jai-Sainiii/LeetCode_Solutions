/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1)
    let stack = []
    for(let i = 2 * nums.length - 1; i >= 0; i--){
        index = i % nums.length

        while(stack.length && stack[stack.length-1] <= nums[index]){
            stack.pop()
        }

        if(i < nums.length){
            if(stack.length > 0){
                res[index] = stack[stack.length-1]
            }
        }

        stack.push(nums[index])
    }

    return res
};