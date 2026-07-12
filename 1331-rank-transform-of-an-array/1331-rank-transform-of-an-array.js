/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let nums = [...arr]
    nums.sort((a,b) => a-b)

    let map = new Map()
    let count = 1
    for(const num of nums){
        if(map.has(num)) continue
        map.set(num, count++)
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = map.get(arr[i])
    }

    return arr
};