/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let ans = "";
    let min = Infinity;

    let left = 0;
    let ones = 0;

    for(let right = 0; right < s.length; right++){

        if(s[right] === '1'){
            ones++;
        }

        while(s[left] === '0'){
            left++
        }

        while(ones > k){
            if(s[left] === '1'){
                ones--;
            }
            left++
            while(s[left] === '0') left++;
        }

        if(ones === k){
            let curr = s.slice(left, right+1);

            if(right-left+1 < min || (right-left+1 <= min && curr < ans)){
                ans = curr;
                min = right-left+1
            }
        }

    }

    return ans;
};