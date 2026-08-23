/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = [];
    const numpad = {
        0:'', 1:'', 2:'abc', 3:'def', 4:'ghi', 5:'jkl', 6:'mno', 7:'pqrs', 8:'tuv', 9:'wxyz'
    }
    function combi(index, current){
        if(index === digits.length){
            ans.push(current);
            return;
        }
        let keypadkeys = numpad[digits[index] - '0'];
        for(let i = 0; i < keypadkeys.length; i++){
            combi(index+1, current + keypadkeys[i]);
        }
    }
    combi(0, "");
    return  ans;
};