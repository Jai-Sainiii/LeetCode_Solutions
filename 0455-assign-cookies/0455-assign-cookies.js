/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);

    let left = 0
    let right = 0

    while(left < g.length && right < s.length){
        if(g[left] <= s[right]) left++;
        right++
    }

    return left;
};