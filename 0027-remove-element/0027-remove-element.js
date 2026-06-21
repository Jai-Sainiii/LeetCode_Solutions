/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let k = 0

    for (let i = 0; i < nums.length; i++) {
        let isEqual = nums[i] === val

        if(!isEqual){
            [nums[i], nums[left]] = [nums[left], nums[i]]
            k++
            left++
        }
    }

    return k
};