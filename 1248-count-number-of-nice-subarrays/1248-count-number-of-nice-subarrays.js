/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let oddCount = 0
    let result = 0
    for(const num of nums){
        if(num % 2 === 1) oddCount++

        if(map.has(oddCount-k)){
            result += map.get(oddCount-k)
        }

        map.set(oddCount, (map.get(oddCount) || 0) + 1)
    }
    return result
};