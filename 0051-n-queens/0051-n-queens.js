/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];
    let board = Array.from({length:n}, () => Array(n).fill('.'));

    function isNotAttacked(row, col, board){
        let duprow = row;
        let dupcol = col;

        //checking upper diagonal
        while(row >= 0 && col >= 0){
            if(board[row--][col--] === 'Q') return false;
        }

        //checking left columns
        row = duprow;
        col = dupcol;
        while(col >= 0){
            if(board[row][col--] === 'Q') return false;
        }

        //checking lower diagonal
        row = duprow;
        col = dupcol;
        while(row < n && col >= 0){
            if(board[row++][col--] === 'Q') return false;
        }

        //no queen is attacking !
        return true;
    }

    function solve(col, board, ans){
        //base case : All queens placed successfully !
        if(col === n){
            ans.push(board.map(row => row.join("")));
            return;
        }

        //Find position to place queen in columns
        for(let row = 0; row < n; row++){
            if(isNotAttacked(row, col, board)){
                board[row][col] = 'Q';
                solve(col+1, board, ans);
                board[row][col] = '.';
            }
        }
    }

    solve(0, board, ans);
    return ans;
};