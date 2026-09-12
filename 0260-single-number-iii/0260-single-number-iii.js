/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    //Bit Manupulation | TC -> O(2N) , SC -> O(1)
    let xor = 0;
    for(let i = 0; i < nums.length; i++) xor = xor ^ nums[i];
    xor = (xor ^ (xor-1)) & xor;

    let b1, b2 = 0;
    for(let i = 0; i < nums.length; i++){
        if((xor & nums[i]) !== 0) b1 = b1 ^ nums[i];
        else b2 = b2 ^ nums[i];
    }

    return [b1, b2];
};