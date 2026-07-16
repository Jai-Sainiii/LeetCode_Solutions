/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {

    function findNSE(arr){
        let NSE = new Array(arr.length).fill(0)
        let stack = []
        for(let i = arr.length-1; i >= 0; i--){
            while(stack.length && arr[stack[stack.length-1]] >= arr[i]){
                stack.pop()
            }

            if(stack.length === 0) NSE[i] = arr.length
            else NSE[i] = stack[stack.length-1]

            stack.push(i)
        }

        return NSE
    }

    function findPSE(arr){
        let PSE = new Array(arr.length).fill(0)
        let stack = []
        for(let i = 0; i < arr.length; i++){
            while(stack.length && arr[stack[stack.length-1]] > arr[i]){
                stack.pop()
            }

            if(stack.length === 0) PSE[i] = -1
            else PSE[i] = stack[stack.length-1]

            stack.push(i)
        }

        return PSE
    }


    let ans = 0
    let mod = 1e9 + 7;

    let nse = findNSE(arr)
    let pse = findPSE(arr)

    for(let i = 0; i < arr.length; i++){
        let left = i - pse[i]
        let right = nse[i] - i

        let freq = (right * left * 1)

        let val = (freq * arr[i]) % mod

        ans = (ans + val) % mod
    }

    return ans
};