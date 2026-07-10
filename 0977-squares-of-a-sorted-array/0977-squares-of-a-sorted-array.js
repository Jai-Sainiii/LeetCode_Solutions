/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];
    let left = 0;
    let right = nums.length-1;
    let pos = nums.length-1;
    while(left <= right){
        let l = nums[left] * nums[left];
        let r = nums[right] * nums[right];
        if(l > r){
            arr[pos--] = l;
            left++;
        }else{
            arr[pos--] = r;
            right--;
        }
    }
    return arr;
};