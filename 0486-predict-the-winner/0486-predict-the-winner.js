/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    let memo = new Map();
    
    function dfs(left, right){
        if(left === right) return nums[left];

        let key = `${left}, ${right}`;
        if(memo.has(key)){
            return memo.get(key);
        }

        let leftValue = nums[left] - dfs(left+1, right);
        let rightValue = nums[right] - dfs(left, right-1);

        let ans = Math.max(leftValue, rightValue);
        memo.set(key, ans);
        return ans;
    }

    return dfs(0, nums.length-1) >= 0;
};