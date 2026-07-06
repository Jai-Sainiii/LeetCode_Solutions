/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let ans = 1
    let prev = intervals[0][1]
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][1] <= prev){ 
            continue
        }
        prev = intervals[i][1]
        ans++
    }
    return ans
};