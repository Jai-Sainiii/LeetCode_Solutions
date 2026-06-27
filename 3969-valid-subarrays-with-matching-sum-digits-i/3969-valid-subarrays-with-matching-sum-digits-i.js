/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var countValidSubarrays = function(nums, x) {
    let ans = 0
    for(let i = 0; i < nums.length; i++){
        let sum = 0
        for(let j = i; j < nums.length; j++){
            sum += nums[j]
            if(sum % 10 !== x) continue

            let first = sum
            while(first >= 10){
                first = Math.floor(first/10)
            }
            if(first === x) ans++
        }
    }
    return ans
};