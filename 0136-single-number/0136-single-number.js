/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];

    let ans = nums[0];

    let i = 1;
    while(i < nums.length){
        ans = ans ^ nums[i++];
    }

    return ans;
};