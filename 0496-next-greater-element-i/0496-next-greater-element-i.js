/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map()
    for(let i = 0; i < nums1.length; i++){
        map.set(nums1[i], i)
    }

    let stack = []
    for(let i = nums2.length-1; i >= 0; i--){
        let num = nums2[i]
        while(stack.length && stack[stack.length-1] <= num){
            stack.pop()
        }

        if(stack.length === 0) nums1[map.get(num)] = -1
        else nums1[map.get(num)] = stack[stack.length-1]

        stack.push(num)
    }

    return nums1
};