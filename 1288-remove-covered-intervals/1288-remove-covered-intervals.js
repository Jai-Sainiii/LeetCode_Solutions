/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b) => {
            if(a[0] === b[0]) return b[1] - a[1]
            else return a[0] - b[0]
        }
    )
    let arr = []
    arr.push(intervals[0])
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] >= arr[arr.length-1][0] && intervals[i][1] <= arr[arr.length-1][1]){
            arr[arr.length-1][1] = Math.max(arr[arr.length-1][1], intervals[i][1])
        }else{ 
            arr.push(intervals[i])
        }
    }
    return arr.length
};