/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let level = 0
    let max = 0
    for(const str of s){
        if(str === "("){
            level++
        }else if(str === ")"){
            max = Math.max(max, level)
            level--
        }
    }
    return max
};