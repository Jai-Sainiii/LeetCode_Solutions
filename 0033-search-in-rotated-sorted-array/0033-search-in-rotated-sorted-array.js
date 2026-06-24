/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0 && nums[0] === target) return 0
    else if(nums.length === 0 && nums[0] !== target) return -1

    low = 0
    high = nums.length-1
    while(low <= high){
        let mid = Math.floor((low+high)/1)
        if(nums[mid] === target){
            return mid
        }
        if(nums[low] <= nums[mid]){
            if(target < nums[mid] && nums[low] <= target){
                high = mid - 1
            }else{
                low = mid + 1
            }
        }else{
            if(target > nums[mid] && nums[high] >= target){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
    }

    return -1
};