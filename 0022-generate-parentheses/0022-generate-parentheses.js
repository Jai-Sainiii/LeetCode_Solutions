/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function backtrack(open, close, curr){
        if(curr.length === 2 * n){
            res.push(curr);
            return;
        }

        if(open < n) backtrack(open+1, close, curr + '(');
        if(close < open) backtrack(open, close+1, curr + ')');
    }
    backtrack(0, 0, '');
    return res;
};