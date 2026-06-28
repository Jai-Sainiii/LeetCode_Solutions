/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b) => a-b)
    if(arr[0] !== 1) arr[0] = 1
    let ans = 1
    for(let i = 1; i < arr.length; i++){
        if((arr[i] - arr[i-1]) <= 1) {
            ans = Math.max(ans, arr[i])
            continue
        }
        else{
            arr[i] = arr[i-1] + 1
            ans = Math.max(ans, arr[i])
        }
    }
    return ans
};