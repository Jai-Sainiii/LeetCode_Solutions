/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let set = new Set();
    function find(index, arr){
        if(index === nums.length){
            set.add(JSON.stringify(arr));
            return;
        }

        arr.push(nums[index]);
        find(index+1, arr);

        arr.pop();
        find(index+1, arr);
    }

    find(0, []);
    return [...set].map(ans => JSON.parse(ans))
};