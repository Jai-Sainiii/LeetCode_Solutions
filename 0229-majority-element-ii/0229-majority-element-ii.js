/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let el1 = Number.MAX_SAFE_INTEGER, el2 = Number.MIN_SAFE_INTEGER;

    let c1 = 0, c2 = 0;

    for(const num of nums){
        if(num === el1){
            c1++
        }else if(num === el2){
            c2++
        }else if(c1 === 0){
            el1 = num
            c1 = 1
        }else if(c2 === 0){
            el2 = num
            c2 = 1
        }else{
            c1--
            c2--
        }
    }

    c1 = 0, c2 = 0;

    for(const num of nums){
        if(num === el1) c1++
        if(num === el2) c2++
    }

    let numbers = []
    let min = Math.floor(nums.length / 3)

    if(c1 > min){
        numbers.push(el1)
    }
    if(c2 > min){
        numbers.push(el2)
    }

    return numbers
};