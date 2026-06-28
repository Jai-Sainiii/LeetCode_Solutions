/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top = 0
    let bottom = n-1
    let left = 0
    let right = n-1
    let count = 1
    let matrix = Array.from({length:n}, () => Array(n).fill(0))
    while(left <= right && top <= bottom){
        for(let i = left; i <= right; i++){
            matrix[top][i] = count++
        }
        top++
        for(let i = top; i <= bottom; i++){
            matrix[i][right] = count++
        }
        right--
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                matrix[bottom][i] = count++
            }
            bottom--
        }
        if(left <= right){
            for(let i = bottom; i >= top; i--){
                matrix[i][left] = count++
            }
            left++
        }
    }
    return matrix
};