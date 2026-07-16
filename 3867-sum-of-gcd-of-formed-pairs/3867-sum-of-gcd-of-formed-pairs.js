/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {

    function calGCD(num1, num2){
        while(num1 > 0 && num2 > 0){
            if(num1 > num2){
                num1 = num1 % num2
            }else{
                num2 = num2 % num1
            }
        }
        if(num1 === 0) return num2

        return num1
    }

    let prefixGCD = []
    let max = nums[0]
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        }
        prefixGCD[i] = calGCD(max, nums[i])
    }

    prefixGCD.sort((a,b) => a-b)

    let result = 0

    let left = 0
    let right = nums.length-1
    while(left < right){
        result += calGCD(prefixGCD[left], prefixGCD[right])
        left++
        right--
    }

    return result
    
};