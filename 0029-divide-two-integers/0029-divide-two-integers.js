/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    if(dividend === divisor) return 1;
    if(divisor === 1) return dividend;
    if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;

    let ans = 0;
    let sign = true;

    if(dividend >= 0 && divisor < 0) sign = false;
    if(dividend < 0 && divisor > 0) sign = false;

    let n = Math.abs(dividend), d = Math.abs(divisor);

    while(n >= d){
        let temp = d
        let count = 1

        while(n >= temp+temp){
            temp += temp;
            count += count;
        }

        ans += count;
        n -= temp;
    }

    if(ans > ((2 ** 31) - 1)) return 2 ** 31 - 1;
    if(ans <= -(2 ** 31)) return -(2 ** 31);

    return sign ? ans : -ans;
};