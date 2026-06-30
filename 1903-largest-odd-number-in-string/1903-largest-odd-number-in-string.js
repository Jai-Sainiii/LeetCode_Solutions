/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let end = -1
    let i = 0
    while(i < num.length){
        if(Number(num[i]) === 0){
            i++
            continue
        }
        start = i
        break
    }
    let result = ""
    let j = num.length-1
    while(j >= i){
        if(Number(num[j])%2 === 1) break
        else j--
    }
    result += num.substring(i,j+1)
    return result
};