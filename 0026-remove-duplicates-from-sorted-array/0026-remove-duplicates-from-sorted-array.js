/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1

    let count = 1
    let left = 1;

    for (let right = 1; right < nums.length; right++) {
        if(nums[right] > nums[left - 1]){
            check = nums[right];
            [nums[left], nums[right]] = [nums[right], nums[left]];
            count++
            left++;
        };
    };

    return count
};