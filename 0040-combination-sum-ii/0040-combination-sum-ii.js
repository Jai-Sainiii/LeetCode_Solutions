/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates = candidates.sort((a,b) => a-b);

    function find(index, tar, arr){
        if(tar === 0){
            res.push([...arr]);
            return;
        }
        if(index === candidates.length || tar < 0) return;

        for(let i = index; i < candidates.length; i++){
            if(i > index && candidates[i] === candidates[i-1]) continue;
            if(candidates[i] > tar) break;

            arr.push(candidates[i]);
            find(i+1, tar - candidates[i], arr);
            arr.pop();
        }
    }

    find(0, target, []);
    return res;
};