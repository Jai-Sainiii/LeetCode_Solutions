/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = []
    let val = 1
    row.push(val)

    for(let i = 1; i < rowIndex+1; i++){
        val = val * ((rowIndex+1)- i) / i
        row.push(val)
    }
    return row
};