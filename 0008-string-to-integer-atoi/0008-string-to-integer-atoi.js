/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let INT_MIN = - (2 ** 31);
    let INT_MAX = (2 ** 31) - 1;

    function atoi(s, i, sign, num){
        if(i >= s.length || s[i] < '0' || s[i] > '9'){
            return sign * num;
        }
        
        num = num * 10 + Number(s[i]);

        if(sign * num >= INT_MAX) return INT_MAX;
        if(sign * num <= INT_MIN) return INT_MIN;

        return atoi(s, i+1, sign, num);
    }

    let i = 0;
    while(i < s.length && s[i] === " ") i++;

    let sign = 1;
    if(i < s.length && (s[i] === "+" || s[i] === "-")){
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    return atoi(s, i, sign, 0);
};