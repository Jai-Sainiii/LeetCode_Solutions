/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map();
    let first = new Map();
    let degree = 0
    let min = 0
    
    for(let i = 0; i < nums.length; i++){
        if(!first.has(nums[i])){
            first.set(nums[i], i);
        }
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if(map.get(nums[i]) > degree){
            degree = map.get(nums[i]);
            min = i - first.get(nums[i]) + 1;
        } else if(map.get(nums[i]) === degree){
            min = Math.min(min, i - first.get(nums[i]) + 1)
        }
    }

    return min
};