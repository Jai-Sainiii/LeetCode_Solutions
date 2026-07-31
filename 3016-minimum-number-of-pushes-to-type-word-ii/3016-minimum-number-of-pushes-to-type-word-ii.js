/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let map = new Map()
    for(const ch of word){
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    let sorted = [...map.entries()].sort((a, b) => b[1]-a[1]);
    let sortedMap = new Map(sorted)

    let ans = 0
    let count = 0
    for(const [_, value] of sortedMap){
        ans += value * (Math.floor(count/8) + 1)
        count++
    }

    return ans
};