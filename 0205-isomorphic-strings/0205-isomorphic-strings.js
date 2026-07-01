/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map()
    let map2 = new Map()
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i]) || map2.has(t[i])){
            if(map.get(s[i]) === t[i]) continue
            else if(map.get(t[i]) === s[i]) continue
            else return false
        }else{
            map.set(s[i], t[i])
            map2.set(t[i], s[i])
        }
    }
    return true
};