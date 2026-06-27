/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set()
    for(const candy of candyType){
        set.add(candy)
    }
    let canEat = candyType.length/2
    return Math.min(set.size, canEat)
};