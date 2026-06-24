/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    function merge(arr, low, mid, high){
        let temp = []
        let left = low
        let right = mid+1

        while(left <= mid && right <= high){
            if(arr[left] <= arr[right]){
                temp.push(arr[left++])
            }else{
                temp.push(arr[right++])
            }
        }
        while(left <= mid){
            temp.push(arr[left++])
        }
        while(right <= high){
            temp.push(arr[right++])
        }

        for(let i = low; i <= high; i++){
            arr[i] = temp[i-low]
        }
    }

    function countPairs(arr, low, mid, high){
        let ctn = 0
        right = mid+1
        for (let i = low; i <= mid; i++) {
            while(right <= high && arr[i] > 2 * arr[right]) right++  
            ctn += right - (mid + 1)    
        }
        return ctn
    }

    function mergeSort(arr, low, high){
        let ctn = 0
        if(low >= high) return ctn 
        let mid = Math.floor((low+high) / 2)
        ctn += mergeSort(arr, low, mid)
        ctn += mergeSort(arr, mid+1, high)
        ctn += countPairs(arr, low, mid, high)
        merge(arr, low, mid, high)
        return ctn
    }

    let count = mergeSort(nums, 0, nums.length-1)

    return count
};