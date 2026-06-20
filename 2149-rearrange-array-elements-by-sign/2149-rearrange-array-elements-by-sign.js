/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let arr2 = []
    let pos = 0
    let neg = 1

    for (let i = 0; i < nums.length; i++) {
        if(neg < nums.length){
            if(nums[i] < 0){
                arr2[neg] = nums[i]
                neg += 2
            }
        }
        if(pos < nums.length){
            if(nums[i] > 0){
                arr2[pos] = nums[i]
                pos += 2
            }
        }
        
    }

    return arr2
};