/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length === 1) return [nums[0]]
    let min = Math.floor(nums.length / 3)
    let numbers = []
    let map = new Map()

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1)
        if(map.get(num) === min+1){
            numbers.push(num)
        }
    }

    return numbers
};