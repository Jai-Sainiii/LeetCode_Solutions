/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let subsets = 1 << nums.length;

    for(let num = 0; num < subsets; num++){
        let subset = [];
        for(let i = 0; i < nums.length; i++){
            if(num & (1 << i)) subset.push(nums[i]);
        }
        result.push(subset);
    }

    return result;
};