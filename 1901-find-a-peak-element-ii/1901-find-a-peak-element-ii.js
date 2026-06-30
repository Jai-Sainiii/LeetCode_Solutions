/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    let max = -Infinity
    let ans = [1,1]
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j] > max){
                max = mat[i][j]
                ans = [i,j]
            }
        }
    }
    return ans
};