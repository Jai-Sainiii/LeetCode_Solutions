/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums)
    let high = nums.reduce((a,b) => a+b, 0)
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let reqSubArr = 1
        let reqSum = 0
        for(const num of nums){
            if(reqSum + num > mid){
                reqSubArr++
                reqSum = num
            }else{
                reqSum += num
            }
        }
        if(reqSubArr > k){
            low = mid+1
        }else{
            high = mid-1
        } 
    }
    return low
};