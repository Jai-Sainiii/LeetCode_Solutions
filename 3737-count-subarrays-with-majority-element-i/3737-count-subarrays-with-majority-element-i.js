/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let prefix = []

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target){
            prefix[i] = 1
        }else{
            prefix[i] = -1
        }
    }

    let ans = 0

    for (let i = 0; i < prefix.length; i++) {
        let sum = 0
        for (let j = i; j < prefix.length; j++) {
            sum += prefix[j]
            if(sum > 0) ans++
        }
    }

    return ans
};