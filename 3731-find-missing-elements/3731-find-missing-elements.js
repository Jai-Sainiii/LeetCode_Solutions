/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = Infinity;
    let max = -Infinity;

    for(let i = 0; i < nums.length; i++){
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }

    let set = new Set(nums);
    let ans = [];

    for(let i = min; i <= max; i++){
        if(!set.has(i)){
            ans.push(i);
        }
    }

    return ans;
};