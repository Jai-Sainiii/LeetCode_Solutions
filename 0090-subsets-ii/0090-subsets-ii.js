/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let ans = [];
    function find(index, arr){
        ans.push([...arr]);

        for(let i = index; i < nums.length; i++){
            if(i > index && nums[i] === nums[i-1]) continue;

            arr.push(nums[i]);
            find(i+1, arr);

            arr.pop();
        }
    }

    find(0, []);
    return ans;
};