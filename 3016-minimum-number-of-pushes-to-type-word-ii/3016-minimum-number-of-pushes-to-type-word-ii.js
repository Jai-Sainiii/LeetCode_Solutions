/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let freq = new Array(26).fill(0);
    for(const ch of word) freq[ch.charCodeAt() - 97]++;
    freq.sort((a,b) => b-a)

    let ans = 0
    for(let i = 0; i < 26; i++){
        count = Math.floor(i/8) + 1
        ans += freq[i] * count
    }

    return ans
};