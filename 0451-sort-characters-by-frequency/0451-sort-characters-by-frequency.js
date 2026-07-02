/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map()

    for(const str of s){
        map.set(str, (map.get(str) || 0) + 1)
    }

    map = new Map(
        [...map].sort((a,b) => b[1] - a[1])
    )

    let result = ""
    for(const [key, value] of map){
        result += key.repeat(value)
    }
    return result
};