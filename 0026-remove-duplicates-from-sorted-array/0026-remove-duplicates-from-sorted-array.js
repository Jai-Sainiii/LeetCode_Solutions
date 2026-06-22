/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1
 
    let count = 0
    let check = -Infinity;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if(nums[right] > check){
            check = nums[right];
            [nums[left], nums[right]] = [nums[right], nums[left]];
            count++
            left++;
        };
    };

    return count
};