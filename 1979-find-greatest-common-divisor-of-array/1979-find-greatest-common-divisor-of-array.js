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

        if(a === 0) return b;
        else return a;
    }

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    return find(min, max);
};