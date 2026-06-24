/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
    
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