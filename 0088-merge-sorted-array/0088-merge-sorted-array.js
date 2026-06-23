/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums3 = [...nums1]
    let left = 0
    let right = 0
    let count = 0

    while(left < m && right < n){
        if(nums3[left] <= nums2[right]){
            nums1[count] = nums3[left]
            count++
            left++
        }else{
            nums1[count] = nums2[right]
            right++
            count++
        }
    }

    while(left < m){
        nums1[count] = nums3[left]
        count++
        left++
    }
    while(right < n){
        nums1[count] = nums2[right]
        count++
        right++
    }
};