/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a,b) => a - b )

    let count = 1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 1) continue
        else if(nums[i] === count && nums[i+1] === count+1){
            count++
            continue
        }else if(nums[i] === count && i !== nums.length-1 && nums[i+1] === count){
            continue
        }else if(nums[i] !== count){
            return count
        }
        count++
    }

    return count
};