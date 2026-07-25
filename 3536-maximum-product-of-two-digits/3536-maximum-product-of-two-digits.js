/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let ans = -Infinity
    let secondMax = -Infinity
    let max = -Infinity
    while(n > 0){
        let digit = n % 10
        if(digit > max){
            secondMax = max
            max = digit
        }else if(digit > secondMax){
            secondMax = digit
        }
        ans = max * secondMax
        n = Math.floor(n / 10)
    }
    return ans
};