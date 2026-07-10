/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a,b) => a-b)
    let left = 0
    let right = left+1
    while(right < nums.length){
        if(nums[left] === nums[right]){
            return nums[left]
        }else{
            left++
            right++
        }
    }
};