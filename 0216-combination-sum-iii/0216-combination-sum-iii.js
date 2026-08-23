/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let ans = [];
    function find(num, arr, tar){
        if(arr.length === k){
            if(tar === 0) ans.push([...arr]);
            return;
        }
        if(arr.length > k) return;
        for(let i = num; i <= 9; i++){
            arr.push(i);
            find(i+1, arr, tar-i)
            arr.pop();
        }
    }
    find(1, [], n);
    return ans;
};