/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let set = new Set(nums);
    let ans = []
    for(let i = min; i <= max; i++){
        if(!set.has(i)){
            ans.push(i)
        }
    }
    return ans;
};