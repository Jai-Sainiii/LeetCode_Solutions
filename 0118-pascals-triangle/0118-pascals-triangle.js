/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []
    for (let i = 1; i <= numRows; i++) {
        let row = []

        let val = 1
        row.push(val)

        for (let k = 1; k < i; k++) {
            val = val * (i - k) / k
            row.push(val)
        }

        triangle.push(row)
    }

    return triangle
};