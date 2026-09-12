/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //Better solution #1
    // nums.sort((a,b) => a-b);

    // for(let i = 1; i < nums.length; i = i + 3){
    //     if(nums[i] !== nums[i-1]) return nums[i-1];
    // }

    // return nums[nums.length-1];


    //Bit Manupulation 
    let ans = 0;
    for(let index = 0; index < 32; index++){
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] & (1 << index)) count++;
        }

        if(count % 3 === 1) ans = ans | (1 << index);
    }

    return ans;
};