/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    const ans = Array.from({ length:m }, () => Array(n).fill('#'));

    for(let col = 0; col < n; col++){
        ans[0][col] = '.';
    }

    for(let row = 0; row < m; row++){
        ans[row][n-1] = '.';
    }

    return ans.map(grid => grid.join(''));
};