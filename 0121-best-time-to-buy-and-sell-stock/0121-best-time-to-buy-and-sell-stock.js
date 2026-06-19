/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = -Infinity
    let min = Infinity

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < min){
            min = prices[i]
        } 
        if(prices[i] - min > profit){
            profit = prices[i] - min
        }  
    }

    return profit
};