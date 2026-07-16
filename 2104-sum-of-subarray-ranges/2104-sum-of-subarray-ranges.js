/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    function findNSE(arr){
        let n = arr.length
        let NSE = new Array(n).fill(0)
        let stack = []

        for(let i = n-1; i >= 0; i--){
            while(stack.length && arr[stack[stack.length-1]] >= arr[i]){
                stack.pop()
            }

            NSE[i] = stack.length > 0 ? stack[stack.length-1] : n

            stack.push(i)
        }

        return NSE
    }

    function findPSE(arr){
        let n = arr.length
        let PSE = new Array(n).fill(0)
        let stack = []

        for(let i = 0; i < n; i++){
            while(stack.length && arr[stack[stack.length-1]] > arr[i]){
                stack.pop()
            }

            PSE[i] = stack.length > 0 ? stack[stack.length-1] : -1

            stack.push(i)
        }

        return PSE
    }

    function findNGE(arr){
        let n = arr.length
        let NGE = new Array(n).fill(0)
        let stack = []

        for(let i = n-1; i >= 0; i--){
            while(stack.length && arr[stack[stack.length-1]] <= arr[i]){
                stack.pop()
            }

            NGE[i] = stack.length > 0 ? stack[stack.length-1] : n

            stack.push(i)
        }

        return NGE
    }

    function findPGE(arr){
        let n = arr.length
        let PGE = new Array(n).fill(0)
        let stack = []

        for(let i = 0; i < n; i++){
            while(stack.length && arr[stack[stack.length-1]] < arr[i]){
                stack.pop()
            }

            PGE[i] = stack.length > 0 ? stack[stack.length-1] : -1

            stack.push(i)
        }

        return PGE
    }

    function sumSubArrayMins(arr){
        let nse = findNSE(arr)
        let pse = findPSE(arr)

        let minSum = 0
        for(let i = 0; i < arr.length; i++){
            let left = i - pse[i]
            let right = nse[i] - i

            let freq = right * left

            let val = freq * arr[i]

            minSum += val 
        }

        return minSum
    }

    function sumSubArrayMaxs(arr){
        let nge = findNGE(arr)
        let pge = findPGE(arr)

        let maxSum = 0
        for(let i = 0; i < arr.length; i++){
            let left = i - pge[i]
            let right = nge[i] - i

            let freq = right * left

            let val = freq * arr[i]

            maxSum += val 
        }

        return maxSum
    }

    return sumSubArrayMaxs(nums) - sumSubArrayMins(nums) 

};