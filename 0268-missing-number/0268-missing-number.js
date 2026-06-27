/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let N = nums.length
    let sum = 0
    for(const num of nums){
        sum += num
    }
    expSum = N * (N + 1) /2
    return expSum - sum
};