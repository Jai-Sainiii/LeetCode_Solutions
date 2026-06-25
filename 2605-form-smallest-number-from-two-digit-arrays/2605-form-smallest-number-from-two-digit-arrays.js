/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    let map = new Map()
    let ans = 11
    let min1 = 11
    let min2 = 12

    for(let i = 0; i < Math.max(nums1.length, nums2.length); i++){
        if(i < nums1.length){
            map.set(nums1[i], (map.get(nums1[i]) || 0) + 1)
            min1 = Math.min(min1, nums1[i])
        }   
        if(i < nums2.length){
            map.set(nums2[i], (map.get(nums2[i]) || 0) + 1)
            min2 = Math.min(min2, nums2[i])
        }   
    }
    if(min1 === min2) return min1

    for(const [key, value] of map){
        if(value === 2){
            ans = Math.min(ans, key)
        }
    }
    if(ans !== 11) return ans
    else{
        return Number(String(Math.min(min1, min2)) + String(Math.max(min1, min2)))
    }
    
};