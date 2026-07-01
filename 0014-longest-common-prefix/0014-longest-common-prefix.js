/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0]
    strs.sort()
    let ans = ""
    let first = strs[0]
    let last = strs[strs.length-1]
    for(let i = 0; i < Math.min(first.length, last.length); i++){
        if(first[i] !== last[i]) return ans
        else ans += first[i]
    }
    return ans
};