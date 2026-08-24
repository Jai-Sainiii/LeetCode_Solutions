/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;

    function find(i, j, index){
        if(index === word.length) return true;
        if(i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[index]){
            return false;
        }

        //mark visited !
        const temp = board[i][j];
        board[i][j] = '$';

        const found = find(i+1, j, index+1) ||
                      find(i, j+1, index+1) ||
                      find(i-1, j, index+1) ||
                      find(i, j-1, index+1);

        board[i][j] = temp;
        return found;
    }

    for(let i = 0 ; i < m; i++){
        for(let j = 0 ; j < n; j++){
            if(board[i][j] === word[0] && find(i, j, 0)) return true;
        }
    }

    return false;
};