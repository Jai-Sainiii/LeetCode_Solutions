/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length
    if(n1 > n2) return findMedianSortedArrays(nums2, nums1)
    let low = 0, high = n1
    while(low <= high){
        let mid1 = Math.floor((low+high)/2)
        let mid2 = Math.floor((n1+n2+1)/2) - mid1

        let left1 = mid1 > 0 ? nums1[mid1-1] : -Infinity
        let left2 = mid2 > 0 ? nums2[mid2-1] : -Infinity

        let right1 = mid1 < n1 ? nums1[mid1] : Infinity
        let right2 = mid2 < n2 ? nums2[mid2] : Infinity

        if(left1 <= right2 && left2 <= right1){
            if((n1+n2) % 2 === 0) return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
            else return Math.max(left1, left2)
        }else{
            if(left1 > right2){
                high = mid1 - 1
            }else{
                low = mid1 + 1
            }
        }
    }
    return 0
};