/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1
    let lastSec = 0
    let last = 1
    for(let i = 1; i <= n; i++){
        let prev = last + lastSec
        lastSec = last
        last = prev
    }

    return last
};