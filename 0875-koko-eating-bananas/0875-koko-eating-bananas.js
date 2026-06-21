/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minimum = 1
    let maximum = piles.reduce((a, b) => a + b, 0)

    while(minimum <= maximum){
        let mid = Math.floor((minimum+maximum) / 2)
        let hours = 0

        for (const pile of piles) {
            hours += Math.ceil(pile/mid)  
        }

        if(hours <= h){
            maximum = mid - 1
        }else{
            minimum = mid + 1
        }
    }

    return minimum
};