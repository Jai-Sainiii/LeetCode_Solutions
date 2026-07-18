/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    function find(a,b){
        while(a > 0 && b > 0){
            if(a > b){
                a = a % b
            }else{
                b = b % a
            }
        }

        if(a === 0) return b
        else return a
    }

    let min = Infinity
    let max = -Infinity

    for(const num of nums){
        if(num < min){
            min = num
        }
        if(num > max){
            max = num
        }
    }

    let ans = find(min, max)
    return ans
};