/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let c1 = 0
    let c2 = 0
    let c3 = 0

    for(const num of nums){
        if(num === 0) c1++
        else if(num === 1) c2++
        else c3++
    }

    for (let i = 0; i < c1; i++) {
        nums[i] = 0 
    }
    for (let i = c1; i < c1 + c2; i++) {
        nums[i] = 1
    }
    for (let i = c1 + c2; i < c1 + c2 + c3; i++) {
        nums[i] = 2
    }

    return nums
};