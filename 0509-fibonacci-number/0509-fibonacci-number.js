/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //Egde cases
    if(n === 0) return 0;
    if(n === 1) return 1;

    //Memorization in dp;
    //dp array to store repeated results;
    let dp = [];

    //Base cases to store
    dp[0] = 0;
    dp[1] = 1;

    //iterate through to find ans and store via memorization;
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    // returning the found ans
    return dp[n];
};