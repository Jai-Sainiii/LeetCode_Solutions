/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])

    let ans = []

    let i = 0

    while(i < intervals.length) {
        if(ans.length === 0 || ans[ans.length - 1][1] < intervals[i][0]){
            ans.push([intervals[i][0], intervals[i][1]])
        }else{
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
        }
        i++
    }
    return ans
};