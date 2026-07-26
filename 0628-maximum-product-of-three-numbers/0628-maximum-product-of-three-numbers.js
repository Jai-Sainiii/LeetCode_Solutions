/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let thirdMax = -Infinity
    let secondMax = -Infinity
    let firstMax = -Infinity
    let firstMin = Infinity
    let secondMin = Infinity
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > firstMax){
            thirdMax = secondMax
            secondMax = firstMax
            firstMax = nums[i]
        }else if(nums[i] > secondMax){
            thirdMax = secondMax
            secondMax = nums[i]
        }else if(nums[i] > thirdMax){
            thirdMax = nums[i]
        }
        if(nums[i] < firstMin){
            secondMin = firstMin
            firstMin = nums[i]
        }else if(nums[i] < secondMin){
            secondMin = nums[i]
        }
    }
    let prod = Math.max(firstMin * secondMin * firstMax, firstMax * secondMax * thirdMax)
    return prod;
};