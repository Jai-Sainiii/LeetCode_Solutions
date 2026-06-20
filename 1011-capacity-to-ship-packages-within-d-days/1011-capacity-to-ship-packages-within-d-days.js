/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let minimum = Math.max(...weights)
    let high = weights.reduce((a,b) => a+b, 0)

    while(minimum <= high){
        let mid = Math.floor((minimum + high) / 2)
        let currentWeight = 0
        let requiredDays = 1

        for(const weight of weights){
            if(currentWeight + weight > mid){
                requiredDays++
                currentWeight = weight
            }else{
                currentWeight += weight
            }
        }
        
        if(requiredDays <= days){
            high = mid - 1
        }else{
            minimum = mid + 1
        }
    }

    return minimum
};