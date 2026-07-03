/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    function MakeSubsets(index, current){
        if(index === nums.length){
            result.push([...current])
            return 
        }

        current.push(nums[index])
        MakeSubsets(index+1, current)

        current.pop()

        MakeSubsets(index+1, current)
    }
    MakeSubsets(0, [])
    return result
};