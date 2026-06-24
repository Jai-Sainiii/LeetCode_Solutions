/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1
    let last = -1

    let low = 0
    let high = nums.length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid] >= target){
            first = mid
            last = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    if(nums[first] !== target) return [-1, -1]

    low = 0
    high = nums.length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid] === target){
            last = mid
            low = mid + 1
        }else if(nums[mid] > target){
            high = mid-1
        }else if(nums[mid] < target){
            low = mid + 1
        }
    }

    return [first, last]
};