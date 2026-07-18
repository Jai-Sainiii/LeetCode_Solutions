/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    function pSum(mat){
        let psum = Array.from({length: mat.length},() => Array(mat[0].length).fill(0))
        for(let j = 0; j < mat[0].length; j++){
            let sum = 0
            for(let i = 0; i < mat.length; i++){
                sum += Number(mat[i][j])
                if(Number(mat[i][j]) === 0) sum = 0
                psum[i][j] = sum
            }
        }

        return psum
    }

    function largestArea(arr){
        let max = 0
        let stack = []
        for(let i = 0; i < arr.length; i++){
            while(stack.length && arr[stack[stack.length-1]] >= arr[i]){
                let ele = arr[stack.pop()]
                let pse = stack.length ? stack[stack.length-1] : -1
                let nse = i

                max = Math.max(max, ele * (nse - pse - 1))
            }
            stack.push(i)
        }

        while(stack.length){
            let ele = arr[stack.pop()]
            let nse = arr.length
            let pse = stack.length ? stack[stack.length-1] : -1

            max = Math.max(max, ele * (nse - pse - 1))
        }

        return max
    }

    let maxArea = 0
    let psum = pSum(matrix)
    for(let i = 0; i < matrix.length; i++){
        maxArea = Math.max(maxArea, largestArea(psum[i]))
    }

    return maxArea
};