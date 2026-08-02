/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x === 0) return 0;
    if(n === 1) return x;

    function pow(x, n){
        if(n === 0) return 1.0;
        if(n === 1) return x;

        if(n%2 === 0){
            return pow(x*x, n/2);
        }else{
            return x * pow(x, n-1);
        }
    }

    if(n < 0){
        return 1.0 / pow(x, -n)
    }

    return pow(x,n)
};