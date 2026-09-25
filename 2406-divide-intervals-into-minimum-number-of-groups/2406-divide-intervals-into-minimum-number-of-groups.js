/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let n = intervals.length;
    let startTimes = [], endTimes = [];
    for(let i = 0; i < n; i++){
        startTimes[i] = intervals[i][0];
        endTimes[i] = intervals[i][1];
    }

    startTimes.sort((a,b) => a-b);
    endTimes.sort((a,b) => a-b);

    let start = 0, end = 0, count = 0, maxCount = 0;
    while(start < n){
        if(startTimes[start] <= endTimes[end]){
            count++
            start++
        } else{
            count--;
            end++;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};