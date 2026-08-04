/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase()
    let left = 0
    let right = str.length-1
    while(left < right){
        while(left < right && !/[a-z0-9]/.test(str[left])) left++;
        while(left < right && !/[a-z0-9]/.test(str[right])) right--;
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};