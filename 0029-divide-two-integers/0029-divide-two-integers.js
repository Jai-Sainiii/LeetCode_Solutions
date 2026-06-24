/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MIN = -(2 ** 31)
    const INT_MAX = (2 ** 31) - 1

    if(dividend === INT_MIN && divisor === -1) return INT_MAX

    if(dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0) return Math.floor(dividend / divisor) 
    else if(dividend === 0 || divisor === 0) return 0
    else return Math.ceil(dividend / divisor) 
};