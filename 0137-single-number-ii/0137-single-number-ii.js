/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b) => a-b);

    for(let i = 1; i < nums.length; i = i + 3){
        if(nums[i] !== nums[i-1]) return nums[i-1];
    }

    return nums[nums.length-1];
};