/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length

    let firstRow = false
    let firstCol = false

    for (let i = 0; i < n; i++) {
        if(matrix[i][0] === 0){
            firstRow = true
            break
        }
    }

    for (let i = 0; i < m; i++) {
        if(matrix[0][i] === 0){
            firstCol = true
            break
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if(matrix[i][j] === 0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            } 
        } 
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if(matrix[i][0] === 0 || matrix [0][j] === 0){
                matrix[i][j] = 0
            } 
        } 
    }

    if(firstRow){
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0
        }
    }

    if(firstCol){
        for (let i = 0; i < m; i++) {
            matrix[0][i] = 0
        }
    }

    return matrix
};