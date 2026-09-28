/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, left = 0, right = 0, n = nums.length;
    while(right < n-1){
        let farthest = 0;
        for(let i = left; i <= right; i++){
            farthest = Math.max(farthest, i + nums[i]);
        }
        jumps++;
        left = right+1;
        right = farthest;
    }
    return jumps;
};