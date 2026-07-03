/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = ""
    let sign = 1
    let start = false

    for(const ch of s){
        if(!start && ch === " ") continue
        if(!start && (ch === "-" || ch === "+")){
            sign = ch === "-" ? -1 : 1
            start = true
            continue
        }

        if(/\d/.test(ch)){
            start = true
            result += ch
        }else{
            break
        }
        
        if(sign * Number(result) < -(2 ** 31 - 1)) return -((2 ** 31))
        if(sign * Number(result) > (2 ** 31 - 1)) return (2 ** 31 - 1)
    }
    return sign * Number(result || 0)
};