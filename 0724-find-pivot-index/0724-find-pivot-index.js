/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let arr = []
    arr.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        arr[i] = arr[i-1] + nums[i] 
    }

    for (let i = 0; i < arr.length; i++) {
        if(i === 0 && arr[arr.length-1] - arr[0] === 0) return 0
        sum = arr[arr.length-1] - arr[i + 1]
        if(arr[i] === sum){
            return i+1
        }
    }
    return -1
};