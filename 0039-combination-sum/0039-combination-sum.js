/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    function find(index, tar, arr){
        if(tar === 0){
            ans.push([...arr]);
            return;
        }
        if(tar < 0 || index === candidates.length) return;

        arr.push(candidates[index])
        tar -= candidates[index];
        find(index, tar, arr);

        arr.pop()
        tar += candidates[index];
        find(index+1, tar, arr);
    }

    find(0, target, []);
    return ans;
};