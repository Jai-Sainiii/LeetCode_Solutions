/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let first = -10001
    let second = -10001
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > first){
            second = first
            first = nums[i]
        }else if(nums[i] > second){
            second = nums[i]
        }
    }
    return (first - 1) * (second - 1)
};