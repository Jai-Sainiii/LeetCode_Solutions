/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    let result = []

    for(let i = 0; i < strs.length; i++){
        let string = strs[i].split("").sort().join("")
        if(result.length === 0){
        result.push([strs[i]]) 
        map.set(string, result.length-1)
        continue
        }else{
            if(map.has(string)){
                result[map.get(string)].push(strs[i])
            }else{
                result.push([strs[i]])
                map.set(string, result.length-1)
            }
        }
    }

    result.sort((a,b) => a.length - b.length)

    return result
};