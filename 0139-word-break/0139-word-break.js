/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    let memo = Array(s.length).fill(undefined);

    function solve(index){
        if(index === s.length){
            return true;
        }

        if(memo[index] !== undefined) return memo[index];

        for(let i = index; i < s.length; i++){
            if(set.has(s.slice(index, i+1)) && solve(i+1)){
                return memo[index] = true;
            }
        }

        return memo[index] = false;
    }

    return solve(0);
};