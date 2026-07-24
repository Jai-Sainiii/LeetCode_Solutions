/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a,b) => a-b)

    let ans = -1
    for(let i = 0; i < nums.length; i++){

        if(i > 0 && nums[i] === nums[i-1]) continue


        let left = i+1
        let right = nums.length-1
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === target){
                return sum
            }
            if( ans === -1 || Math.abs(sum - target) < Math.abs(ans-target) ){
                ans = sum 
            }

            // while(left < right && nums[left] === nums[left - 1]) left++
            // while(left < right && nums[right] === nums[right + 1]) right--

            if(sum < target) left++
            else right--
        }
    }
    return ans
};