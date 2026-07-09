/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let count = 0
    let max = 0
    let left = 0
    let right = 0
    while(right < nums.length){
        if(nums[right] === 0){
            count++
        }
        while(count > k){
            if(nums[left] === 0) count--
            left++
        }
        max = Math.max(max, right-left+1)
        right++
    }
    return max
};