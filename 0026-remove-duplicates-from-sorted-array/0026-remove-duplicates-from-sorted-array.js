/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1

    let left = 0;

    for (let right = 1; right < nums.length; right++) {
        if(nums[right] !== nums[left]){
            left++;
            [nums[left], nums[right]] = [nums[right], nums[left]];
        };
    };

    return left+1
};