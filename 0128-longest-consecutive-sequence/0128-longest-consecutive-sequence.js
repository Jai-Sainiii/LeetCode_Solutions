/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    let set = new Set(nums)
    let max = -Infinity

    for (const num of set) {
        if(!set.has(num-1)){
            let x = num
            let count = 1
            while(set.has(x+1)){
                count++
                x++
            }
            max = Math.max(max, count)
        }
    }

    return max
};