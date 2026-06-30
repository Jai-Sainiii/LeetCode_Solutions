/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = ""
    let level = 0
    for(const char of s){
        if(char === "("){
            if(level > 0) result += char
            level++
        }else{
            level--
            if(level > 0) result += char
        }
    }
    return result
};