/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    let memo = new Map();

    function check(start, end){
        if(set.has(s.slice(start, end+1))) return true;
        return false;
    }

    function solve(index){
        if(index === s.length){
            return true;
        }

        if(memo.has(index)) return memo.get(index);

        for(let i = index; i < s.length; i++){
            if(check(index, i) && solve(i+1)){
                memo.set(index, true);
                return true;
            }
        }

        memo.set(index, false);
        return false;
    }

    return solve(0);
};