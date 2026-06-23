/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length-1 === 0 && nums[0] === target) return 0
    else if(nums.length-1 === 0 && nums[0] !== target) return -1

    let mid = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[i+1]){
            continue
        }else{
            mid = i + 1
            break
        }
    }

    let low = 0
    let high = nums.length - 1
    if(mid === -1) mid = Math.floor((low + high) / 2)

    while(low <= high){
        if(nums[mid] === target){
            return mid
        }else if(target >= nums[mid] && target <= nums[high]){
            low = mid + 1
            mid = Math.floor((low + high) / 2)
        }else{
            high = mid - 1
            mid = Math.floor((low + high) / 2)
        }
    }

    return -1
};