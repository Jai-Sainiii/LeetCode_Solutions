/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    let ans = [-1,-1]
    function maxElement(matrix, col){
        let max = -Infinity
        let row = -1
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][col] > max){
                max = matrix[i][col]
                row = i
            }
        }
        return row
    }
    let low = 0
    let high = mat[0].length-1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let row = maxElement(mat, mid)

        let leftVal = mid > 0 ? mat[row][mid-1] : -Infinity
        let rightVal = mid < mat[0].length-1 ? mat[row][mid+1] : -Infinity

        if(mat[row][mid] > leftVal && mat[row][mid] > rightVal) return [row, mid]
        else if(leftVal > mat[row][mid]) high = mid-1
        else low = mid+1
    }
    return ans
};