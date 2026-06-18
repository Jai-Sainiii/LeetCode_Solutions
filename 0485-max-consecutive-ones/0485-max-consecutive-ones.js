/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ctn = 0
    let max = 0

    for(const num of nums){
        if(num === 1){
            ctn += 1
            max = Math.max(max, ctn)
        }else{
            ctn = 0
        }
    }

    return max
};