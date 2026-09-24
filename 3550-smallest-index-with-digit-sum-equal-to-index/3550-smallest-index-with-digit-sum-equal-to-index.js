/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    function solve(num, index){
        let sum = 0;
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if(sum === index) return true;
        return false;
    }

    for(let i = 0; i < nums.length; i++){
        if(solve(nums[i], i)) return i;
    }

    return -1;
};