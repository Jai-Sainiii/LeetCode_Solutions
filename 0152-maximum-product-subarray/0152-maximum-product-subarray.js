/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length

    let max = -Infinity
    let leftProd = 1
    let rightProd = 1

    for(let i = 0; i < n; i++){
        if(leftProd === 0) leftProd = 1
        if(rightProd === 0) rightProd = 1

        leftProd *= nums[i]
        rightProd *= nums[n-i-1]

        max = Math.max(max, leftProd, rightProd)
    }

    return max
};