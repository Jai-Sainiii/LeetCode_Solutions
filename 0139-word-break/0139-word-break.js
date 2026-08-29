/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    let memo = new Map();

    function solve(index){
        if(index === s.length){
            return true;
        }

        if(memo.has(index)) return memo.get(index);

        for(let i = index; i < s.length; i++){
            if(set.has(s.slice(index, i+1)) && solve(i+1)){
                memo.set(index, true);
                return true;
            }
        }

        memo.set(index, false);
        return false;
    }

    return solve(0);
};