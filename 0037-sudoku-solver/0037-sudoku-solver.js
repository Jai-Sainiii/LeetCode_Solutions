/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(row, col, number){
        for(let i = 0; i < 9; i++){
            if(board[row][i] === number){
                return false;
            }

            if(board[i][col] === number){
                return false;
            }
        }

        const boxRowStart = 3 * Math.floor(row / 3);
        const boxColStart = 3 * Math.floor(col / 3);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRowStart + i][boxColStart + j] === number) {
                    return false;
                }
            }
        }

        return true;
    }

    function solve(){
        //loop through the board
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){

                if(board[i][j] === '.'){

                    for(let c = 1; c <= 9; c++){

                        let digit = c.toString();

                        if(isValid(i, j, digit)){
                            board[i][j] = digit;

                            if(solve()) return true;

                            board[i][j] = '.';
                        }   

                    }

                    return false;
                }

            }
        }

        return true;
    }

    solve();
};