/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let string = s.trim()
    let count = 0

    for (let i = string.length-1; i >= 0; i--) {
        if(string[i] !== " "){
            count++
        }else{
            break
        }
    }

    return count
};