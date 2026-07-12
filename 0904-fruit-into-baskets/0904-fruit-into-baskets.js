/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = new Map()
    let max = 0
    let left = 0
    for(let i = 0; i < fruits.length; i++){
        map.set(fruits[i], (map.get(fruits[i]) || 0) + 1)

        while(map.size > 2){
            map.set(fruits[left], (map.get(fruits[left]) || 0) - 1)
            if(map.get(fruits[left]) === 0){
                map.delete(fruits[left])
                left++
                break
            }
            left++
        }

        max = Math.max(i-left+1, max)
    }
    return max
};