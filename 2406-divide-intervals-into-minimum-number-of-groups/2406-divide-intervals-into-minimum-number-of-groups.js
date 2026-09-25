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

    let endptr = 0, group_count = 0;
    for(const start of startTimes){
        if(start > endTimes[endptr]) endptr++;
        else group_count++;
    }

    return group_count;
};