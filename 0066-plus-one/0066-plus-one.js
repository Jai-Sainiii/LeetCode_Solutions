/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0
    for(let i = digits.length-1; i >= 0; i--){
        let addDigit = carry === 0 ? digits[i] + 1 : digits[i] + carry
        if(addDigit > 9){
            carry = 1
            addDigit = 0
            digits[i] = addDigit
        } else{
            digits[i] = addDigit
            carry = 0
            break
        }  
    }

    if(carry){
        digits.unshift(carry)
    }

    return digits
};