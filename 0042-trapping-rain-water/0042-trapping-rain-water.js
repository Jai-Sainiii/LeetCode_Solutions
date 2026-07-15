/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length-1;
    let leftMax = 0, rightMax = 0, ans = 0;

    while(left < right){
        if(height[left] <= height[right]){
            if(leftMax > height[left]){
                ans += leftMax - height[left]
            }
            else leftMax = height[left]

            left++
        }else{
            if(rightMax > height[right]){
                ans += rightMax - height[right]
            }
            else rightMax = height[right]

            right--
        }
    }

    return ans
};