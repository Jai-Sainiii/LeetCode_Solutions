/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let check = true
    let common = ""

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if(char === strs[j][i]){
                check = true
            }else{
                check = false
                break
            }
        }
        if(check) common += char
        else break
    }

    return common
};