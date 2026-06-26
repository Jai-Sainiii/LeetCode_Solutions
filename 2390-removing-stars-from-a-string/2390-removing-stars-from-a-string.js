/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let result = []
    for(const str of s){
        if(str === "*"){
            result.pop()
        }else{
            result.push(str)
        }
    }
    return result.join("")
};