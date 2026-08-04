/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlpha(ch){
        let char = ch.charCodeAt(0);
        return (
            (char >= 48 && char <= 57) || 
            (char >= 97 && char <= 122)
        )
    }
    
    let str = s.toLowerCase()
    let left = 0
    let right = str.length-1
    while(left < right){
        while(left < right && !isAlpha(str[left])) left++;
        while(left < right && !isAlpha(str[right])) right--;
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};