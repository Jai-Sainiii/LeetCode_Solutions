/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    function calProduct(n){
        let prod = 1
        while(n > 0){
            let last = n % 10;
            prod = prod * last;
            n = Math.floor(n / 10);
        }
        return prod;
    }

    function check(n){
        let prod = calProduct(n);
        if(prod % t === 0) return n;
        return check(n+1);
    }

    return check(n);
};