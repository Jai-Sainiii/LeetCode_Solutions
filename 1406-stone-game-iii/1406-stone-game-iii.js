/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;
    const dp = Array.from(n).fill(undefined);
    function solve(idx){
        if(idx >= n) return 0;
        if(dp[idx] !== undefined) return dp[idx];
        let ans = -Infinity;
        let sum = 0;
        for(let i = 0; i < 3 && idx+i < n; i++){
            sum += stoneValue[idx+i];
            ans = Math.max(
                ans, sum - solve(idx+i+1)
            )
        }
        return dp[idx] = ans;
    }
    const winnerScore = solve(0);
    if(winnerScore > 0) return "Alice";
    if(winnerScore < 0) return "Bob";
    return "Tie";
};