/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    function countSubArray(nums, goal){
        if(goal < 0) return 0
        let left = 0;
        let sum = 0;
        let count = 0;
        for(let right = 0; right < nums.length; right++){
            sum += nums[right];

            while(sum > goal){
                sum -= nums[left++];
            }

            count += (right - left + 1);
        }
        return count
    }
    return countSubArray(nums, goal) - countSubArray(nums, goal-1)
};