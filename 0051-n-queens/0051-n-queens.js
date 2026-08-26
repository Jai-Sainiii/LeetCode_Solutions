/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];
    let board = Array.from({length:n}, () => Array(n).fill('.'));
    let rows = Array(n).fill(0);
    let lowerDiagonal = Array(2 * n - 1).fill(0);
    let upperDiagonal = Array(2 * n - 1).fill(0);

    function solve(col, board, ans){
        //base case : All queens placed successfully !
        if(col === n){
            ans.push(board.map(row => row.join("")));
            return;
        }

        //Find position to place queen in columns
        for(let row = 0; row < n; row++){
            if(rows[row] === 0 && lowerDiagonal[row+col] === 0 && upperDiagonal[n-1 + col-row] === 0){
                board[row][col] = 'Q';
                rows[row] = 1;
                lowerDiagonal[row+col] = 1;
                upperDiagonal[n-1 + col-row] = 1;
                solve(col+1, board, ans);
                board[row][col] = '.';
                rows[row] = 0;
                lowerDiagonal[row+col] = 0;
                upperDiagonal[n-1 + col-row] = 0;
            }
        }
    }

    solve(0, board, ans);
    return ans;
};