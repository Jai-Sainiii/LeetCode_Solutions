/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ""
    let i = s.length-1
    while(i >= 0){
        while(i >= 0 && s[i] === " ") i--
        if(i < 0) break
        let end = i
        while(i >= 0 && s[i] !== " ") i--
        let word = s.substring(i+1, end+1)
        if(result.length > 0) result += " "
        result += word
    }
    
    return result
};