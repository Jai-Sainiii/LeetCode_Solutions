/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let min = Math.floor(nums.length / 3)
    let numbers = []
    let map = new Map()

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    for(const [key, value] of map){
        if(value > min){
            numbers.push(key)
        }
    }

    return numbers
};