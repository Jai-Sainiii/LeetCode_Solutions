/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length
    let gotSum = 0
    let gotSqr = 0
    for(const num of nums){
        gotSum += num
        gotSqr += num * num
    }
    let expSum = n * (n + 1) / 2
    let expSqr = n * (n + 1) * (2 * n + 1) / 6

    let val1 = gotSum - expSum
    let val2 = gotSqr - expSqr

    val2 = val2/val1

    let x = (val1 + val2) / 2
    let y = x - val1

    return [Math.floor(x), Math.floor(y)]
};