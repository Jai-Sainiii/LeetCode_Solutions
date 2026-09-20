/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let board = Array.from({length: n}, () => Array(n).fill("."));

    function canPlace(row, col, board){
        for(let i = col; i >= 0; i--){
            if(board[row][i] === "$") return false;
        }

        let demoRow = row;
        let demoCol = col;
        while(demoRow >= 0 && demoCol >= 0){
            if(board[demoRow--][demoCol--] === "$") return false;
        }

        demoRow = row;
        demoCol = col;
        while(demoRow < n && demoCol >= 0){
            if(board[demoRow++][demoCol--] === "$") return false;
        }

        return true;
    }

    function solve(col, board){
        if(col === n){
            return 1;
        }

        let count = 0;

        for(let row = 0; row < n; row++){
            if(canPlace(row, col, board)){
                board[row][col] = "$";
                count += solve(col+1, board);
                board[row][col] = ".";
            }
        }

        return count;
    }

    return solve(0, board);
};