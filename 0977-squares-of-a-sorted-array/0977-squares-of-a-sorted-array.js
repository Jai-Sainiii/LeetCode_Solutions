/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    if(nums.length === 1){
        nums[0] *= nums[0]
        return nums
    }
    let arr = []
    let left = -1
    let right = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= 0){ 
            left = i
            right = i+1
        }
        nums[i] *= nums[i]
    }

    if(left === -1) return nums
    
    let count = 0
    while(left >= 0 && right < nums.length){
        if(nums[left] <= nums[right]){
            arr[count] = nums[left--]
        }else{
            arr[count] = nums[right++]
        }
        count++
    }
    while(left >= 0){
        arr[count] = nums[left--]
        count++
    }
    while(right < nums.length){
        arr[count] = nums[right++]
        count++
    }
    return arr
};