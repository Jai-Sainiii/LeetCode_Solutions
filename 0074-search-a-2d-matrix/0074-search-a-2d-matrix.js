/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = -1
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][0] <= target && target <= matrix[i][matrix[i].length-1]){
            row = i
        }
    }

    if(row === -1) return false

    let low = 0
    let high = matrix[row].length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(matrix[row][mid] === target) return true
        if(matrix[row][mid] > target){
            high = mid-1
        }else{
            low = mid+1
        }
    }

    return false
};