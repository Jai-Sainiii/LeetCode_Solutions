/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(" ").reverse()

    let result = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] !== "" && s[i] !== " " && i !== s.length-1) result += s[i] + " "
        else if(i === s.length-1) result += s[i]
        else continue
    }
    return result
};