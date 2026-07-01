/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    let arr = [...s]

    for (let i = 0; i < s.length; i++) {
        let char = arr[0]
        arr.shift()
        arr.push(char)
        if(arr.join("") === goal) return true
    }
    return false
};