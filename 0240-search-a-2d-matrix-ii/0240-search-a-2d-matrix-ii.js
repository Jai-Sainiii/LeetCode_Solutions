/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length
    let row = 0
    let col = matrix[0].length-1

    while(row < n && col >= 0){
        const current = matrix[row][col]
        if(current === target) return true
        if(current < target) row++
        else col--
    }
    return false
};