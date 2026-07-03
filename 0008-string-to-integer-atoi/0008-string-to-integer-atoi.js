/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = ""
    let sign = 1
    let i = 0

    while(i < s.length && s[i] === " ") i++ 

    if(i < s.length && (s[i] === "-" || s[i] === "+")){ 
        sign = s[i] === "-" ? -1 : 1
        i++
    }

    let num = 0

    while(i < s.length && /\d/.test(s[i])){
        num = num * 10 + Number(s[i])
        i++
    }

    num *= sign

    if(num > 2 ** 31 - 1) return 2 ** 31 - 1
    if(num < -(2 ** 31)) return -(2 ** 31)

    return num
};