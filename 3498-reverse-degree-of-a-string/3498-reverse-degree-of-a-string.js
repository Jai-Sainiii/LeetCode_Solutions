/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let result = 0;
    for(let i = 0; i < s.length; i++){
        result += (26 - (s[i].charCodeAt(0) - 97)) * (i+1);
    }
    return result;
};